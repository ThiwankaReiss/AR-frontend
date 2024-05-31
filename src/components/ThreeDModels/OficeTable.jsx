import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath'
const OficeTable = ({ edit }) => {
    const { nodes, materials } = useGLTF('/office_table.glb');



    // Define texture properties
    const textureRepeat = 20; // Number of times the texture repeats
    const flowerTexture = useTexture('src/assets/react.svg'); // Replace '/flower_texture.png' with your image path

    // Apply texture repetition
    flowerTexture.wrapS = flowerTexture.wrapT = THREE.RepeatWrapping;
    flowerTexture.repeat.set(textureRepeat, textureRepeat);
    flowerTexture.flipY = false;

    return (
        <group
            scale={[50, 50, 50]}
        >

            <mesh
                castShadow
                geometry={nodes.Top.geometry}
                material={materials.TopMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, 0, 0]}
                scale={[0.1, 0.1, 0.1]}
            />
            <mesh
                castShadow
                geometry={nodes.Frame.geometry}
                material={materials.FrameMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, 0, 0]}
                scale={[0.1, 0.1, 0.1]}
            />
            <mesh
                castShadow
                geometry={nodes.Chair.geometry}
                material={materials.ChairMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0.105, -0.045, 0]}
                scale={[0.1, 0.1, 0.1]}
            />
            <mesh
                castShadow
                geometry={nodes.TopCus.geometry}
                material={materials.TopCusMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0.105, -0.045, 0]}
                scale={[0.1, 0.1, 0.1]}
            >
                {edit && edit == "edit" && (
                    <meshStandardMaterial

                        color={'#2828FE'}

                        roughness={materials.TopCusMaterial.roughness}
                        metalness={materials.TopCusMaterial.metalness}
                        normalMap={materials.TopCusMaterial.normalMap}
                        aoMap={materials.TopCusMaterial.aoMap}
                        emissive={materials.TopCusMaterial.emissive}

                        opacity={1.0} // Adjust opacity as needed
                        depthTest={true}
                        depthWrite={true}
                    />
                )}

            </mesh>
            <mesh
                castShadow
                geometry={nodes.TopCusCloth.geometry}
                material={materials.TopCusClothMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0.105, -0.045, 0]}
                scale={[0.1, 0.1, 0.1]}
            >
                {edit && edit == "edit" && (
                    <meshStandardMaterial

                        transparent
                        map={flowerTexture}
                        roughness={materials.TopCusClothMaterial.roughness}
                        metalness={materials.TopCusClothMaterial.metalness}
                        normalMap={materials.TopCusClothMaterial.normalMap}
                        aoMap={materials.TopCusClothMaterial.aoMap}
                        emissive={materials.TopCusClothMaterial.emissive}

                        opacity={1.0} // Adjust opacity as needed
                        depthTest={true}
                        depthWrite={true}
                    />
                )}

            </mesh>
            <mesh
                castShadow
                geometry={nodes.BtmCus.geometry}
                material={materials.BtmCusMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0.105, -0.045, 0]}
                scale={[0.1, 0.1, 0.1]}
            >
                {edit && edit == "edit" && (
                    <meshStandardMaterial

                        color={'#FF9F00'}

                        roughness={materials.BtmCusMaterial.roughness}
                        metalness={materials.BtmCusMaterial.metalness}
                        normalMap={materials.BtmCusMaterial.normalMap}
                        aoMap={materials.BtmCusMaterial.aoMap}
                        emissive={materials.BtmCusMaterial.emissive}

                        opacity={1.0} // Adjust opacity as needed
                        depthTest={true}
                        depthWrite={true}
                    />
                )}

            </mesh>

            <mesh
                castShadow
                geometry={nodes.BtmCusCloth.geometry}
                material={materials.BtmCusClothMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0.105, -0.045, 0]}
                scale={[0.1, 0.1, 0.1]}
            >
                {edit && edit == "edit" && (
                    <meshStandardMaterial

                        map={flowerTexture}
                        transparent
                        roughness={materials.BtmCusClothMaterial.roughness}
                        metalness={materials.BtmCusClothMaterial.metalness}
                        normalMap={materials.BtmCusClothMaterial.normalMap}
                        aoMap={materials.BtmCusClothMaterial.aoMap}
                        emissive={materials.BtmCusClothMaterial.emissive}

                        opacity={1.0} // Adjust opacity as needed
                        depthTest={true}
                        depthWrite={true}
                    />
                )}

            </mesh>


        </group>
    );
};

export default OficeTable;