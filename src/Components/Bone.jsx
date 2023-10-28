import { useGLTF } from "@react-three/drei"
import { useMemo } from "react"

export function Bone(props) {
    const boneType = useMemo(() => {
        const random = Math.floor(Math.random() * 3) + 1
        let type

        switch(random) {
            case 1:
                type = 'bone_A'
                break
            case 2:
                type = 'bone_B'
                break
            case 3:
                type = 'bone_C'
                break
            default:
                type = 'bone_A'
        }

        return type
    }, [])

    const { nodes, materials } = useGLTF(`/gltf/${boneType}.gltf`)

    return (
        <group {...props}>
            <mesh
            geometry={nodes[boneType].geometry}
                material={materials.HalloweenBits}
                receiveShadow
                castShadow
            />
        </group>
    )
}

export function Ribcage(props) {
    const { nodes, materials } = useGLTF('/gltf/ribcage.gltf')

    return (
        <group {...props}>
            <mesh
                geometry={nodes.ribcage.geometry}
                material={materials.HalloweenBits}
                receiveShadow
                castShadow
            />
        </group>
    )
}

useGLTF.preload('/gltf/bone_A.gltf')
useGLTF.preload('/gltf/bone_B.gltf')
useGLTF.preload('/gltf/bone_C.gltf')
useGLTF.preload('/gltf/ribcage.gltf')
