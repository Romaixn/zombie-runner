import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

export function Pillar(props) {
    const random = Math.floor(Math.random() * 6) + 1
    let pillarType

    switch(random) {
        case 1:
            pillarType = 'fence_pillar'
            break
        case 2:
            pillarType = 'fence_pillar_broken'
            break
        default:
            pillarType = 'fence_pillar'
    }

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
