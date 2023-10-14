import { Environment, KeyboardControls, Stars } from '@react-three/drei'
import { Army } from './Components/Characters/Skeleton'
import { Physics } from '@react-three/rapier'
import { Level } from './Level'
import * as THREE from 'three'
import { useEffect } from 'react'
import useGame from './stores/useGame'
import Ecctrl from 'ecctrl'
import { Perf } from 'r3f-perf'
import { Lights } from './Lights'

const isProd = process.env.NODE_ENV === 'production'

export function Game() {
    const blocksCount = useGame((state) => state.blocksCount)
    const blocksSeed = useGame((state) => state.blocksSeed)
    const countArmy = useGame((state) => state.countArmy)

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
            {!isProd && <Perf  position='top-left' />}
            <Physics>
                <KeyboardControls map={keyboardMap}>
                    <Ecctrl
                        followLight
                        camInitDis={-8}
                        camMaxDis={-8}
                        springK={2}
                        dampingC={0.2}
                        autoBalanceSpringK={1.2}
                        autoBalanceDampingC={0.04}
                        position={[4, 5, 0]}
                    >
                        <Army count={countArmy} />
                    </Ecctrl>
                </KeyboardControls>

                <Lights />
                <Level count={blocksCount} seed={blocksSeed} />
            </Physics>
        </>
    )
}
