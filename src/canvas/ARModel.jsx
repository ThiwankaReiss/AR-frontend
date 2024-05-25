import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'
import CameraRig from './CameraRig'
import Chair from './Chair'


const ARModel = ({ avgIntensity ,lightX, lightY}) => {
    const adjustedIntensity = avgIntensity / 12; // Normalize intensity to range 0-1

    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 0], fov: 20 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <spotLight position={[lightX,lightY,5]} intensity={adjustedIntensity}></spotLight>
            

            <Environment preset='city'/>

            <CameraRig cameraCordinates={[0, 0, 20]}>
                <Center>
                    <Chair />
                </Center>
            </CameraRig>
        </Canvas>
    )
}

export default ARModel;
