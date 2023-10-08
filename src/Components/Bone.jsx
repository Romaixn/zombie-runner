import { useGLTF } from "@react-three/drei"

export function Bone(props) {
    const random = Math.floor(Math.random() * 4) + 1
    let boneType

    switch(random) {
        case 1:
            boneType = 'bone_A'
            break
        case 2:
            boneType = 'bone_B'
            break
        case 3:
            boneType = 'bone_C'
            break
        case 4:
            boneType = 'ribcage'
            break
        default:
            boneType = 'bone_A'
    }

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
