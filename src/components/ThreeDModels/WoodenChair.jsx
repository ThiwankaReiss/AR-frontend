import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const WoodenChair = () => {
    const { nodes, materials } = useGLTF('/wooden_chair_final.glb');

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
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, 0, 0]}
                scale={[0.1, 0.1, 0.1]}
            />
            {nodes.cussion.children.map((child, index) => (
                <mesh
                    key={index}
                    castShadow
                    geometry={child.geometry}
                    material={materials.CussionMaterial}
                    material-roughness={1}
                    dispose={null}
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, 0, 0]}
                    scale={[0.1, 0.1, 0.1]}
                >
                    <meshStandardMaterial
                        map={flowerTexture}
                        transparent
                        roughness={materials.CussionMaterial.roughness}
                        metalness={materials.CussionMaterial.metalness}
                        normalMap={materials.CussionMaterial.normalMap}
                        aoMap={materials.CussionMaterial.aoMap}
                        emissive={materials.CussionMaterial.emissive}

                        opacity={1.0} // Adjust opacity as needed
                        depthTest={true}
                        depthWrite={true}
                    />
                </mesh>
            ))}
        </group>
    );
};

export default WoodenChair;
