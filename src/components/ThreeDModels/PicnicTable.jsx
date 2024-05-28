import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const PicnicTable = () => {
    const { nodes, materials } = useGLTF('/PicnicWoodTable.glb');
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
        <group
            scale={[30, 30, 30]}
        >

            <mesh
                castShadow
                geometry={nodes.Table.geometry}
                material={materials.TableMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[0, 0, 0]}
                position={[0, 0, 0]}
                scale={[0.001, 0.001, 0.001]}
            />

        </group>
    );
};

export default PicnicTable;