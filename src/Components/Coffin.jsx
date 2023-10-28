import { useGLTF } from "@react-three/drei"
import { useMemo } from "react"

export function Coffin(props) {
    const coffinType = useMemo(() => {
        const random = Math.floor(Math.random() * 2) + 1
        let type
        let lid = false

        switch(random) {
            case 1:
                type = 'coffin'
                lid = true
                break
            case 2:
                type = 'coffin_decorated'
                lid = false
                break
            default:
                type = 'coffin'
                lid = true
        }

        return { type, lid }
    }, [])

    const { nodes, materials } = useGLTF(`/gltf/${coffinType.type}.gltf`)

    return (
        <group {...props}>
            <mesh
                geometry={nodes[coffinType.type].geometry}
                material={materials.HalloweenBits}
                receiveShadow
                castShadow
            />
            {coffinType.lid && (
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
