import { useMemo } from "react"
import { Floor, FloorGrave, Path } from "./Components/Floor"
import { Fence, FenceBroken, Gate } from "./Components/Fence"
import { Lantern, LanternStanding } from "./Components/Lantern"
import { Tree } from "./Components/Tree"
import { Crypt } from "./Crypt"
import { Pumpkin } from "./Components/Pumpkin"
import { Grave } from "./Components/Grave"
import { Bench, BenchEmpty } from "./Components/Bench"
import { Coffin } from "./Components/Coffin"
import { Skull } from "./Components/Skull"
import { Bone, Ribcage } from "./Components/Bone"
import { CuboidCollider, RigidBody } from "@react-three/rapier"

function BlockStart({ position = [0, 0, 0] }) {
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
        <Path position={[3, 0, 8]} />
        <Path position={[5, 0, 8]} />

        <Floor position={[8, 0, 8]} />
        <Path position={[7, 0, 8]} />

        <RigidBody type='fixed' friction={1}>
            <FenceBroken position={[-8, 0, 1]} />
            <Fence position={[-4, 0, 1]} />
        </RigidBody>
        <Gate position={[0, 0, 1]} />
        <RigidBody type='fixed' friction={1}>
            <Fence position={[4, 0, 1]} />
            <Fence position={[8, 0, 1]} />
        </RigidBody>


        <Fence position={[4, 0, -1.3]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[-4, 0, -1.3]} rotation={[0, Math.PI / 2, 0]} />


        <RigidBody type='fixed'>
            <Grave position={[-8, 0, 2]} />
        </RigidBody>
        <RigidBody colliders='hull'>
            <Ribcage position={[-6, 0.2, 3]} />
        </RigidBody>
        <Lantern position={[-3.5, 0, 3]} rotation={[0, 0.5, 0]} />
        <RigidBody colliders='hull'>
            <Skull position={[-2.75, 0, 2.8]} rotation={[0, 1.1, 0]} />
        </RigidBody>
        <RigidBody colliders='hull'>
            <Pumpkin position={[-3.75, 0.2, 4]} rotation={[0, 1.1, 0]} />
        </RigidBody>
        <RigidBody type='fixed'>
            <Coffin position={[-7, 0, 8]} rotation={[0, 1.2, 0]} />
        </RigidBody>

        <RigidBody type='fixed'>
            <Bench position={[7, 0, 3]} rotation={[0, -0.3, 0]} />
        </RigidBody>
        <Bone position={[5.8, 0.1, 3]} rotation={[0, -0.8, 0]} />
        <RigidBody type='fixed'>
            <BenchEmpty position={[9, 0, 8]} rotation={[0, Math.PI / 2, 0]} />
        </RigidBody>
        <RigidBody type='fixed'>
            <LanternStanding position={[9, 0, 9.5]} rotation={[0, Math.PI / 2, 0]} />
        </RigidBody>


        <Pumpkin position={[9, 0, -1]} />
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
    const isRightFenceBroken = Math.random() < 0.3
    const isLeftFenceBroken = Math.random() < 0.3

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

function Decor({ side = 'left', count = 3, types = [Tree, Tree, Pumpkin, Grave, Bone, Skull] }) {
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

function Bounds({ length = 1}) {
    return <>
        <RigidBody type="fixed">
            <CuboidCollider args={[0.2, 1.2, length * 2 + 0.7]} position={[-4, 1.1, -length * 2]} friction={1} />
            <CuboidCollider args={[0.2, 1.2, length * 2 + 0.7]} position={[4, 1.1, -length * 2]} friction={1} />

            <CuboidCollider args={[3.7, 0.1, length * 2]} position={[0, 0, -length * 2]} />

            <CuboidCollider args={[10, 1.5, 0.2]} position={[0, 1.5, 10.2]} friction={1} />
            <CuboidCollider args={[0.2, 1.5, 5]} position={[10.2, 1.5, 5]} friction={1} />
            <CuboidCollider args={[0.2, 1.5, 5]} position={[-10.2, 1.5, 5]} friction={1} />

            <CuboidCollider args={[9.9, 0.1, 5]} position={[0, 0, 5]} />
        </RigidBody>
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

        <Bounds length={count + 2} />
    </>
}
