import { Text } from "@react-three/drei"
import { Pillar } from "./Pillar"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import useGame from "../stores/useGame"
import { useEffect } from "react"
import { useState } from "react"
import { useMemo } from "react"
import { exitPointerLock } from "../utils/PointerLockHandler"

export function Portal({ side, isBonus, seed }) {
    const [text, setText] = useState('')
    const [displayText, setDisplayText] = useState('')
    const end = useGame((state) => state.end)
    const posX = side === "left" ? -2.8 : 1

    useEffect(() => {
        const operations = isBonus ? ['+', '*'] : ['-', '/']
        const operation = operations[Math.floor(Math.random() * operations.length)]
        let operand = 0

        switch (operation) {
            case '+':
                operand = 1 + Math.floor(Math.random() * 10)
                break;
            case '-':
                operand = 1 + Math.floor(Math.random() * 10)
                break;
            case '*':
                operand = 2 + Math.floor(Math.random() * 3)
                break;
            case '/':
                operand = 2 + Math.floor(Math.random() * 4)
                break;
            default:
                break;
        }

        setText(`${operation}${operand}`)
        const displayOperation = operation === '*' ? '×' : operation === '/' ? '÷' : operation
        setDisplayText(`${displayOperation}${operand}`)
    }, [isBonus, seed])

    const affectArmy = () => {
        const { countArmy } = useGame.getState();
        const calc = Math.round(eval(`${countArmy} ${text}`))

        useGame.setState({ countArmy: calc })

        if (calc <= 0) {
            end()
            exitPointerLock()
        }
    }

    return (
        <group position={[posX, 0, 0]}>
            <RigidBody type='fixed'>
                <Pillar position={[2.4, 0, 0]} />
            </RigidBody>
            <Text font="/fonts/shlop.otf" position={[1, 2, 0.2]}>{displayText}</Text>
            <mesh position={[1, 1, 0]}>
                <planeGeometry args={[2.5, 2]} />
                <meshBasicMaterial color={'#FFA559'} opacity={0.2} transparent />
            </mesh>
            <CuboidCollider
                args={[1, 1, 0.5]}
                position={[1, 1.1, 0]}
                sensor
                onIntersectionEnter={() => affectArmy()}/>
            <RigidBody type='fixed'>
                <Pillar position={[-0.5, 0, 0]} />
            </RigidBody>
        </group>
    )
}

export function Portals({ index, seed }) {
    const {isBonusLeft, isBonusRight} = useMemo(() => {
        let isOnlyPenalty = false

        if(index !== 1) {
            isOnlyPenalty = Math.random() < 0.1
        }

        const isBonusLeft = isOnlyPenalty ? false : Math.round(Math.random()) === 1
        const isBonusRight = isOnlyPenalty ? false : !isBonusLeft

        return { isBonusLeft, isBonusRight }
    }, [seed])

    return (
        <>
            <Portal side='left' isBonus={isBonusLeft} seed={seed} />
            <Portal side='right' isBonus={isBonusRight} seed={seed} />
        </>
    )
}
