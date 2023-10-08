import { useGLTF } from "@react-three/drei"

export function Skull(props) {
    const random = Math.floor(Math.random() * 2) + 1
    let skullType

    switch(random) {
        case 1:
            skullType = 'skull'
            break
        case 2:
            skullType = 'skull_candle'
            break
        default:
            skullType = 'skull'
    }

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
