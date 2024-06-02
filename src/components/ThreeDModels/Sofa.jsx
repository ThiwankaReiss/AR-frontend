import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Sofa = ({ edit,imgArray,geos }) => {
    const { nodes, materials } = useGLTF('/sofa_baked.glb');

    // Define texture properties

    // Number of times the texture repeats
    if(imgArray!=null){
       
        var pillowTexture = useTexture(imgArray[0]);
        pillowTexture.wrapS = pillowTexture.wrapT = THREE.RepeatWrapping;
        pillowTexture.repeat.set(geos[0].repeate, geos[0].repeate);
        pillowTexture.flipY = false;

        var seatTexture = useTexture(imgArray[1]);
        seatTexture.wrapS = pillowTexture.wrapT = THREE.RepeatWrapping;
        seatTexture.repeat.set(geos[1].repeate, geos[1].repeate);
        seatTexture.flipY = false;

        var frameTexture = useTexture(imgArray[2]);
        frameTexture.wrapS = frameTexture.wrapT = THREE.RepeatWrapping;
        frameTexture.repeat.set(geos[2].repeate, geos[2].repeate);
        frameTexture.flipY = false;
    }
    

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
                {edit && edit == "edit" && (
                    <meshStandardMaterial
                        color={'#2828FE'}
                        roughness={materials.FrameMaterial.roughness}
                        metalness={materials.FrameMaterial.metalness}
                        normalMap={materials.FrameMaterial.normalMap}
                        aoMap={materials.FrameMaterial.aoMap}
                        emissive={materials.FrameMaterial.emissive}

                        opacity={1.0} // Adjust opacity as needed
                        depthTest={true}
                        depthWrite={true}
                    />
                )}
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
                {edit && edit == "edit" && (
                    <meshStandardMaterial
                        map={frameTexture}
                        transparent
                        roughness={materials.FrameClothMaterial.roughness}
                        metalness={materials.FrameClothMaterial.metalness}
                        normalMap={materials.FrameClothMaterial.normalMap}
                        aoMap={materials.FrameClothMaterial.aoMap}
                        emissive={materials.FrameClothMaterial.emissive}

                        opacity={1.0} // Adjust opacity as needed
                        depthTest={true}
                        depthWrite={true}
                    />
                )}
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
                {edit && edit == "edit" && (
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
                )}
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
                {edit && edit == "edit" && (
                    <meshStandardMaterial
                        map={seatTexture}
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
                )}
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
                {edit && edit == "edit" && (
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
                )}
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
                {edit && edit == "edit" && (
                    <meshStandardMaterial
                        map={pillowTexture}
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
                )}
            </mesh>
        </group>
    );
};

export default Sofa;