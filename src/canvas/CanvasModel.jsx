import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center, RandomizedLight } from '@react-three/drei'
import CameraRig from './CameraRig'

import Backdrop from './Backdrop.jsx'
import Chair from '../components/ThreeDModels/Chair.jsx'
import Sofa from '../components/ThreeDModels/Sofa.jsx'
import OficeTable from '../components/ThreeDModels/OficeTable.jsx'
import PicnicTable from '../components/ThreeDModels/PicnicTable.jsx'
import WoodenChair from '../components/ThreeDModels/WoodenChair.jsx'
const CanvasModel = ({ model }) => {
    return (

        <Canvas
            shadows
            camera={{ position: [0, 0, 0], fov: 20 }}
            gl={{ preserveDrawingBuffer: true }}

        >
            <ambientLight intensity={0.3} position={[0, 0, -10]} />


            <Environment preset='city' />

            <CameraRig cameraCordinates={[0, 0, 50]}>
                <Backdrop></Backdrop>

                <Center>
                    {model && model == "chair" && (
                        <Chair></Chair>
                    )}
                    {model && model == "sofa" && (
                        <Sofa></Sofa>
                    )}
                    {model && model == "officeTable" && (
                        <OficeTable></OficeTable>
                    )}
                    {model && model == "picnicTable" && (
                        <PicnicTable></PicnicTable>
                    )}
                    {model && model == "woodenChair" && (
                        <WoodenChair></WoodenChair>
                    )}
                    {/* <Sofa></Sofa> */}
                </Center>
            </CameraRig>

        </Canvas>


    )
}

export default CanvasModel