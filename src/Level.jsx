import { useMemo } from "react"
import { Floor } from "./Components/Floor"
import { Fence, FenceBroken, Gate } from "./Components/Fence"
import { LanternHanging } from "./Components/Lantern"

function BlockStart({ position = [0, 0, 0] }) {
    return <group position={position}>
        <LanternHanging position={[-3.5, 0, 3]} />

        <Floor position={[-8, 0, 0]} />
        <Floor position={[-4, 0, 0]} />
        <Floor position={[0, 0, 0]} />
        <Floor position={[4, 0, 0]} />
        <Floor position={[8, 0, 0]} />

        <Floor position={[-8, 0, 4]} />
        <Floor position={[-4, 0, 4]} />
        <Floor position={[0, 0, 4]} />
        <Floor position={[4, 0, 4]} />
        <Floor position={[8, 0, 4]} />


        <FenceBroken position={[-8, 0, 1]} />
        <Fence position={[-4, 0, 1]} />
        <Gate position={[0, 0, 1]} />
        <Fence position={[4, 0, 1]} />
        <Fence position={[8, 0, 1]} />


        <Fence position={[4, 0, -1.3]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[-4, 0, -1.3]} rotation={[0, Math.PI / 2, 0]} />
    </group>
}

export function Level({ count = 5, seed = 0 }) {
    const blocks = useMemo(() => {
    })

    return <>
        <BlockStart />

    </>
}
