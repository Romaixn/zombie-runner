import { useGLTF, useHelper } from "@react-three/drei"
import { useControls } from "leva"
import { useEffect } from "react"
import { useRef } from "react"
import * as THREE from 'three'

export function LanternHanging(props) {
    const { nodes, materials } = useGLTF('/gltf/post_lantern.gltf')
    const lightTarget = useRef()
    const light = useRef()
    const { lightHelper } = useControls({ lightHelper: false })

    useHelper(lightHelper && light, THREE.SpotLightHelper, 1)

    useEffect(() => {
        light.current.target = lightTarget.current
    }, [])

    return (
        <group {...props}>
            <mesh
                geometry={nodes.post_lantern.geometry}
                material={materials.HalloweenBits}
                castShadow
                receiveShadow
            />
            <mesh
                geometry={nodes.post_lantern_lantern.geometry}
                material={materials.HalloweenBits}
                position={[0, 3, 1]}
                castShadow
                receiveShadow
            />
            <mesh
                ref={lightTarget}
                position={[0, 0, 1]}
            />
            <spotLight
                ref={light}
                castShadow
                position={[0, 2, 1]}
                intensity={3}
                color={'#BF8838'}
            />
        </group>
    )
}

useGLTF.preload('/gltf/post_lantern.gltf')
