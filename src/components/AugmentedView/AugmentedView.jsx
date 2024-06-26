import React, { useEffect, useRef, useState } from 'react';
import CanvasModel from '../../canvas/CanvasModel';
import ARModel from '../../canvas/ARModel';
import Draggable from 'react-draggable';
import Sorter from '../Sorters/Sorter';
import state from '../../store'
import { useSnapshot } from 'valtio';
const AugmentedView = () => {
    const snap = useSnapshot(state);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isCameraEnabled, setIsCameraEnabled] = useState(false);
    const [avgIntensity, setAvgIntensity] = useState(1);
    const [lightX, setLightX] = useState(0);
    const [lightY, setLightY] = useState(0);
    const [modelSize, setModelSize] = useState(50);

    function getValue(event) {
        const value = event.target.value;
        setModelSize(value);
        
    }
    useEffect(() => {
        const enableCamera = async () => {
            try {
                // Attempt to use the back camera
                const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                    setIsCameraEnabled(true);
                }

                
            } catch (error) {
                console.error('Error accessing the back camera, trying the front camera', error);
                try {
                    // Fall back to the front camera if the back camera is not available
                    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                        videoRef.current.play();
                        setIsCameraEnabled(true);
                    }
                    
                } catch (error) {
                    console.error('Error accessing the front camera', error);
                }
            }
        };

        enableCamera();
    }, []);

    useEffect(() => {
        if (isCameraEnabled) {
            const calculateLightIntensity = () => {
                const canvas = canvasRef.current;
                const context = canvas.getContext('2d');
                context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;

                // Divide the frame into a grid
                const gridSize = 10;
                const cellWidth = canvas.width / gridSize;
                const cellHeight = canvas.height / gridSize;

                let maxIntensity = 0;
                let lightDirection = { x: 0, y: 0 };

                for (let x = 0; x < gridSize; x++) {
                    for (let y = 0; y < gridSize; y++) {
                        let totalIntensity = 0;
                        let pixelCount = 0;

                        for (let i = 0; i < cellWidth; i++) {
                            for (let j = 0; j < cellHeight; j++) {
                                const pixelIndex = ((y * cellHeight + j) * canvas.width + (x * cellWidth + i)) * 4;
                                const r = data[pixelIndex];
                                const g = data[pixelIndex + 1];
                                const b = data[pixelIndex + 2];
                                const intensity = (r + g + b) / 3;
                                totalIntensity += intensity;
                                pixelCount++;
                            }
                        }

                        const averageIntensity = totalIntensity / pixelCount;
                        if (averageIntensity > maxIntensity) {
                            maxIntensity = averageIntensity;
                            lightDirection = { x, y };
                        }
                    }
                }

                setLightX(lightDirection.x);
                setLightY(lightDirection.y);
                setAvgIntensity(maxIntensity);
            };

            const lightIntensityIntervalId = setInterval(calculateLightIntensity, 1000);

            return () => clearInterval(lightIntensityIntervalId);
        }
    }, [isCameraEnabled]);

    return (

        <>
            <div className='cam-window position-relative col-lg-8 col-md-8 col-sm-8 w-100' style={{ height: '445px', overflow: 'hidden' }}>
                <video
                    ref={videoRef}
                    className='position-absolute w-100 h-100'
                    style={{ top: 0, left: 0, objectFit: 'cover', overflow: 'hidden' }}
                />

                <canvas
                    ref={canvasRef}
                    style={{ display: 'none' }}
                    width={640}
                    height={480}
                />
               <Draggable>
                    <div className='h-100'>
                        <Sorter geos={snap.geometry.materials} model={snap.geometry.type} augmented={"augmented"} avgIntensity={avgIntensity} lightX={lightX} lightY={lightY} modelSize={modelSize}></Sorter>
                    </div>
                </Draggable>
                

            </div>
            <form>
                <label htmlFor="customRange1" className="form-label">Near</label>
                <input type="range" className="form-range" onChange={getValue} id="customRange1" />
            </form>
        </>

    );
};

export default AugmentedView;
