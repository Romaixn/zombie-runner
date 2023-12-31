import { useMemo } from "react"
import { Floor, Path } from "./Components/Floor"
import { Fence, FenceBroken, Gate } from "./Components/Fence"
import { Lantern, LanternStanding } from "./Components/Lantern"
import { Tree } from "./Components/Tree"
import { Crypt } from "./Components/Crypt"
import { Pumpkin } from "./Components/Pumpkin"
import { Grave } from "./Components/Grave"
import { Bench, BenchEmpty } from "./Components/Bench"
import { Coffin } from "./Components/Coffin"
import { Skull } from "./Components/Skull"
import { Bone, Ribcage } from "./Components/Bone"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { Shrine } from "./Components/Shrine"
import { Float, Sparkles, Text } from "@react-three/drei"
import * as THREE from 'three'
import { Portals } from "./Components/Portal"
import useGame from "./stores/useGame"
import { exitPointerLock } from "./utils/PointerLockHandler"

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

        <FenceBroken position={[-8, 0, 1]} />
        <Fence position={[-4, 0, 1]} />

        <Float floatIntensity={0.75} rotationIntensity={0.75}>
            <Text
                font='/fonts/shlop.otf'
                material={
                    new THREE.MeshStandardMaterial({
                        color: '#D6F599',
                        emissive: '#D6F599',
                        emissiveIntensity: 1,
                    })
                }
                scale={1.5}
                position={[0, 5, 1]}
            >Play</Text>
        </Float>
        <Gate position={[0, 0, 1]} />

        <Fence position={[4, 0, 1]} />
        <Fence position={[8, 0, 1]} />

        <Fence position={[4, 0, -1.3]} rotation={[0, Math.PI / 2, 0]} />
        <Fence position={[-4, 0, -1.3]} rotation={[0, Math.PI / 2, 0]} />

        <RigidBody type='fixed'>
            <Grave position={[-8, 0, 2]} />
        </RigidBody>
        <RigidBody colliders='hull'>
            <Ribcage position={[-8, 0.2, 3]} />
        </RigidBody>
        <Lantern position={[-3.5, 0, 3]} rotation={[0, 0.5, 0]} />
        <RigidBody colliders='hull'>
            <Skull position={[-2.75, 0, 2.8]} rotation={[0, 1.1, 0]} />
        </RigidBody>
        <RigidBody colliders='hull'>
            <Pumpkin position={[-5, 0.3, 4]} rotation={[0, 1.1, 0]} />
        </RigidBody>
        <RigidBody type='fixed'>
            <Coffin position={[-7, 0, 8]} rotation={[0, 1.2, 0]} />
        </RigidBody>

        <RigidBody type='fixed'>
            <Shrine position={[3.5, 0, 2.8]} rotation={[0, -0.6, 0]} />
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

    <Lantern position={[6, 0, -1]} rotation={[0, -Math.PI / 2 + 0.5, 0]} />
        <Tree position={[9, 0, -1.5]} />
        <Tree position={[-6, 0, -1]} />
        <Pumpkin position={[-9, 0, -0.5]} />
    </group>
}

function BlockEnd({ position = [0, 0, 0] }) {
    const end = useGame((state) => state.end)
    const phase = useGame((state) => state.phase)

    const endWin = () => {
        useGame.setState({ status: 'win' })
        end()
        exitPointerLock()
    }

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

        <CuboidCollider
            args={[4, 1, 1]}
            position={[0, 1.1, 3]}
            sensor
            onIntersectionEnter={() => endWin()}
        />

        {phase === 'end' &&
            <CuboidCollider
                args={[4, 3, 0]}
                position={[0, 3, 15]}
            />
        }

        <Sparkles size={6} position={[0, 1, 2]} scale={[20, 10, 10]} />
        <Crypt position={[0, 0, -8]} />

        <Lantern position={[3.5, 0, -4.5]} rotation={[0, -Math.PI / 2 + 1 , 0]} />
        <Lantern position={[-3.5, 0, -4.5]} rotation={[0, Math.PI / 2 - 1, 0]} />

        <group position={[0, 0, -4]}>
            <Decor side='left' />
            <Decor side='right' />
        </group>

        <group position={[0, 0, -8]}>
            <Decor side='left' />
            <Decor side='right' />
        </group>
    </group>
}

function Block({ special, position = [0, 0, 0], index, seed }) {
    const {isRightFenceBroken, isLeftFenceBroken} = useMemo(() => {
        const isRightFenceBroken = Math.random() < 0.3
        const isLeftFenceBroken = Math.random() < 0.3

        return {isRightFenceBroken, isLeftFenceBroken}
    }, [seed])

    return <group position={position}>
        <Floor position={[-8, 0, 0]} />
        <Floor position={[-4, 0, 0]} />
        <Floor position={[0, 0, 0]} />
        {special && <Portals index={index} seed={seed} />}
        <Floor position={[4, 0, 0]} />
        <Floor position={[8, 0, 0]} />

        {isRightFenceBroken ? <FenceBroken position={[4, 0, -1.3]} rotation={[0, Math.PI / 2, 0]} /> : <Fence position={[4, 0, -1.3]} rotation={[0, Math.PI / 2, 0]} />}
        {isLeftFenceBroken ? <FenceBroken position={[-4, 0, -1.3]} rotation={[0, Math.PI / 2, 0]} /> : <Fence position={[-4, 0, -1.3]} rotation={[0, Math.PI / 2, 0]} />}

        <Decor side='left' index={index} seed={seed} />
        <Decor side='right' index={index} seed={seed} />
    </group>
}

function Decor({ side = 'left', count = 3, types = [Tree, Tree, Pumpkin, Grave, Bone, Skull], index, seed }) {
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
    }, [side, index, seed])

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
            <CuboidCollider args={[4, 4, 0.2]} position={[-6, 3.5, 1]} />
            <CuboidCollider args={[4, 4, 0.2]} position={[6, 3.5, 1]} />

            <CuboidCollider args={[0.25, 4, length * 2 + 0.7]} position={[-4, 3.5, -length * 2]} />
            <CuboidCollider args={[0.25, 4, length * 2 + 0.7]} position={[4, 3.5, -length * 2]} />

            <CuboidCollider args={[3.7, 0.1, length * 2]} position={[0, 0, -length * 2]} />

            <CuboidCollider args={[4, 4, 0.1]} position={[0, 2, -length * 4]} />

            <CuboidCollider args={[10, 4, 0.2]} position={[0, 3.5, 10.2]} />
            <CuboidCollider args={[0.2, 4, 5]} position={[10.2, 3.5, 5]} />
            <CuboidCollider args={[0.2, 4, 5]} position={[-10.2, 3.5, 5]} />

            <CuboidCollider args={[9.9, 0.1, 5]} position={[0, 0, 5]} />
        </RigidBody>
    </>
}

export function Level({ count = 2, specialEach = 5, types = [Block], seed = 0 }) {
    const blocks = useMemo(() => {
        const blocks = []
        let typeIndex = 0
        let specialIndex = 0

        for (let i = 0; i < count; i++) {
            const type = types[Math.floor(Math.random() * types.length)]
            let isSpecial = false

            if (specialIndex % specialEach === 1) {
                isSpecial = true
            }

            blocks.push({ type, isSpecial })

            typeIndex++
            if (typeIndex >= types.length) {
                typeIndex = 0
            }
            specialIndex++
        }

        return blocks
    }, [count, types, seed])

    return <>
        <BlockStart />
        {blocks.map((Block, index) => {
            const { type: Type, isSpecial } = Block
            return (
                <Type key={index} special={isSpecial} position={[0, 0, -(index + 1) * 4 ]} index={index} seed={seed} />)}
            )
        }

        <Sparkles key={seed + 1} size={6} position={[0, 1, -count * 4 / 2]} scale={[30, 10, -(count + 1) * 4]} />

        <BlockEnd key={seed + 2} position={[0, 0, -(count + 1) * 4 ]} />

        <Bounds key={seed + 3} length={count + 2} />
    </>
}
