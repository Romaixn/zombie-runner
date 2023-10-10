import { Environment, KeyboardControls, Stars, useHelper, useKeyboardControls } from '@react-three/drei'
import { Skeleton } from './Components/Characters/Zombie'
import { Physics } from '@react-three/rapier'
import { Level } from './Level'
import { useRef } from 'react'
import * as THREE from 'three'
import { useControls } from 'leva'
import { useEffect } from 'react'
import useGame from './stores/useGame'
import Ecctrl from 'ecctrl'
import { useMemo } from 'react'

export function Game() {
    const blocksCount = useGame((state) => state.blocksCount)
    const blocksSeed = useGame((state) => state.blocksSeed)

    const keyboardMap = useMemo(() => [
        { name: 'forward', keys: ['ArrowUp', 'KeyW', 'KeyZ'] },
        { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
        { name: 'leftward', keys: ['ArrowLeft', 'KeyA', 'KeyQ'] },
        { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
        { name: 'jump', keys: ['Space'] },
        { name: 'run', keys: ['Shift'] },
        { name: 'mute', keys: ['KeyM'] },
    ], [])

    const audio = new THREE.Audio(new THREE.AudioListener())

    const toggleAudio = (play) => {
        if(play) {
            audio.play()
            return
        }

        audio.stop()
    }

    const light = useRef()
    const { lightHelper } = useControls({ lightHelper: false })
    useHelper(lightHelper && light, THREE.DirectionalLightHelper, 1)

    useEffect(() => {
        const audioLoader = new THREE.AudioLoader()
        audioLoader.load('/audio/background.wav', (buffer) => {
            audio.setBuffer(buffer)
            audio.setLoop(true)
            audio.setVolume(0.2)
            audio.play()
        })

        const unsuscribeToggleSound = useGame.subscribe(
            (state) => state.soundPlaying,
            (value) => {
                toggleAudio(value)
            }
        )

        return () => {
            unsuscribeToggleSound()
        }
    }, [])

    return (
        <>
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
            <Physics debug timeStep='vary'>
                <KeyboardControls map={keyboardMap}>
                    <Ecctrl position={[0, 0, 4]}>
                        <Skeleton position={[0, -0.7, 0]} userData={{ camExcludeCollision: true }} />
                    </Ecctrl>
                </KeyboardControls>

                <Level count={blocksCount} seed={blocksSeed} />
            </Physics>
        </>
    )
}
