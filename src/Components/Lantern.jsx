import { Sparkles, useGLTF, useHelper } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { useControls } from "leva"
import { useEffect } from "react"
import { useRef } from "react"
import * as THREE from 'three'

export function Lantern(props) {
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
            <RigidBody type='fixed'>
                <mesh
                    geometry={nodes.post_lantern.geometry}
                    material={materials.HalloweenBits}
                    castShadow
                    receiveShadow
                />
            </RigidBody>
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
            <Sparkles
                count={Math.floor(Math.random() * 8) + 1}
                size={5}
                speed={1.5}
                position={[0, 2, 1]}
            />
        </group>
    )
}

export function LanternStanding(props) {
    const { nodes, materials } = useGLTF('/gltf/lantern_standing.gltf')
    const light = useRef()
    const { lightHelper } = useControls({ lightHelper: false })

    useHelper(lightHelper && light, THREE.PointLightHelper, 1)

    return (
        <group {...props}>
            <mesh
                geometry={nodes.lantern_standing.geometry}
                material={materials.HalloweenBits}
                castShadow
                receiveShadow
            />
            <pointLight
                ref={light}
                castShadow
                position={[0, 0.5, 0]}
                intensity={2}
                color={'#BF8838'}
            />
            <Sparkles
                count={Math.floor(Math.random() * 6) + 1}
                size={5}
                speed={1.5}
                position={[0, 0.5, 0]}
            />
        </group>
    )
}

useGLTF.preload('/gltf/post_lantern.gltf')
useGLTF.preload('/gltf/lantern_standing.gltf')
