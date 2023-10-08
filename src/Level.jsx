import { useMemo } from "react"
import { Floor, Path } from "./Components/Floor"
import { Fence, FenceBroken, Gate } from "./Components/Fence"
import { LanternHanging } from "./Components/Lantern"

function BlockStart({ position = [0, 0, 0] }) {
    return <group position={position}>
        <LanternHanging position={[-3.5, 0, 3]} />

        <Floor position={[-8, 0, 0]} />
        <Floor position={[-4, 0, 0]} />

        <Floor position={[0, 0, 0]} />
        <Path position={[-1, 0, -1]} />
        <Path position={[1, 0, -1]} />
        <Path position={[1, 0, 1]} />
        <Path position={[-1, 0, 1]} />

        <Floor position={[4, 0, 0]} />
        <Floor position={[8, 0, 0]} />

        <Floor position={[-8, 0, 4]} />
        <Floor position={[-4, 0, 4]} />

        <Floor position={[0, 0, 4]} />
        <Path position={[-1, 0, 3]} />
        <Path position={[1, 0, 3]} />
        <Path position={[1, 0, 5]} />
        <Path position={[-1, 0, 5]} />

        <Floor position={[4, 0, 4]} />
        <Floor position={[8, 0, 4]} />

        <Floor position={[-8, 0, 8]} />
        <Floor position={[-4, 0, 8]} />

        <Floor position={[0, 0, 8]} />
        <Path position={[-1, 0, 7]} />
        <Path position={[1, 0, 7]} />
        <Path position={[1, 0, 9]} />
        <Path position={[-1, 0, 9]} />

        <Floor position={[4, 0, 8]} />
        <Floor position={[8, 0, 8]} />


        <FenceBroken position={[-8, 0, 1]} />
        <Fence position={[-4, 0, 1]} />
        <Gate position={[0, 0, 1]} />
        <Fence position={[4, 0, 1]} />
        <Fence position={[8, 0, 1]} />


        <Fence position={[4, 0, -1.3]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[-4, 0, -1.3]} rotation={[0, Math.PI / 2, 0]} />
    </group>
}

function BlockEmpty({ position = [0, 0, 0]}) {
    const isRightFenceBroken = Math.random() < 0.5
    const isLeftFenceBroken = Math.random() < 0.5

    return <group position={position}>
        <Floor position={[-8, 0, 0]} />
        <Floor position={[-4, 0, 0]} />
        <Floor position={[0, 0, 0]} />
        <Floor position={[4, 0, 0]} />
        <Floor position={[8, 0, 0]} />

        {isRightFenceBroken ? <FenceBroken position={[4, 0, -1.3]} rotation={[0, Math.PI / 2, 0]} /> : <Fence position={[4, 0, -1.3]} rotation={[0, Math.PI / 2, 0]} />}
        {isLeftFenceBroken ? <FenceBroken position={[-4, 0, -1.3]} rotation={[0, Math.PI / 2, 0]} /> : <Fence position={[-4, 0, -1.3]} rotation={[0, Math.PI / 2, 0]} />}
    </group>
}

export function Level({ count = 5, seed = 0 }) {
    const blocks = useMemo(() => {
        const blocks = []
        let x = 0
        let z = 0
        for (let i = 0; i < count; i++) {
            blocks.push(BlockEmpty)
            x += 4
            if (x > 12) {
                x = 0
                z += 4
            }
        }

        return blocks
    }, [count, seed])

    return <>
        <BlockStart />
        { blocks.map((Block, index) => <Block key={index} position={[0, 0, -(index + 1) * 4 ]} />)}
    </>
}
