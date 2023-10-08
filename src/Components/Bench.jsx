import { Sparkles, useGLTF, useHelper } from "@react-three/drei"
import { useControls } from "leva"
import { useRef } from "react"
import * as THREE from 'three'

export function Bench(props) {
    const { nodes, materials } = useGLTF(`/gltf/bench_decorated.gltf`)
    const light = useRef()
    const { lightHelper } = useControls({ lightHelper: false })

    useHelper(lightHelper && light, THREE.PointLightHelper, 1)

    return (
        <group {...props}>
            <mesh
                geometry={nodes.bench_decorated.geometry}
                material={materials.HalloweenBits}
                receiveShadow
                castShadow
            />
            <pointLight
                ref={light}
                castShadow
                position={[-0.6, 0.8, 0]}
                intensity={2}
                color={'#BF8838'}
            />
            <Sparkles
                count={6}
                size={5}
                speed={1.5}
                position={[-0.6, 1, 0]}
            />
        </group>
    )
}

useGLTF.preload('/gltf/bench_decorated.gltf')
