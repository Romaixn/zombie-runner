import { useGLTF } from "@react-three/drei"
import { useMemo } from "react"

export function Grave(props) {
    const graveType = useMemo(() => {
        const random = Math.floor(Math.random() * 6) + 1
        let type

        switch(random) {
            case 1:
                type = 'grave_A_destroyed'
                break
            case 2:
                type = 'grave_A'
                break
            case 3:
                type = 'grave_B'
                break
            case 4:
                type = 'gravemarker_A'
                break
            case 5:
                type = 'gravemarker_B'
                break
            case 6:
                type = 'gravestone'
                break
            default:
                type = 'grave_A'
        }

        return type
    }, [])

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
