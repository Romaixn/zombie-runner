import { useMemo } from "react"
import { Floor, Path } from "./Components/Floor"
import { Fence, FenceBroken, Gate } from "./Components/Fence"
import { Lantern, LanternStanding } from "./Components/Lantern"
import { Tree } from "./Components/Tree"
import { Crypt } from "./Crypt"
import { Pumpkin } from "./Components/Pumpkin"
import { Grave } from "./Components/Grave"
import { Bench } from "./Components/Bench"
import { Coffin } from "./Components/Coffin"

function BlockStart({ position = [0, 0, 0] }) {
    return <group position={position}>
        <Lantern position={[-3.5, 0, 3]} rotation={[0, 0.5, 0]} />

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

        <Pumpkin position={[9, 0, -1]} />

        <Bench position={[7, 0, 3]} rotation={[0, -0.3, 0]} />
        <Coffin position={[-7, 0, 8]} rotation={[0, 1.2, 0]} />
    </group>
}

function BlockEnd({ position = [0, 0, 0] }) {
    return <group position={position}>
        <Floor position={[-8, 0, 0]} />
        <Floor position={[-4, 0, 0]} />

        <Floor position={[0, 0, 0]} />
        <Path position={[-1, 0, -1]} />
        <Path position={[1, 0, -1]} />
        <Path position={[1, 0, 1]} />
        <Path position={[-1, 0, 1]} />

        <Floor position={[4, 0, 0]} />
        <Floor position={[8, 0, 0]} />

        <Floor position={[-8, 0, -4]} />
        <Floor position={[-4, 0, -4]} />

        <Floor position={[0, 0, -4]} />
        <Path position={[-1, 0, -3]} />
        <Path position={[1, 0, -3]} />

        <Floor position={[4, 0, -4]} />
        <Floor position={[8, 0, -4]} />

        <Floor position={[-8, 0, -8]} />
        <Floor position={[-4, 0, -8]} />
        <Floor position={[0, 0, -8]} />
        <Floor position={[4, 0, -8]} />
        <Floor position={[8, 0, -8]} />

        <Floor position={[-8, 0, -12]} />
        <Floor position={[-4, 0, -12]} />
        <Floor position={[0, 0, -12]} />
        <Floor position={[4, 0, -12]} />
        <Floor position={[8, 0, -12]} />

        <Fence position={[4, 0, -1.3]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[-4, 0, -1.3]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[5.75, 0, -3.6]} />
        <Fence position={[-5.75, 0, -3.6]} />

        <Crypt position={[0, 0, -8]} />
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

        <Decor side='left' />
        <Decor side='right' />
    </group>
}

function Decor({ side = 'left', count = 3, types = [Tree, Pumpkin, Grave] }) {
    const blocks = useMemo(() => {
        const blocks = []
        let typeIndex = 0
        for (let i = 0; i < count; i++) {
            const type = types[Math.floor(Math.random() * types.length)]
            const rotation = (Math.random() - 0.5) * Math.PI

            const randomX = Math.floor(Math.random() * (9 - 6 + 1)) + 6
            const position = [side === 'left' ? -randomX : randomX, 0, -(i + 1)]
            blocks.push({ type, rotation, position })

            typeIndex++
            if (typeIndex >= types.length) {
                typeIndex = 0
            }
        }

        return blocks
    }, [count, types])

    return <>
        {blocks.map((block, index) => {
            const { type: Type, rotation, position } = block
            return (
                <Type
                    key={index}
                    position={position}
                    rotation={[0, rotation, 0]}
                />
            )
        }
        )}
    </>
}

export function Level({ count = 2, seed = 0 }) {
    const blocks = useMemo(() => {
        const blocks = []
        for (let i = 0; i < count; i++) {
            blocks.push(BlockEmpty)
        }

        return blocks
    }, [count, seed])

    return <>
        <BlockStart />
        {blocks.map((Block, index) => <Block key={index} position={[0, 0, -(index + 1) * 4 ]} />)}

        <BlockEnd position={[0, 0, -(count + 1) * 4 ]} />
    </>
}
