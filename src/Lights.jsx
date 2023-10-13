import { useHelper } from "@react-three/drei"
import { useControls } from "leva"
import { useRef } from "react"
import * as THREE from "three"

export function Lights() {
    const light = useRef()
    const { lightHelper } = useControls({ lightHelper: false })
    useHelper(lightHelper && light, THREE.DirectionalLightHelper, 1)

    return (
        <directionalLight
            ref={light}
            name="followLight"
            castShadow
            position={ [ 10, 10, 5 ] }
            intensity={ 0.6 }
            shadow-mapSize={ [ 1024, 1024 ] }
            shadow-camera-far={ 50 }
            shadow-camera-top={ 25 }
            shadow-camera-right={ 25 }
            shadow-camera-bottom={ - 25 }
            shadow-camera-left={ - 25 }
        />
    )
}
