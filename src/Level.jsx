import { useMemo } from "react"
import { Floor } from "./Components/Floor"
import { Fence, Gate } from "./Components/Fence"

function BlockStart({ position = [0, 0, 0] }) {
    return <group position={position}>
        <Floor position={[-4, 0, 0]} />
        <Floor />
        <Floor position={[4, 0, 0]} />
        <Fence position={[-4, 0, 1]} />
        <Gate position={[0, 0, 1]} />
        <Fence position={[4, 0, 1]} />
    </group>
}

export function Level({ count = 5, seed = 0 }) {
    const blocks = useMemo(() => {
    })

    return <>
        <BlockStart />

    </>
}
