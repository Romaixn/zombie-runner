import { useGLTF } from "@react-three/drei"
import { useMemo } from "react"

export function Shrine(props) {
    const shrineType = useMemo(() => {
        const random = Math.floor(Math.random() * 3) + 1
        let type

        switch(random) {
            case 1:
                type = 'shrine'
                break
            case 2:
                type = 'shrine_candles'
                break
            case 3:
                type = 'plaque_candles'
                break
            default:
                type = 'shrine'
        }

        return type
    }, [])

    const { nodes, materials } = useGLTF(`/gltf/${shrineType}.gltf`)

    return (
        <group {...props}>
            <mesh
            geometry={nodes[shrineType].geometry}
                material={materials.HalloweenBits}
                receiveShadow
                castShadow
            />
        </group>
    )
}

useGLTF.preload('/gltf/shrine.gltf')
useGLTF.preload('/gltf/shrine_candles.gltf')
useGLTF.preload('/gltf/plaque_candles.gltf')
