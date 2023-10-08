import { useGLTF } from "@react-three/drei"

export function Pumpkin(props) {
    const random = Math.floor(Math.random() * 6) + 1
    let pumpkinType

    switch(random) {
        case 1:
            pumpkinType = 'pumpkin_orange_jackolantern'
            break
        case 2:
            pumpkinType = 'pumpkin_orange'
            break
        case 3:
            pumpkinType = 'pumpkin_orange_small'
            break
        case 4:
            pumpkinType = 'pumpkin_yellow_jackolantern'
            break
        case 5:
            pumpkinType = 'pumpkin_yellow'
            break
        case 6:
            pumpkinType = 'pumpkin_yellow_small'
            break
        default:
            pumpkinType = 'pumpkin_yellow_jackolantern'
    }

    const { nodes, materials } = useGLTF(`/gltf/${pumpkinType}.gltf`)

    return (
        <group {...props}>
            <mesh
            geometry={nodes[pumpkinType].geometry}
                material={materials.HalloweenBits}
                receiveShadow
                castShadow
            />
        </group>
    )
}
