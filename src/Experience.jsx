import { Suspense } from 'react'
import useGame from './stores/useGame'
import { Game } from './Game'
import { Canvas } from '@react-three/fiber'
import { LoadingScreen } from './LoadingScreen'
import { KeyboardControls } from '@react-three/drei'
import Interface from './Interface'
import { useRef } from 'react'
import { requestPointerLock } from './utils/PointerLockHandler'

function Experience() {
    const canvasRef = useRef()

    const phase = useGame((state) => state.phase)
    const keyboardMap = [
        { name: 'forward', keys: ['ArrowUp', 'KeyW', 'KeyZ'] },
        { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
        { name: 'leftward', keys: ['ArrowLeft', 'KeyA', 'KeyQ'] },
        { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
        { name: 'jump', keys: ['Space'] },
        { name: 'run', keys: ['Shift'] }
    ]

    const handlePointerDown = () => {
        requestPointerLock(canvasRef.current)
    }

    return (
        <>
            <KeyboardControls map={keyboardMap}>
                <Canvas
                    ref={canvasRef}
                    shadows
                    camera={ {
                        fov: 45,
                        near: 0.1,
                        far: 200,
                        position: [ 2, 5, 20 ],
                    } }
                    onPointerDown={handlePointerDown}
                >
                    <color args={ [ '#383B43' ] } attach="background" />
                    <fog attach='fog' args={['#383B43', 1, 30]} />

                    <Suspense fallback={null}>{ phase !== 'welcome' && <Game /> }</Suspense>
                </Canvas>
                { phase !== 'welcome' && <Interface /> }
            </KeyboardControls>
            <LoadingScreen />
        </>
    )
}

export default Experience
