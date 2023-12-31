import { Cloud, Clouds, Environment, KeyboardControls, Stars } from '@react-three/drei'
import { Army } from './Components/Characters/Skeleton'
import { Physics } from '@react-three/rapier'
import { Level } from './Level'
import * as THREE from 'three'
import { useEffect } from 'react'
import useGame from './stores/useGame'
import Controller from './Components/Controls/Ecctrl'
import { Perf } from 'r3f-perf'
import { Lights } from './Lights'
import { Effects } from './Effects'

const isProd = process.env.NODE_ENV === 'production'

export function Game() {
    const blocksCount = useGame((state) => state.blocksCount)
    const blocksSeed = useGame((state) => state.blocksSeed)
    const countArmy = useGame((state) => state.countArmy)

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
            {!isProd && <Perf position='top-left' />}
            <Physics>
                <Controller
                    followLight
                    camInitDir={Math.PI}
                    camInitDis={-8}
                    camMaxDis={-8}
                    maxVelLimit={3}
                    position={[0, 4, 7]}
                >
                    <Army count={countArmy} />
                </Controller>

                <Lights />
                <Level count={blocksCount} seed={blocksSeed} />
            </Physics>
            <Effects />
        </>
    )
}
