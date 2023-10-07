import { useGLTF } from "@react-three/drei";

export function Gate(props) {
    const { nodes, materials } = useGLTF('/gltf/fence_gate.gltf')

    return (
        <group {...props}>
            <mesh
                geometry={nodes.fence_gate.geometry}
                material={materials.HalloweenBits}
                castShadow
                receiveShadow
            />
            <mesh
                geometry={nodes.fence_gate_left.geometry}
                material={materials.HalloweenBits}
                castShadow
                receiveShadow
            />
            <mesh
                geometry={nodes.fence_gate_right.geometry}
                material={materials.HalloweenBits}
                castShadow
                receiveShadow
            />
        </group>
    )
}

export function Fence(props) {
    const { nodes, materials } = useGLTF('/gltf/fence.gltf')

    return (
        <group {...props}>
            <mesh
                geometry={nodes.fence.geometry}
                material={materials.HalloweenBits}
                castShadow
                receiveShadow
            />
        </group>
    )
}

export function FenceBroken(props) {
    const { nodes, materials } = useGLTF('/gltf/fence_broken.gltf')

    return (
        <group {...props}>
            <mesh
                geometry={nodes.fence_broken.geometry}
                material={materials.HalloweenBits}
                castShadow
                receiveShadow
            />
        </group>
    )
}


useGLTF.preload('/gltf/fence_gate.gltf')
useGLTF.preload('/gltf/fence.gltf')
useGLTF.preload('/gltf/fence_broken.gltf')
