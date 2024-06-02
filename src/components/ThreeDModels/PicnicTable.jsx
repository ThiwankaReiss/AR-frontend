import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const PicnicTable = ({ edit,geos }) => {
    const { nodes, materials } = useGLTF('/PicnicWoodTable.glb');

    // Define texture properties
    const textureRepeat = 20; // Number of times the texture repeats
    const flowerTexture = useTexture('src/assets/react.svg'); // Replace '/flower_texture.png' with your image path

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
            >
                {edit && edit == "edit" && (
                    <meshStandardMaterial
                        color={'#FF9F00'}
                        roughness={materials.TableMaterial.roughness}
                        metalness={materials.TableMaterial.metalness}
                        normalMap={materials.TableMaterial.normalMap}
                        aoMap={materials.TableMaterial.aoMap}
                        emissive={materials.TableMaterial.emissive}

                        opacity={1.0} // Adjust opacity as needed
                        depthTest={true}
                        depthWrite={true}
                    />
                )}

            </mesh>
            <mesh
                castShadow
                geometry={nodes.TableCloth.geometry}
                material={materials.TableClothMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[0, 0, 0]}
                position={[0, 0, 0]}
                scale={[0.001, 0.001, 0.001]}
            >
                {edit && edit == "edit" && (
                    <meshStandardMaterial
                        map={flowerTexture}
                        transparent
                        roughness={materials.TableClothMaterial.roughness}
                        metalness={materials.TableClothMaterial.metalness}
                        normalMap={materials.TableClothMaterial.normalMap}
                        aoMap={materials.TableClothMaterial.aoMap}
                        emissive={materials.TableClothMaterial.emissive}

                        opacity={1.0} // Adjust opacity as needed
                        depthTest={true}
                        depthWrite={true}
                    />
                )}

            </mesh>

        </group>
    );
};

export default PicnicTable;