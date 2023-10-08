import { Environment, Html, KeyboardControls, OrbitControls, Sparkles, Stars, useHelper, useProgress } from '@react-three/drei'
import { Skeleton } from './Components/Characters/Zombie'
import { Suspense } from 'react'
import { Physics } from '@react-three/rapier'
import { Level } from './Level'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import * as THREE from 'three'
import { useControls } from 'leva'
// import Ecctrl from 'ecctrl'


function Experience() {
    const keyboardMap = [
        { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
        { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
        { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
        { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
        { name: 'jump', keys: ['Space'] },
        { name: 'run', keys: ['Shift'] },
    ]

    const light = useRef()
    const { lightHelper } = useControls({ lightHelper: false })
    useHelper(lightHelper && light, THREE.DirectionalLightHelper, 1)

    const { levelCount } = useControls('level', {
        levelCount: {
            value: 3,
            min: 1,
            max: 50,
            step: 1,
        },
    })

  return (
    <>
        <Perf position='top-left' />
        <color args={ [ '#383B43' ] } attach="background" />
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

        <OrbitControls />

        <Suspense fallback={<Loader />}>
            <Physics timeStep='vary'>
                <Level count={levelCount} />
                <KeyboardControls map={keyboardMap}>
                    {/* <Ecctrl> */}
                        <Skeleton position={[0, 0, 4]} />
                    {/* </Ecctrl> */}
                </KeyboardControls>
            </Physics>
        </Suspense>
    </>
  )
}

function Loader() {
    const { progress } = useProgress()

    return <Html center>{progress} % loaded</Html>
}

export default Experience
