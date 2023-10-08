import { useGLTF } from "@react-three/drei"

export function Coffin(props) {
    const random = Math.floor(Math.random() * 2) + 1
    let coffinType
    let lid = false

    switch(random) {
        case 1:
            coffinType = 'coffin'
            lid = true
            break
        case 2:
            coffinType = 'coffin_decorated'
            lid = false
            break
        default:
            coffinType = 'coffin'
            lid = true
    }

    const { nodes, materials } = useGLTF(`/gltf/${coffinType}.gltf`)

    return (
        <group {...props}>
            <mesh
                geometry={nodes[coffinType].geometry}
                material={materials.HalloweenBits}
                receiveShadow
                castShadow
            />
            {lid && (
                <mesh
                    geometry={nodes.coffin_lid.geometry}
                    material={materials.HalloweenBits}
                    rotation={[0, -0.4, 0]}
                    receiveShadow
                    castShadow
                />
            )}
        </group>
    )
}

useGLTF.preload('/gltf/coffin.gltf')
useGLTF.preload('/gltf/coffin_decorated.gltf')
