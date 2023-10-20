import { Suspense } from 'react'
import useGame from './stores/useGame'
import { Game } from './Game'
import { Canvas } from '@react-three/fiber'
import { LoadingScreen } from './LoadingScreen'
import Interface from './Interface'


function Experience() {
    const phase = useGame((state) => state.phase)

    return (
        <>
            <Canvas
                shadows
                camera={ {
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [ 2, 5, 20 ],
                } }
                onPointerDown={(e) => {
                    e.target.requestPointerLock()
                }}
            >
                <color args={ [ '#383B43' ] } attach="background" />
                <fog attach='fog' args={['#383B43', 1, 30]} />

                <Suspense fallback={null}>{ phase !== 'welcome' && <Game /> }</Suspense>
            </Canvas>
            { phase !== 'welcome' && <Interface /> }
            <LoadingScreen />
        </>
    )
}

export default Experience
