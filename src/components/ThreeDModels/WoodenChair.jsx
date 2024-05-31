import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const WoodenChair = ({ edit }) => {
    const { nodes, materials } = useGLTF('/woodChair.glb');

    // Define texture properties
    const textureRepeat = 10; // Number of times the texture repeats
    const flowerTexture = useTexture('src/assets/react.svg'); // Replace '/flower_texture.png' with your image path

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
                scale={[0.2, 0.2, 0.2]}
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
                    scale={[0.2, 0.2, 0.2]}
                >
                    {edit && edit == "edit" && (
                        <meshStandardMaterial
                            color={'#2828FE'}
                            roughness={materials.CussionMaterial.roughness}
                            metalness={materials.CussionMaterial.metalness}
                            normalMap={materials.CussionMaterial.normalMap}
                            aoMap={materials.CussionMaterial.aoMap}
                            emissive={materials.CussionMaterial.emissive}

                            opacity={1.0} // Adjust opacity as needed
                            depthTest={true}
                            depthWrite={true}
                        />
                    )}
                </mesh>
            ))}
            {nodes.cussionCloth.children.map((child, index) => (
                <mesh
                    key={index}
                    castShadow
                    geometry={child.geometry}
                    material={materials.CussionClothMaterial}
                    material-roughness={1}
                    dispose={null}
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, 0, 0]}
                    scale={[0.2, 0.2, 0.2]}
                >
                    {edit && edit == "edit" && (
                        <meshStandardMaterial
                            map={flowerTexture}
                            transparent
                            roughness={materials.CussionClothMaterial.roughness}
                            metalness={materials.CussionClothMaterial.metalness}
                            normalMap={materials.CussionClothMaterial.normalMap}
                            aoMap={materials.CussionClothMaterial.aoMap}
                            emissive={materials.CussionClothMaterial.emissive}

                            opacity={1.0} // Adjust opacity as needed
                            depthTest={true}
                            depthWrite={true}
                        />
                    )}
                </mesh>
            ))}
        </group>
    );
};

export default WoodenChair;
