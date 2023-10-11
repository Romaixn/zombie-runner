import { Environment, KeyboardControls, OrbitControls, Stars, useHelper, useKeyboardControls } from '@react-three/drei'
import { Skeleton } from './Components/Characters/Zombie'
import { Physics } from '@react-three/rapier'
import { Level } from './Level'
import { useRef } from 'react'
import * as THREE from 'three'
import { useControls } from 'leva'
import { useEffect } from 'react'
import useGame from './stores/useGame'
import Ecctrl from 'ecctrl'
import { Perf } from 'r3f-perf'
import { Lights } from './Lights'

export function Game() {
    const blocksCount = useGame((state) => state.blocksCount)
    const blocksSeed = useGame((state) => state.blocksSeed)

    const keyboardMap = [
        { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
        { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
        { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
        { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
        { name: 'jump', keys: ['Space'] },
        { name: 'run', keys: ['Shift'] }
    ]

    const audio = new THREE.Audio(new THREE.AudioListener())

    const toggleAudio = (play) => {
        if(play) {
            audio.play()
            return
        }

        audio.stop()
    }

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
            <Environment preset='night' />
            <Stars radius={50} count={800} fade speed={1} />
            {/* <OrbitControls /> */}
            <Perf position='top-left' />
            <Physics timeStep='vary'>
                <KeyboardControls map={keyboardMap}>
                    <Lights />
                    <Ecctrl debug followLight position={[0, 0, 4]}>
                        <Skeleton position={[0, -0.7, 0]} userData={{ camExcludeCollision: true }} />
                    </Ecctrl>
                </KeyboardControls>

                <Level count={blocksCount} seed={blocksSeed} />
            </Physics>
        </>
    )
}
