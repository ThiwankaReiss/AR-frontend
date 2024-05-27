// ARModel.js
import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Chair from '../components/ThreeDModels/Chair';
import ARCamRig from './ARCamRig';
import WoodenChair from '../components/ThreeDModels/WoodenChair';
import Sofa from '../components/ThreeDModels/Sofa';
const ARModel = ({ avgIntensity, lightX, lightY ,modelSize}) => {
    const adjustedIntensity = avgIntensity / 12; // Normalize intensity to range 0-1
    
    return (

        <Canvas
            shadows
            camera={{ position: [0, 0, 0], fov: 20 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <spotLight position={[lightX, lightY, 5]} intensity={adjustedIntensity}></spotLight>
            <Environment preset='city' />
            <ARCamRig cameraCoordinates={[0,0,modelSize]} >
                <Center>
                    {/* <Chair/> */}
                    {/* <WoodenChair/> */}
                    <Sofa/>
                </Center>
            </ARCamRig>
        </Canvas>
        
    );
};

export default ARModel;

