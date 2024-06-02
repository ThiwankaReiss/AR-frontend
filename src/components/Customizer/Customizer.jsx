import './Customizer.css'
import React, { useState } from 'react'
import CanvasModel from '../../canvas/CanvasModel'
import DropDown from '../DropDown/DropDown'
import Tab from '../Tab/Tab'
import ImageUploader from '../ImageUploader/ImageUploader'
import PicUpload from '../PicUpload/PicUpload'
import ImgScaler from '../ImgScaler/ImgScaler'
import SofaSorter from '../Sorters/SofaSorter'
const Customizer = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [geos, setGeos] = useState([
        {
            name: "Pillow",
            color: "#0000ff",
            texture: 4,
            repeate: 20,
            visible: true
        },
        {
            name: "Seat",
            color: "#0000ff",
            texture: 6,
            repeate: 20,
            visible: true
        },
        {
            name: "Frame",
            color: "#0000ff",
            texture: 6,
            repeate: 20,
            visible: true
        }
    ]);
    const [topColor, setTopColor] = useState('#FF3333');

    function adjustActiveTab(tab) {
        setActiveTab(activeTab === tab ? null : tab);
    }

    const getTopColor = (col) => {
        setTopColor(col);
    };


    console.log(geos);

    return (
        <>
            <div className="col-lg-4 m-3 customizer-container ">
                {geos.map((data, index) => (
                    <>
                        <DropDown text={data.name} adjustActiveTab={adjustActiveTab} tab={data.name} />
                        {
                            activeTab && activeTab === data.name && (
                                <>
                                    <Tab setColor={{
                                        array: geos,
                                        func: setGeos,
                                        edit: index
                                    }} currentColor={data.color} text={data.name + " Color"} />
                                    <PicUpload getImage={{
                                        array: geos,
                                        func: setGeos,
                                        edit: index
                                    }} setShowImage={null} showImage={data.visible} text={data.name + " Image"}></PicUpload>
                                    <ImgScaler showImage={data.visible} Image={data.texture}
                                        setterFunction={{
                                            array: geos,
                                            func: setGeos,
                                            edit: index
                                        }}></ImgScaler>
                                </>
                            )
                        }
                    </>

                ))}
            </div>
            <div className="col-lg-7 m-3 canvas-container ">
                <SofaSorter geos={geos}></SofaSorter>
            </div>

            <div className="col-12">
                <ImageUploader />
            </div>
        </>
    );
}

export default Customizer;
