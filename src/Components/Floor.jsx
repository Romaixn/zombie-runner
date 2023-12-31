import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useMemo } from "react";

export function Floor(props) {
    const { nodes, materials } = useGLTF('/gltf/floor_dirt.gltf')

    return (
        <group {...props}>
            <mesh
                geometry={nodes.floor_dirt.geometry}
                material={materials.HalloweenBits}
                receiveShadow
            />
        </group>
    )
}

export function FloorGrave(props) {
    const { nodes, materials } = useGLTF('/gltf/floor_dirt_grave.gltf')

    return (
        <group {...props}>
            <mesh
                geometry={nodes.floor_dirt_grave.geometry}
                material={materials.HalloweenBits}
                receiveShadow
            />
        </group>
    )
}


export function Path(props) {
    const pathType = useMemo(() => {
        const random = Math.floor(Math.random() * 3) + 1
        let type

        switch(random) {
            case 1:
                type = 'path_A'
                break
            case 2:
                type = 'path_B'
                break
            case 3:
                type = 'path_C'
                break
            default:
                type = 'path_A'
        }

        return type
    }, [])

    const { nodes, materials } = useGLTF(`/gltf/${pathType}.gltf`)

    return (
        <group {...props}>
            <mesh
                geometry={nodes[pathType].geometry}
                material={materials.HalloweenBits}
                receiveShadow
                castShadow
            />
        </group>
    )
}

useGLTF.preload('/gltf/floor_dirt.gltf')
useGLTF.preload('/gltf/floor_dirt_grave.gltf')
useGLTF.preload('/gltf/path_A.gltf')
useGLTF.preload('/gltf/path_B.gltf')
useGLTF.preload('/gltf/path_C.gltf')
useGLTF.preload('/gltf/path_D.gltf')
