import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

export function Army({count = 1, baseTypes = [SkeletonMinion], specialTypes = [SkeletonArcher, SkeletonMage, SkeletonWarrior]}) {
    const numJacks = Math.floor(count / 1000)
    const remainingCountAfterJacks = count % 1000
    const numWitches = Math.floor(remainingCountAfterJacks / 100)
    const remainingCountAfterWitches = remainingCountAfterJacks % 100
    const numSpecials = Math.floor(remainingCountAfterWitches / 10)
    const remainingCount = remainingCountAfterWitches % 10

    const characters = useMemo(() => {
        const characters = []

        for (let i = 0; i < numJacks; i++) {
            characters.push(Jack)
        }

        for (let i = 0; i < numWitches; i++) {
            characters.push(Witch)
        }

        for (let i = 0; i < numSpecials; i++) {
            const specialType = specialTypes[Math.floor(Math.random() * specialTypes.length)]
            characters.push(specialType)
        }

        for (let i = 0; i < remainingCount; i++) {
            const type = baseTypes[Math.floor(Math.random() * baseTypes.length)]
            characters.push(type)
        }

        return characters
    }, [count])

    const scale = Math.min(2 / Math.sqrt(remainingCount + numJacks + numWitches + numSpecials), 1.2)
    const spacing = 1.5 * scale
    const numRows = Math.ceil(Math.sqrt(remainingCount + numJacks + numWitches + numSpecials))
    const numCols = Math.ceil((remainingCount + numJacks + numWitches + numSpecials) / numRows)
    const centerPosition = [0, -0.7, 0]
    const halfWidth = (numCols - 1) * spacing * 0.5
    const halfHeight = (numRows - 1) * spacing * 0.5

    return (
        <>
            {characters.map((Character, index) => {
                let x = 0
                let z = 0
                if (index !== 0) {
                    const row = Math.floor(index / numCols);
                    const col = index % numCols;
                    x = centerPosition[0] + (col * spacing) - halfWidth;
                    z = centerPosition[2] + (row * spacing) - halfHeight;
                }

                return (
                    <Character position={[x, centerPosition[1], z]} key={index} scale={scale} />
                )
            })}
        </>
    )
}

export function SkeletonArcher(props) {
    const random = Math.floor(Math.random() * 2) + 1
    let skeletonType
    let broken = false

    switch(random) {
        case 1:
            skeletonType = 'character_skeleton_archer'
            break
        case 2:
            skeletonType = 'character_skeleton_archer_broken'
            broken = true
            break
        default:
            skeletonType = 'character_skeleton_archer'
    }

    const { nodes, materials } = useGLTF(`/characters/model/${skeletonType}.gltf`)

    if(broken) {
        return (
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7669.geometry}
                    material={materials.Stone}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7669_1.geometry}
                    material={materials.BrownDark}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7669_2.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7669_3.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7669_4.geometry}
                    material={materials.Metal}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7669_5.geometry}
                    material={materials.PurpleDark}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7669_6.geometry}
                    material={materials.WoodDark}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7669_7.geometry}
                    material={materials.Stone2}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7669_8.geometry}
                    material={materials.GreenDark}
                />
                <group position={[0.204, 0.634, 0]}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7670.geometry}
                    material={materials.BrownDark}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7670_1.geometry}
                    material={materials.PurpleDark}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7670_2.geometry}
                    material={materials.Stone}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7670_3.geometry}
                    material={materials.White}
                    />
                </group>
                <group position={[-0.204, 0.634, 0]}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7671.geometry}
                    material={materials.Stone}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7671_1.geometry}
                    material={materials.White}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7671_2.geometry}
                    material={materials.BrownDark}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7671_3.geometry}
                    material={materials.GreenDark}
                    />
                </group>
                <group position={[0, 0.705, 0]}>
                    <mesh
                    name="Cube7666"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7666.geometry}
                    material={materials.White}
                    morphTargetDictionary={nodes.Cube7666.morphTargetDictionary}
                    morphTargetInfluences={nodes.Cube7666.morphTargetInfluences}
                    />
                    <mesh
                    name="Cube7666_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7666_1.geometry}
                    material={materials.Black}
                    morphTargetDictionary={nodes.Cube7666_1.morphTargetDictionary}
                    morphTargetInfluences={nodes.Cube7666_1.morphTargetInfluences}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.character_skeleton_archer_eyes_broken.geometry}
                    material={materials.Glow}
                    position={[0, 0.425, 0.259]}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.character_skeleton_archer_jaw_broken.geometry}
                    material={materials.White}
                    position={[0, 0.127, 0.04]}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.character_skeleton_archer_mask_broken.geometry}
                    material={materials.PurpleDark}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7664.geometry}
                    material={materials.PurpleDark}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7664_1.geometry}
                    material={materials.BrownDark}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7664_2.geometry}
                    material={materials.GreenDark}
                    />
                </group>
                </group>
        )
    }

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7661.geometry}
                material={materials.Stone}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7661_1.geometry}
                material={materials.BrownDark}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7661_2.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7661_3.geometry}
                material={materials.Black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7661_4.geometry}
                material={materials.Metal}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7661_5.geometry}
                material={materials.PurpleDark}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7661_6.geometry}
                material={materials.WoodDark}
            />
            <group position={[0.204, 0.634, 0]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7662.geometry}
                material={materials.BrownDark}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7662_1.geometry}
                material={materials.PurpleDark}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7662_2.geometry}
                material={materials.Stone}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7662_3.geometry}
                material={materials.White}
                />
            </group>
            <group position={[-0.204, 0.634, 0]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7663.geometry}
                material={materials.Stone}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7663_1.geometry}
                material={materials.White}
                />
            </group>
            <group position={[0, 0.705, 0]}>
                <mesh
                name="Cube7658"
                castShadow
                receiveShadow
                geometry={nodes.Cube7658.geometry}
                material={materials.White}
                morphTargetDictionary={nodes.Cube7658.morphTargetDictionary}
                morphTargetInfluences={nodes.Cube7658.morphTargetInfluences}
                />
                <mesh
                name="Cube7658_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube7658_1.geometry}
                material={materials.Black}
                morphTargetDictionary={nodes.Cube7658_1.morphTargetDictionary}
                morphTargetInfluences={nodes.Cube7658_1.morphTargetInfluences}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.character_skeleton_archer_eyes.geometry}
                material={materials.Glow}
                position={[0, 0.425, 0.259]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.character_skeleton_archer_hood.geometry}
                material={materials.PurpleDark}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.character_skeleton_archer_jaw.geometry}
                material={materials.White}
                position={[0, 0.127, 0.04]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.character_skeleton_archer_mask.geometry}
                material={materials.PurpleDark}
                />
            </group>
            </group>
    );
}
useGLTF.preload("/characters/model/character_skeleton_archer.gltf");
useGLTF.preload("/characters/model/character_skeleton_archer_broken.gltf");

export function SkeletonMage(props) {
    const random = Math.floor(Math.random() * 2) + 1
    let skeletonType
    let broken = false

    switch(random) {
        case 1:
            skeletonType = 'character_skeleton_mage'
            break
        case 2:
            skeletonType = 'character_skeleton_mage_broken'
            broken = true
            break
        default:
            skeletonType = 'character_skeleton_mage'
    }

    const { nodes, materials } = useGLTF(`/characters/model/${skeletonType}.gltf`)

    if(broken) {
        return (
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7674.geometry}
                    material={materials.BrownDark}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7674_1.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7674_2.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7674_3.geometry}
                    material={materials.WoodDark}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7674_4.geometry}
                    material={materials.GreenDark}
                />
                <group position={[0.204, 0.634, 0]}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7675.geometry}
                    material={materials.Stone}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7675_1.geometry}
                    material={materials.White}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7675_2.geometry}
                    material={materials.PurpleDark}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7675_3.geometry}
                    material={materials.BrownDark}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7675_4.geometry}
                    material={materials.GreenDark}
                    />
                </group>
                <group position={[-0.204, 0.634, 0]}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7678.geometry}
                    material={materials.Stone}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7678_1.geometry}
                    material={materials.White}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7678_2.geometry}
                    material={materials.WoodDark}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.character_skeleton_mage_cloak_broken.geometry}
                    material={materials.PurpleDark}
                    position={[0, 0.705, 0]}
                />
                <group position={[0, 0.705, 0]}>
                    <mesh
                    name="Cube7691"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7691.geometry}
                    material={materials.White}
                    morphTargetDictionary={nodes.Cube7691.morphTargetDictionary}
                    morphTargetInfluences={nodes.Cube7691.morphTargetInfluences}
                    />
                    <mesh
                    name="Cube7691_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7691_1.geometry}
                    material={materials.Black}
                    morphTargetDictionary={nodes.Cube7691_1.morphTargetDictionary}
                    morphTargetInfluences={nodes.Cube7691_1.morphTargetInfluences}
                    />
                    <mesh
                    name="Cube7691_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7691_2.geometry}
                    material={materials.BrownDark}
                    morphTargetDictionary={nodes.Cube7691_2.morphTargetDictionary}
                    morphTargetInfluences={nodes.Cube7691_2.morphTargetInfluences}
                    />
                    <mesh
                    name="Cube7691_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7691_3.geometry}
                    material={materials.GreenDark}
                    morphTargetDictionary={nodes.Cube7691_3.morphTargetDictionary}
                    morphTargetInfluences={nodes.Cube7691_3.morphTargetInfluences}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.character_skeleton_mage_cowl_broken.geometry}
                    material={materials.PurpleDark}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.character_skeleton_mage_eyes_broken.geometry}
                    material={materials.Glow}
                    position={[0, 0.425, 0.259]}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.character_skeleton_mage_jaw_broken.geometry}
                    material={materials.White}
                    position={[0, 0.127, 0.04]}
                    />
                </group>
                </group>
        )
    }

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7682.geometry}
                material={materials.BrownDark}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7682_1.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7682_2.geometry}
                material={materials.Black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7682_3.geometry}
                material={materials.WoodDark}
            />
            <group position={[0.204, 0.634, 0]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7683.geometry}
                material={materials.Stone}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7683_1.geometry}
                material={materials.White}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7683_2.geometry}
                material={materials.PurpleDark}
                />
            </group>
            <group position={[-0.204, 0.634, 0]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7686.geometry}
                material={materials.Stone}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7686_1.geometry}
                material={materials.White}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7686_2.geometry}
                material={materials.WoodDark}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.character_skeleton_mage_cloak.geometry}
                material={materials.PurpleDark}
                position={[0, 0.705, 0]}
            />
            <group position={[0, 0.705, 0]}>
                <mesh
                name="Cube7687"
                castShadow
                receiveShadow
                geometry={nodes.Cube7687.geometry}
                material={materials.White}
                morphTargetDictionary={nodes.Cube7687.morphTargetDictionary}
                morphTargetInfluences={nodes.Cube7687.morphTargetInfluences}
                />
                <mesh
                name="Cube7687_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube7687_1.geometry}
                material={materials.Black}
                morphTargetDictionary={nodes.Cube7687_1.morphTargetDictionary}
                morphTargetInfluences={nodes.Cube7687_1.morphTargetInfluences}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.character_skeleton_mage_cowl.geometry}
                material={materials.PurpleDark}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.character_skeleton_mage_eyes.geometry}
                material={materials.Glow}
                position={[0, 0.425, 0.259]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.character_skeleton_mage_jaw.geometry}
                material={materials.White}
                position={[0, 0.127, 0.04]}
                />
            </group>
            </group>
    );
}
useGLTF.preload("/characters/model/character_skeleton_mage.gltf");
useGLTF.preload("/characters/model/character_skeleton_mage_broken.gltf");

export function SkeletonWarrior(props) {
    const random = Math.floor(Math.random() * 2) + 1
    let skeletonType
    let broken = false

    switch(random) {
        case 1:
            skeletonType = 'character_skeleton_warrior'
            break
        case 2:
            skeletonType = 'character_skeleton_warrior_broken'
            broken = true
            break
        default:
            skeletonType = 'character_skeleton_warrior'
    }

    const { nodes, materials } = useGLTF(`/characters/model/${skeletonType}.gltf`)

    if(broken) {
        return (
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7627.geometry}
                    material={materials.Stone}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7627_1.geometry}
                    material={materials.BrownDark}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7627_2.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7627_3.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7627_4.geometry}
                    material={materials.Metal}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7627_5.geometry}
                    material={materials.GreenDark}
                />
                <group position={[0.204, 0.634, 0]}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7626.geometry}
                    material={materials.Stone}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7626_1.geometry}
                    material={materials.Black}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7626_2.geometry}
                    material={materials.BrownDark}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7626_3.geometry}
                    material={materials.White}
                    />
                </group>
                <group position={[-0.204, 0.634, 0]}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7628.geometry}
                    material={materials.Stone}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7628_1.geometry}
                    material={materials.Black}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7628_2.geometry}
                    material={materials.BrownDark}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7628_3.geometry}
                    material={materials.White}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7628_4.geometry}
                    material={materials.GreenDark}
                    />
                </group>
                <group position={[0, 0.705, 0]}>
                    <mesh
                    name="Cube7623"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7623.geometry}
                    material={materials.White}
                    morphTargetDictionary={nodes.Cube7623.morphTargetDictionary}
                    morphTargetInfluences={nodes.Cube7623.morphTargetInfluences}
                    />
                    <mesh
                    name="Cube7623_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7623_1.geometry}
                    material={materials.Black}
                    morphTargetDictionary={nodes.Cube7623_1.morphTargetDictionary}
                    morphTargetInfluences={nodes.Cube7623_1.morphTargetInfluences}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.character_skeleton_warrior_eyes_broken.geometry}
                    material={materials.Glow}
                    position={[0, 0.425, 0.259]}
                    />
                    <group position={[0, 0.519, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube7629.geometry}
                        material={materials.White}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube7629_1.geometry}
                        material={materials.Stone}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube7629_2.geometry}
                        material={materials.BrownDark}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube7629_3.geometry}
                        material={materials.Stone2}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube7629_4.geometry}
                        material={materials.WoodDark}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube7629_5.geometry}
                        material={materials.GreenDark}
                    />
                    </group>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.character_skeleton_warrior_jaw_broken.geometry}
                    material={materials.White}
                    position={[0, 0.127, 0.04]}
                    />
                </group>
                </group>
        )
    }

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7637.geometry}
                material={materials.Stone}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7637_1.geometry}
                material={materials.BrownDark}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7637_2.geometry}
                material={materials.White}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7637_3.geometry}
                material={materials.Black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7637_4.geometry}
                material={materials.Metal}
            />
            <group position={[0.204, 0.634, 0]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7636.geometry}
                material={materials.Stone}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7636_1.geometry}
                material={materials.Black}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7636_2.geometry}
                material={materials.BrownDark}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7636_3.geometry}
                material={materials.White}
                />
            </group>
            <group position={[-0.204, 0.634, 0]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7638.geometry}
                material={materials.Stone}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7638_1.geometry}
                material={materials.Black}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7638_2.geometry}
                material={materials.BrownDark}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube7638_3.geometry}
                material={materials.White}
                />
            </group>
            <group position={[0, 0.705, 0]}>
                <mesh
                name="Cube7633"
                castShadow
                receiveShadow
                geometry={nodes.Cube7633.geometry}
                material={materials.White}
                morphTargetDictionary={nodes.Cube7633.morphTargetDictionary}
                morphTargetInfluences={nodes.Cube7633.morphTargetInfluences}
                />
                <mesh
                name="Cube7633_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube7633_1.geometry}
                material={materials.Black}
                morphTargetDictionary={nodes.Cube7633_1.morphTargetDictionary}
                morphTargetInfluences={nodes.Cube7633_1.morphTargetInfluences}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.character_skeleton_warrior_eyes.geometry}
                material={materials.Glow}
                position={[0, 0.425, 0.259]}
                />
                <group position={[0, 0.519, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7639.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7639_1.geometry}
                    material={materials.Stone}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7639_2.geometry}
                    material={materials.BrownDark}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7639_3.geometry}
                    material={materials.Stone2}
                />
                </group>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.character_skeleton_warrior_jaw.geometry}
                material={materials.White}
                position={[0, 0.127, 0.04]}
                />
            </group>
            </group>
    );
}
useGLTF.preload("/characters/model/character_skeleton_warrior.gltf");
useGLTF.preload("/characters/model/character_skeleton_warrior_broken.gltf");

export function SkeletonMinion(props) {
    const random = Math.floor(Math.random() * 2) + 1
    let skeletonType
    let broken = false

    switch(random) {
        case 1:
            skeletonType = 'character_skeleton_minion'
            break
        case 2:
            skeletonType = 'character_skeleton_minion_broken'
            broken = true
            break
        default:
            skeletonType = 'character_skeleton_minion'
    }



    const { nodes, materials } = useGLTF(`/characters/model/${skeletonType}.gltf`)

    if(broken) {
        return (
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7644.geometry}
                    material={materials.BrownDark}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7644_1.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7644_2.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7644_3.geometry}
                    material={materials.Metal}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube7644_4.geometry}
                    material={materials.GreenDark}
                />
                <group position={[0.204, 0.634, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube7645.geometry}
                        material={materials.Stone}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube7645_1.geometry}
                        material={materials.White}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube7645_2.geometry}
                        material={materials.BrownDark}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube7645_3.geometry}
                        material={materials.GreenDark}
                    />
                </group>
                <group position={[-0.204, 0.634, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube7643.geometry}
                        material={materials.Stone}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube7643_1.geometry}
                        material={materials.White}
                    />
                </group>
                <group position={[0, 0.705, 0]}>
                    <mesh
                        name="Cube7646"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube7646.geometry}
                        material={materials.White}
                        morphTargetDictionary={nodes.Cube7646.morphTargetDictionary}
                        morphTargetInfluences={nodes.Cube7646.morphTargetInfluences}
                    />
                    <mesh
                        name="Cube7646_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube7646_1.geometry}
                        material={materials.Black}
                        morphTargetDictionary={nodes.Cube7646_1.morphTargetDictionary}
                        morphTargetInfluences={nodes.Cube7646_1.morphTargetInfluences}
                    />
                    <mesh
                        name="Cube7646_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube7646_2.geometry}
                        material={materials.Stone}
                        morphTargetDictionary={nodes.Cube7646_2.morphTargetDictionary}
                        morphTargetInfluences={nodes.Cube7646_2.morphTargetInfluences}
                    />
                    <mesh
                        name="Cube7646_3"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube7646_3.geometry}
                        material={materials.WoodDark}
                        morphTargetDictionary={nodes.Cube7646_3.morphTargetDictionary}
                        morphTargetInfluences={nodes.Cube7646_3.morphTargetInfluences}
                    />
                    <mesh
                        name="Cube7646_4"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube7646_4.geometry}
                        material={materials.Stone2}
                        morphTargetDictionary={nodes.Cube7646_4.morphTargetDictionary}
                        morphTargetInfluences={nodes.Cube7646_4.morphTargetInfluences}
                    />
                    <mesh
                        name="Cube7646_5"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube7646_5.geometry}
                        material={materials.BrownDark}
                        morphTargetDictionary={nodes.Cube7646_5.morphTargetDictionary}
                        morphTargetInfluences={nodes.Cube7646_5.morphTargetInfluences}
                    />
                    <mesh
                        name="Cube7646_6"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube7646_6.geometry}
                        material={materials.GreenDark}
                        morphTargetDictionary={nodes.Cube7646_6.morphTargetDictionary}
                        morphTargetInfluences={nodes.Cube7646_6.morphTargetInfluences}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_skeleton_minion_eyes_broken.geometry}
                        material={materials.Glow}
                        position={[0, 0.425, 0.259]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.character_skeleton_minion_jaw_broken.geometry}
                        material={materials.White}
                        position={[0, 0.127, 0.04]}
                    />
                </group>
            </group>
        )
    }

    return (
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7654.geometry}
          material={materials.BrownDark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7654_1.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7654_2.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube7654_3.geometry}
          material={materials.Metal}
        />
        <group position={[0.204, 0.634, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube7655.geometry}
            material={materials.Stone}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube7655_1.geometry}
            material={materials.White}
          />
        </group>
        <group position={[-0.204, 0.634, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube7653.geometry}
            material={materials.Stone}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube7653_1.geometry}
            material={materials.White}
          />
        </group>
        <group position={[0, 0.705, 0]}>
          <mesh
            name="Cube7650"
            castShadow
            receiveShadow
            geometry={nodes.Cube7650.geometry}
            material={materials.White}
            morphTargetDictionary={nodes.Cube7650.morphTargetDictionary}
            morphTargetInfluences={nodes.Cube7650.morphTargetInfluences}
          />
          <mesh
            name="Cube7650_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube7650_1.geometry}
            material={materials.Black}
            morphTargetDictionary={nodes.Cube7650_1.morphTargetDictionary}
            morphTargetInfluences={nodes.Cube7650_1.morphTargetInfluences}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.character_skeleton_minion_eyes.geometry}
            material={materials.Glow}
            position={[0, 0.425, 0.259]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.character_skeleton_minion_jaw.geometry}
            material={materials.White}
            position={[0, 0.127, 0.04]}
          />
        </group>
      </group>
    );
}
useGLTF.preload("/characters/model/character_skeleton_minion_broken.gltf");
useGLTF.preload("/characters/model/character_skeleton_minion.gltf");

export function Jack(props) {
    const { nodes, materials } = useGLTF("/characters/model/character_jack.gltf");
    return (
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={materials.BrownDark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028_1.geometry}
          material={materials.Black}
        />
        <group position={[0.204, 0.634, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube031.geometry}
            material={materials.BrownDark}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube031_1.geometry}
            material={materials.Orange}
          />
        </group>
        <group position={[-0.204, 0.634, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030.geometry}
            material={materials.BrownDark}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_1.geometry}
            material={materials.Orange}
          />
        </group>
        <group position={[0, 0.704, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere001.geometry}
            material={materials.Orange}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere001_1.geometry}
            material={materials.BrownDark}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.character_jackHead.geometry}
          material={materials.Black}
          position={[0, 0.704, 0]}
        />
      </group>
    );
  }

  useGLTF.preload("/characters/model/character_jack.gltf");


export function Witch(props) {
    const { nodes, materials } = useGLTF("/characters/model/character_witch.gltf");
    return (
        <group {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube5268.geometry}
            material={materials.Purple}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube5268_1.geometry}
            material={materials.Yellow}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube5268_2.geometry}
            material={materials.Black}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube5268_3.geometry}
            material={materials.GreenLight}
        />
        <group position={[0.204, 0.634, 0]}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube040.geometry}
            material={materials.Purple}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube040_1.geometry}
            material={materials.GreenLight}
            />
        </group>
        <group position={[-0.204, 0.634, 0]}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039.geometry}
            material={materials.Purple}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039_1.geometry}
            material={materials.GreenLight}
            />
        </group>
        <group position={[0, 0.704, 0]}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials.Black}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials.GreenLight}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials.Green}
            />
            <group position={[0, 0.768, -0.071]} rotation={[-0.264, 0, 0]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube004.geometry}
                material={materials.Purple}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube004_1.geometry}
                material={materials.Black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube004_2.geometry}
                material={materials.Yellow}
            />
            </group>
        </group>
        </group>
    );
}

useGLTF.preload("/characters/model/character_witch.gltf");
