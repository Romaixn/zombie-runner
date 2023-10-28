import { useGLTF } from "@react-three/drei"
import { useMemo } from "react"

export function Pillar(props) {
    const pillarType = useMemo(() => {
        const random = Math.floor(Math.random() * 6) + 1
        let type

        switch(random) {
            case 1:
                type = 'fence_pillar'
                break
            case 2:
                type = 'fence_pillar_broken'
                break
            default:
                type = 'fence_pillar'
        }

        return type
    }, [])

    const { nodes, materials } = useGLTF(`/gltf/${pillarType}.gltf`)

    return (
        <group {...props}>
            <mesh
                geometry={nodes[pillarType].geometry}
                material={materials.HalloweenBits}
                receiveShadow
                castShadow
            />
        </group>
    )
}

useGLTF.preload('/gltf/fence_pillar.gltf')
useGLTF.preload('/gltf/fence_pillar_broken.gltf')
