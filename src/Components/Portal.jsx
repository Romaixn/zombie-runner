import { Text } from "@react-three/drei"
import { Pillar } from "./Pillar"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import useGame from "../stores/useGame"

export function Portal({ side, isBonus }) {
    const posX = side === "left" ? -2.8 : 1
    const operations = isBonus ? ['+', '*'] : ['-', '/']
    const operation = operations[Math.floor(Math.random() * operations.length)]
    let operand = 0

    switch (operation) {
        case '+':
            operand = 1 + Math.floor(Math.random() * 5)
            break;
        case '-':
            operand = 1 + Math.floor(Math.random() * 5)
            break;
        case '*':
            operand = 2 + Math.floor(Math.random() * 5)
            break;
        case '/':
            operand = 2 + Math.floor(Math.random() * 5)
            break;
        default:
            break;
    }

    const text = `${operation}${operand}`

    const affectArmy = () => {
        const { countArmy } = useGame.getState();
        const newCountArmy = eval(`${countArmy} ${text}`) < 0 ? 1 : eval(`${countArmy} ${text}`)
        useGame.setState({ countArmy: newCountArmy })
    }

    return (
        <group position={[posX, 0, 0]}>
            <Pillar position={[2.4, 0, 0]} />
            <Text position={[1, 2, 0.2]}>{text}</Text>
            <mesh position={[1, 1, 0]}>
                <planeGeometry args={[2.5, 2]} />
                <meshBasicMaterial color={'#FF6000'} opacity={0.2} transparent />
            </mesh>
            <CuboidCollider
                args={[1, 1, 0]}
                position={[1, 1.1, 0]}
                sensor
                onIntersectionEnter={() => affectArmy()}/>
            <Pillar position={[-0.5, 0, 0]} />
        </group>
    )
}

export function Portals() {
    const isBonusLeft = Math.round(Math.random()) === 1
    const isBonusRight = !isBonusLeft

    return (
        <>
            <Portal side='left' isBonus={isBonusLeft} />
            <Portal side='right' isBonus={isBonusRight} />
        </>
    )
}
