import { useGLTF } from "@react-three/drei"

export function Grave(props) {
    const random = Math.floor(Math.random() * 6) + 1
    let graveType

    switch(random) {
        case 1:
            graveType = 'grave_A_destroyed'
            break
        case 2:
            graveType = 'grave_A'
            break
        case 3:
            graveType = 'grave_B'
            break
        case 4:
            graveType = 'gravemarker_A'
            break
        case 5:
            graveType = 'gravemarker_B'
            break
        case 6:
            graveType = 'gravestone'
            break
        default:
            graveType = 'grave_A'
    }

    const { nodes, materials } = useGLTF(`/gltf/${graveType}.gltf`)

    return (
        <group {...props}>
            <mesh
            geometry={nodes[graveType].geometry}
                material={materials.HalloweenBits}
                receiveShadow
                castShadow
            />
        </group>
    )
}

useGLTF.preload('/gltf/grave_A_destroyed.gltf')
useGLTF.preload('/gltf/grave_A.gltf')
useGLTF.preload('/gltf/grave_B.gltf')
useGLTF.preload('/gltf/gravemarker_A.gltf')
useGLTF.preload('/gltf/gravemarker_B.gltf')
useGLTF.preload('/gltf/gravestone.gltf')
