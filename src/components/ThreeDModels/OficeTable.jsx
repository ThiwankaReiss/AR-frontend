import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const OficeTable = () => {
    const { nodes, materials } = useGLTF('/office_table.glb');
    console.log(nodes);
    console.log(materials);
    // Define texture properties
    const textureRepeat = 20; // Number of times the texture repeats
    const flowerTexture = useTexture('/colorPickerImage.jpg'); // Replace '/flower_texture.png' with your image path

    // Apply texture repetition
    flowerTexture.wrapS = flowerTexture.wrapT = THREE.RepeatWrapping;
    flowerTexture.repeat.set(textureRepeat, textureRepeat);
    flowerTexture.flipY = false;

    return (
        <group>
            
            <mesh
                castShadow
                geometry={nodes.Top.geometry}
                material={materials.TopMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[-Math.PI/2, 0, 0]}
                position={[0, 0, 0]}
                scale={[0.1, 0.1, 0.1]}
            />
            <mesh
                castShadow
                geometry={nodes.Frame.geometry}
                material={materials.FrameMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[-Math.PI/2, 0, 0]}
                position={[0, 0, 0]}
                scale={[0.1, 0.1, 0.1]}
            />
            <mesh
                castShadow
                geometry={nodes.Chair.geometry}
                material={materials.ChairMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[-Math.PI/2, 0, 0]}
                position={[0.105, -0.045, 0]}
                scale={[0.1, 0.1, 0.1]}
            />
            <mesh
                castShadow
                geometry={nodes.TopCus.geometry}
                material={materials.TopCusMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[-Math.PI/2, 0, 0]}
                position={[0.105, -0.045, 0]}
                scale={[0.1, 0.1, 0.1]}
            />
            <mesh
                castShadow
                geometry={nodes.BtmCus.geometry}
                material={materials.BtmCusMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[-Math.PI/2, 0, 0]}
                position={[0.105, -0.045, 0]}
                scale={[0.1, 0.1, 0.1]}
            >
                <meshStandardMaterial
                    map={flowerTexture}
                    transparent
                    roughness={materials.BtmCusMaterial.roughness}
                    metalness={materials.BtmCusMaterial.metalness}
                    normalMap={materials.BtmCusMaterial.normalMap}
                    aoMap={materials.BtmCusMaterial.aoMap}
                    emissive={materials.BtmCusMaterial.emissive}

                    opacity={1.0} // Adjust opacity as needed
                    depthTest={true}
                    depthWrite={true}
                />
            </mesh>



        </group>
    );
};

export default OficeTable;