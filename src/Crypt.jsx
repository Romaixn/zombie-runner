import { useGLTF } from "@react-three/drei"

export function Crypt(props) {
    const { nodes, materials } = useGLTF('/gltf/crypt.gltf')

    return (
        <group {...props}>
            <mesh
                geometry={nodes.crypt.geometry}
                material={materials.HalloweenBits}
                receiveShadow
            />
        </group>
    )
}

useGLTF.preload('/gltf/crypt.gltf')
