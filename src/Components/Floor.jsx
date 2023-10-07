import { useGLTF } from "@react-three/drei";

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
    const { nodes, materials } = useGLTF('/gltf/path_A.gltf')

    return (
        <group {...props}>
            <mesh
                geometry={nodes.path_A.geometry}
                material={materials.HalloweenBits}
                receiveShadow
            />
        </group>
    )
}

useGLTF.preload('/gltf/floor_dirt.gltf')
useGLTF.preload('/gltf/floor_dirt_grave.gltf')
