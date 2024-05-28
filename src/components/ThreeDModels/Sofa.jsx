import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Sofa = () => {
    const { nodes, materials } = useGLTF('/sofa_baked.glb');
    console.log(nodes);
    console.log(materials);
    // Define texture properties
    const textureRepeat = 20; // Number of times the texture repeats
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
                rotation={[0, 0, 0]}
                position={[0, 0, 0]}
                scale={[5, 5, 5]}
            >
                <meshStandardMaterial
                    color={'#2828FE'}
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
            <mesh
                castShadow
                geometry={nodes.frameCloth.geometry}
                material={materials.FrameClothMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[0, 0, 0]}
                position={[0, 0, 0]}
                scale={[5, 5, 5]}
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
            <mesh
                castShadow
                geometry={nodes.holders.geometry}
                material={materials.HolderMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[0, 0, 0]}
                position={[0, 0, 0]}
                scale={[5, 5, 5]}
            ></mesh>
            <mesh
                castShadow
                geometry={nodes.seats.geometry}
                material={materials.SeatsMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[0, 0, 0]}
                position={[0, 0, 0]}
                scale={[5, 5, 5]}
            >
                <meshStandardMaterial
                    color={'#2828FE'}
                    roughness={materials.SeatsMaterial.roughness}
                    metalness={materials.SeatsMaterial.metalness}
                    normalMap={materials.SeatsMaterial.normalMap}
                    aoMap={materials.SeatsMaterial.aoMap}
                    emissive={materials.SeatsMaterial.emissive}

                    opacity={1.0} // Adjust opacity as needed
                    depthTest={true}
                    depthWrite={true}
                />
            </mesh>
            <mesh
                castShadow
                geometry={nodes.seatsCloth.geometry}
                material={materials.SeatsClothMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[0, 0, 0]}
                position={[0, 0, 0]}
                scale={[5, 5, 5]}
            >
                <meshStandardMaterial
                    map={flowerTexture}
                    transparent
                    roughness={materials.SeatsClothMaterial.roughness}
                    metalness={materials.SeatsClothMaterial.metalness}
                    normalMap={materials.SeatsClothMaterial.normalMap}
                    aoMap={materials.SeatsClothMaterial.aoMap}
                    emissive={materials.SeatsClothMaterial.emissive}

                    opacity={1.0} // Adjust opacity as needed
                    depthTest={true}
                    depthWrite={true}
                />
            </mesh>
            <mesh
                castShadow
                geometry={nodes.pillows.geometry}
                material={materials.PillowsMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[0, 0, 0]}
                position={[0, 0, 0]}
                scale={[5, 5, 5]}
            >
                <meshStandardMaterial
                    color={'#2828FE'}
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
            <mesh
                castShadow
                geometry={nodes.pillowsCloth.geometry}
                material={materials.PillowsClothMaterial}
                material-roughness={1}
                dispose={null}
                rotation={[0, 0, 0]}
                position={[0, 0, 0]}
                scale={[5, 5, 5]}
            >
                <meshStandardMaterial
                    map={flowerTexture}
                    transparent
                    roughness={materials.PillowsClothMaterial.roughness}
                    metalness={materials.PillowsClothMaterial.metalness}
                    normalMap={materials.PillowsClothMaterial.normalMap}
                    aoMap={materials.PillowsClothMaterial.aoMap}
                    emissive={materials.PillowsClothMaterial.emissive}

                    opacity={1.0} // Adjust opacity as needed
                    depthTest={true}
                    depthWrite={true}
                />
            </mesh>
        </group>
    );
};

export default Sofa;