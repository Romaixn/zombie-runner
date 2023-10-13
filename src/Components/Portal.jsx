import { Text, shaderMaterial, useHelper } from "@react-three/drei"
import { Pillar } from "./Pillar"
import portalVertexShader from '../shaders/portal/vertex.glsl'
import portalFragmentShader from '../shaders/portal/fragment.glsl'
import * as THREE from 'three'
import { extend, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { useControls } from "leva"

const PortalMaterial = shaderMaterial(
{
    uTime: 0,
    uPullStrength: 0.1,
    uColor1: new THREE.Color('#ffa559'),
    uColor2: new THREE.Color('#ff6000'),
    uColor3: new THREE.Color('#ffe6c7'),
    uColor4: new THREE.Color('#f8fbf3'),
}, portalVertexShader, portalFragmentShader)

extend({ PortalMaterial })

export function Portal({ side }) {
    const surfaceRef = useRef()
    const lightRef = useRef();
    const { lightHelper } = useControls({ lightHelper: false })
    useHelper(lightHelper && lightRef, THREE.PointLightHelper, 1)

    const pull = {
        speed: 0,
        target: 0,
        value: 0,
    }

    useFrame((state, delta) =>
    {
        const pullDelta = pull.target - pull.value
        pull.speed += pullDelta * 0.005 * delta
        pull.value += pull.speed

        if(surfaceRef.current) {
            surfaceRef.current.material.uniforms.uPullStrength.value = pull.value;
            surfaceRef.current.material.uniforms.uTime.value = state.clock.elapsedTime;
        }

        if (lightRef.current) {
            lightRef.current.intensity =
              3 + Math.sin(state.clock.elapsedTime * 0.0001 * 100) * 0.25;
          }
    })

    const posX = side === "left" ? -2.8 : 1
    return (
        <group position={[posX, 0, 0, 0]}>
            <Pillar position={[2.4, 0, 0]} />
            <Text position={[1, 2, 0.2]}>+2</Text>
            <mesh position={[1, 1, 0]} ref={surfaceRef}>
                <planeGeometry args={[2.5, 2]} />
                <portalMaterial />
            </mesh>
            <pointLight
                ref={lightRef}
                color={'#ff6000'}
                position={[1, 1, 0]}
                intensity={3}
                castShadow
                shadow-mapSize-x={1024}
                shadow-mapSize-y={1024}
                shadow-camera-near={0.1}
                shadow-camera-far={100}
            />
            <Pillar position={[-0.5, 0, 0]} />
        </group>
    )
}

export function Portals() {
    return (
        <>
            <Portal side='left' />
            <Portal side='right' />
        </>
    )
}
