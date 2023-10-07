import { useGLTF } from "@react-three/drei"

export function LanternHanging(props) {
    const { nodes, materials } = useGLTF('/gltf/post_lantern.gltf')

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
        </group>
    )
}

useGLTF.preload('/gltf/post_lantern.gltf')
