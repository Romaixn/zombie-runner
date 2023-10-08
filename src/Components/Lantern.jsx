import { useGLTF, useHelper } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from 'three'

export function LanternHanging(props) {
    const { nodes, materials } = useGLTF('/gltf/post_lantern.gltf')
    const light = useRef()
    useHelper(light, THREE.PointLightHelper, 1)

    return (
        <group {...props}>
            <mesh
                geometry={nodes.post_lantern.geometry}
                material={materials.HalloweenBits}
                castShadow
                receiveShadow
            />
            <mesh
                geometry={nodes.post_lantern_lantern.geometry}
                material={materials.HalloweenBits}
                position={[0, 3, 1]}
                castShadow
                receiveShadow
            />
            <pointLight
                ref={light}
                position={[0, 2, 1]}
                intensity={5}
                color={'#BF8838'}
            />
        </group>
    )
}

useGLTF.preload('/gltf/post_lantern.gltf')
