import { useGLTF } from "@react-three/drei"
import { useMemo } from "react"

export function Pumpkin(props) {
    const pumpkinType = useMemo(() => {
        const random = Math.floor(Math.random() * 6) + 1
        let type

        switch(random) {
            case 1:
                type = 'pumpkin_orange_jackolantern'
                break
            case 2:
                type = 'pumpkin_orange'
                break
            case 3:
                type = 'pumpkin_orange_small'
                break
            case 4:
                type = 'pumpkin_yellow_jackolantern'
                break
            case 5:
                type = 'pumpkin_yellow'
                break
            case 6:
                type = 'pumpkin_yellow_small'
                break
            default:
                type = 'pumpkin_yellow_jackolantern'
        }

        return type
    }, [])

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

useGLTF.preload('/gltf/pumpkin_orange_jackolantern.gltf')
useGLTF.preload('/gltf/pumpkin_orange.gltf')
useGLTF.preload('/gltf/pumpkin_orange_small.gltf')
useGLTF.preload('/gltf/pumpkin_yellow_jackolantern.gltf')
useGLTF.preload('/gltf/pumpkin_yellow.gltf')
useGLTF.preload('/gltf/pumpkin_yellow_small.gltf')
