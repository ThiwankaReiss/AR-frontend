import React from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei';
const Chair = () => {
    const { nodes, materials } = useGLTF('/Chair1.glb');
    useFrame((state, delta) => easing.dampC(materials.CusionMaterial.color, '#0459BC', 0.25, delta));
    useFrame((state, delta) => easing.dampC(materials.FrameMaterial.color, '#e0e5e5', 0.25, delta));
    return (
        <group>
            <mesh
             castShadow
             geometry={nodes.Cusion.geometry}
             material={materials.CusionMaterial}
             material-roughness={1}
             dispose={null}
             rotation={[0, 0, 0]}
             position={[0, 0, 0]}
             scale={[1,0.2,1]}
            ></mesh>
            <mesh
             castShadow
             geometry={nodes.frame.geometry}
             material={materials.FrameMaterial}
             material-roughness={1}
             dispose={null}
             rotation={[0, 0, 0]}
             position={[0, 0, 0]}
             scale={[1,0.05,1]}
            ></mesh>
        </group>
    )
}

export default Chair




// <mesh
//                 castShadow
//                 geometry={nodes.chair_wooden_baked.geometry}
//                 material={materials.chair}
//                 material-roughness={1}
//                 dispose={null}
//                 rotation={[-Math.PI / 2, 0, 0]}
//                 position={[0, 0, 0]}
//                 scale={[0.1, 0.1, 0.1]}
//             >
//                 <meshStandardMaterial
//                     map={flowerTexture}
//                     transparent
//                    // Adjust opacity as needed
//                     // Enable depth testing for transparency
//                      // Disable depth writing for transparency
               
//                     roughness={materials.chair.roughness}
//                     metalness={materials.chair.metalness}
//                     normalMap={materials.chair.normalMap}
//                     aoMap={materials.chair.aoMap}
//                     emissive={materials.chair.emissive}
                   
//                     opacity={1.0} // Adjust opacity as needed
//                     depthTest={true}
//                     depthWrite={true}
//                 />
//             </mesh>