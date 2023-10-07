import { Html, KeyboardControls, OrbitControls, useProgress } from '@react-three/drei'
// import { Skeleton } from './Components/Characters/Zombie'
import { Suspense } from 'react'
import { Physics } from '@react-three/rapier'
import { Level } from './Level'
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

  return (
    <>
        <ambientLight />
        <directionalLight
            position={[0, 1, 2]}
            intensity={ 1.5 }
        />
        <OrbitControls />

        <Suspense fallback={<Loader />}>
            <Physics timeStep='vary'>
                <Level />
                {/* <KeyboardControls map={keyboardMap}>
                    <Ecctrl>
                        <Skeleton />
                    </Ecctrl>
                </KeyboardControls> */}
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
