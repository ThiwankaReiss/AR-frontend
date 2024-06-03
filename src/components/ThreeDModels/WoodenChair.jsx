import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const WoodenChair = (edit, imgArray, geos) => {
    const { nodes, materials } = useGLTF('/woodChair.glb');
    const textures = {
        Cussion: null
    };

    const colors = {
        Cussion: null
    };
    const setTextureProperties = (type, index) => {
        const texture = useTexture(imgArray[index].image);
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(geos[index].repeate, geos[index].repeate);
        texture.flipY = false;
        return texture;
    };
    if (imgArray) {
        imgArray.forEach((img, index) => {
            if (img.image) {
                if (img.type === 'Cussion') {
                    textures.Cussion = setTextureProperties('Cussion', index);
                } 
            }
        });
    }
    

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
