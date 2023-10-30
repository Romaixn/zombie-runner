import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import useGame from "../stores/useGame";

export function Gate(props) {
    const { nodes, materials } = useGLTF('/gltf/arch_gate.gltf')
    const play = useGame((state) => state.play)

    return (
        <group {...props}>
            <RigidBody type='fixed' colliders='trimesh'>
                <mesh
                    geometry={nodes.arch_gate.geometry}
                    material={materials.HalloweenBits}
                    castShadow
                    receiveShadow
                />
            </RigidBody>
            <CuboidCollider
                args={[3.5, 1, 0]}
                position={[0, 1.1, -2]}
                sensor
                onIntersectionEnter={() => play()}
            />
            <RigidBody type='fixed' position={nodes.arch_gate_left.position} rotation={[0, - Math.PI / 2 + 0.8, 0]}>
                <mesh
                    geometry={nodes.arch_gate_left.geometry}
                    material={materials.HalloweenBits}
                    castShadow
                    receiveShadow
                />
            </RigidBody>
            <RigidBody type='fixed' position={nodes.arch_gate_right.position}>
                <mesh
                    geometry={nodes.arch_gate_right.geometry}
                    material={materials.HalloweenBits}

                    castShadow
                    receiveShadow
                />
            </RigidBody>
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
