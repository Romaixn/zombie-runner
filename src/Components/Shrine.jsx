import { useGLTF } from "@react-three/drei"

export function Shrine(props) {
    const random = Math.floor(Math.random() * 3) + 1
    let shrineType

    switch(random) {
        case 1:
            shrineType = 'shrine'
            break
        case 2:
            shrineType = 'shrine_candles'
            break
        case 2:
            shrineType = 'plaque_candles'
            break
        default:
            shrineType = 'shrine'
    }

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
