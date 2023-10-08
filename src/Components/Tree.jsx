import { useGLTF } from "@react-three/drei"

export function Tree(props) {
    const random = Math.floor(Math.random() * 6) + 1
    let treeType

    switch(random) {
        case 1:
            treeType = 'tree_pine_orange_medium'
            break
        case 2:
            treeType = 'tree_pine_orange_small'
            break
        case 3:
            treeType = 'tree_dead_medium'
            break
        case 4:
            treeType = 'tree_dead_small'
            break
        case 5:
            treeType = 'tree_pine_yellow_medium'
            break
        case 6:
            treeType = 'tree_pine_yellow_small'
            break
        default:
            treeType = 'tree_pine_orange_small'
    }

    const { nodes, materials } = useGLTF(`/gltf/${treeType}.gltf`)

    return (
        <group {...props}>
            <mesh
                geometry={nodes[treeType].geometry}
                material={materials.HalloweenBits}
                receiveShadow
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
