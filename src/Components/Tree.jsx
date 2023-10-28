import { useGLTF } from "@react-three/drei"
import { useMemo } from "react"

export function Tree(props) {
    const treeType = useMemo(() => {
        const random = Math.floor(Math.random() * 6) + 1
        let type

        switch(random) {
            case 1:
                type = 'tree_pine_orange_medium'
                break
            case 2:
                type = 'tree_pine_orange_small'
                break
            case 3:
                type = 'tree_dead_medium'
                break
            case 4:
                type = 'tree_dead_small'
                break
            case 5:
                type = 'tree_pine_yellow_medium'
                break
            case 6:
                type = 'tree_pine_yellow_small'
                break
            default:
                type = 'tree_pine_orange_small'
        }

        return type
    }, [])

    const { nodes, materials } = useGLTF(`/gltf/${treeType}.gltf`)

    return (
        <group {...props}>
            <mesh
                geometry={nodes[treeType].geometry}
                material={materials.HalloweenBits}
                receiveShadow
                castShadow
            />
        </group>
    )
}

useGLTF.preload('/gltf/tree_pine_orange_medium.gltf')
useGLTF.preload('/gltf/tree_pine_orange_small.gltf')
useGLTF.preload('/gltf/tree_dead_medium.gltf')
useGLTF.preload('/gltf/tree_dead_small.gltf')
useGLTF.preload('/gltf/tree_pine_yellow_medium.gltf')
useGLTF.preload('/gltf/tree_pine_yellow_small.gltf')
