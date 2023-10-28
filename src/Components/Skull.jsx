import { useGLTF } from "@react-three/drei"
import { useMemo } from "react"

export function Skull(props) {
    const skullType = useMemo(() => {
        const random = Math.floor(Math.random() * 2) + 1
        let type

        switch(random) {
            case 1:
                type = 'skull'
                break
            case 2:
                type = 'skull_candle'
                break
            default:
                type = 'skull'
        }

        return type
    }, [])


    const { nodes, materials } = useGLTF(`/gltf/${skullType}.gltf`)

    return (
        <group {...props}>
            <mesh
            geometry={nodes[skullType].geometry}
                material={materials.HalloweenBits}
                receiveShadow
                castShadow
            />
        </group>
    )
}

useGLTF.preload('/gltf/skull.gltf')
useGLTF.preload('/gltf/skull_candle.gltf')
