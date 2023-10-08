import { Environment, Html, KeyboardControls, OrbitControls, Stars, useHelper } from '@react-three/drei'
import { Skeleton } from './Components/Characters/Zombie'
import { Physics } from '@react-three/rapier'
import { Level } from './Level'
import { useRef } from 'react'
import * as THREE from 'three'
import { useControls } from 'leva'
import { useEffect } from 'react'
import useGame from './stores/useGame'
// import Ecctrl from 'ecctrl'

export function Game() {
    const keyboardMap = [
        { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
        { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
        { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
        { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
        { name: 'jump', keys: ['Space'] },
        { name: 'run', keys: ['Shift'] },
    ]

    const audio = new Audio('/audio/background.wav')
    audio.loop = true
    const toggleAudio = (play = true) => {
        if(play) {
            audio.play()
            return
        }

        audio.pause()
    }

    const light = useRef()
    const { lightHelper } = useControls({ lightHelper: false })
    useHelper(lightHelper && light, THREE.DirectionalLightHelper, 1)

    const { levelCount } = useControls('level', {
        levelCount: {
            value: 5,
            min: 1,
            max: 50,
            step: 1,
        },
    })

    const phase = useGame((state) => state.phase)

    useEffect(() => {
        if(phase === 'playing') {
            toggleAudio()
        }

        const unsuscribeToggleSound = useGame.subscribe(
            (state) => state.soundPlaying,
            (value) => {
                toggleAudio(value)
            }
        )

        return () => {
            unsuscribeToggleSound()
        }
    }, [phase])

    return (
        <>
            <OrbitControls />

            <directionalLight
                ref={light}
                castShadow
                position={ [ 4, 4, 4 ] }
                intensity={ 0.6 }
                shadow-mapSize={ [ 1024, 1024 ] }
                shadow-camera-near={ 1 }
                shadow-camera-far={ 13 }
                shadow-camera-top={ 10 }
                shadow-camera-right={ 10 }
                shadow-camera-bottom={ - 10 }
                shadow-camera-left={ - 10 }
            />
            <Environment preset='night' />
            <Stars radius={50} count={800} fade speed={1} />
            <Physics timeStep='vary'>
                <Level count={levelCount} />
                <KeyboardControls map={keyboardMap}>
                    {/* <Ecctrl> */}
                        <Skeleton position={[0, 0, 4]} />
                    {/* </Ecctrl> */}
                </KeyboardControls>
            </Physics>
        </>
    )
}
