import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Sofa = () => {
    const { nodes, materials } = useGLTF('/sofa_baked.glb');
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
                geometry={nodes.frame.geometry}
                material={materials.FrameMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[0, 0, 0]}
                position={[0, 0, 0]}
                scale={[0.1, 0.1, 0.1]}
            />
            <mesh
                castShadow
                geometry={nodes.holders.geometry}
                material={materials.HolderMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[0, 0, 0]}
                position={[0, 0, 0]}
                scale={[0.1, 0.1, 0.1]}
            />
            <mesh
                castShadow
                geometry={nodes.seats.geometry}
                material={materials.SeatsMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[0, 0, 0]}
                position={[0, 0, 0]}
                scale={[0.1, 0.1, 0.1]}
            />
            <mesh
                castShadow
                geometry={nodes.pillows.geometry}
                material={materials.PillowsMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[0, 0, 0]}
                position={[0, 0, 0]}
                scale={[0.1, 0.1, 0.1]}
            >
                <meshStandardMaterial
                    map={flowerTexture}
                    transparent
                    roughness={materials.PillowsMaterial.roughness}
                    metalness={materials.PillowsMaterial.metalness}
                    normalMap={materials.PillowsMaterial.normalMap}
                    aoMap={materials.PillowsMaterial.aoMap}
                    emissive={materials.PillowsMaterial.emissive}

                    opacity={1.0} // Adjust opacity as needed
                    depthTest={true}
                    depthWrite={true}
                />
            </mesh>

        </group>
    );
};

export default Sofa;