import { useFBX, useGLTF } from "@react-three/drei";

export function Zombie() {
    const zombie = useFBX('/characters/model/characterMedium.fbx')

    return <primitive object={zombie} scale={ 0.01 } />
}


export function Skeleton(props) {
    const { nodes, materials } = useGLTF("/characters/model/character_skeleton_minion.gltf");
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

  useGLTF.preload("/characters/model/character_skeleton_minion.gltf");
