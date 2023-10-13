import { Text } from "@react-three/drei"
import { Pillar } from "./Pillar"
import { NodeToyMaterial, NodeToyTick } from '@nodetoy/react-nodetoy'
import { data } from '../shaders/portal/data'

export function Portal({ side }) {
    const posX = side === "left" ? -2.8 : 1
    return (
        <group position={[posX, 0, 0, 0]}>
            <Pillar position={[2.4, 0, 0]} />
            <Text position={[1, 2, 0.2]}></Text>
            <mesh position={[1, 1, 0]}>
                <planeGeometry args={[2.5, 2]} />
                <NodeToyMaterial data={data} />
            </mesh>
            <NodeToyTick />
            <Pillar position={[-0.5, 0, 0]} />
        </group>
    )
}

export function Portals() {
    return (
        <>
            <Portal side='left' />
            <Portal side='right' />
        </>
    )
}
