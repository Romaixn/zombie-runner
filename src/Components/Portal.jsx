import { Text, shaderMaterial } from "@react-three/drei"
import { Pillar } from "./Pillar"
import portalVertexShader from '../shaders/portal/vertex.glsl'
import portalFragmentShader from '../shaders/portal/fragment.glsl'
import * as THREE from 'three'
import { extend, useFrame } from "@react-three/fiber"
import { useRef } from "react"

const PortalMaterial = shaderMaterial(
{
    uTime: 0,
    uColorStart: new THREE.Color('#ffffff'),
    uColorEnd: new THREE.Color('#000000')
}, portalVertexShader, portalFragmentShader)

extend({ PortalMaterial })

export function Portal({ side }) {
    const portalMaterial = useRef()

    useFrame((state, delta) =>
    {
        portalMaterial.current.uTime += delta
    })

    const posX = side === "left" ? -2.8 : 1
    return (
        <group position={[posX, 0, 0, 0]}>
            <Pillar position={[2.4, 0, 0]} />
            <Text position={[1, 2, 0.2]}>+2</Text>
            <mesh position={[1, 1, 0]}>
                <planeGeometry args={[2.5, 2]} />
                <portalMaterial ref={portalMaterial} />
            </mesh>
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
