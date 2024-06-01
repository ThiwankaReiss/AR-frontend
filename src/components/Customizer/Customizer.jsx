import './Customizer.css'
import React, { useState } from 'react'
import CanvasModel from '../../canvas/CanvasModel'
import DropDown from '../DropDown/DropDown'
import Tab from '../Tab/Tab'
import ImageUploader from '../ImageUploader/ImageUploader'
import PicUpload from '../PicUpload/PicUpload'
const Customizer = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [geos, setGeos] = useState([
        {
            name: "Seat Top",
            color: "#0000ff",
            texture: 'imageString'
        },
        {
            name: "Seat Bottom",
            color: "#0000ff",
            texture: 'imageString'
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
                <DropDown text="Top" adjustActiveTab={adjustActiveTab} tab="top" />
                {
                    activeTab && activeTab === "top" && (
                        <>
                            <Tab setColor={getTopColor} currentColor={topColor} text="Top Color" />
                            
                        </>
                    )
                }
            </div>
            <div className="col-lg-7 m-3 canvas-container ">
                <CanvasModel model={"sofa"} />
            </div>
            <div className="col-lg-4 m-3 customizer-container ">
                {geos.map((data,index) => (
                    <>
                        <DropDown text={data.name} adjustActiveTab={adjustActiveTab} tab={data.name} />
                        {
                            activeTab && activeTab === data.name && (
                                <>
                                    <Tab setColor={{
                                        array:geos,
                                        func:setGeos,
                                        edit:index
                                    }} currentColor={data.color} text="Top Color" />
                                    <PicUpload getImage={null} setShowImage={null} showImage={null} text="Upload Image (front)"></PicUpload>
                                </>
                            )
                        }
                    </>

                ))}
            </div>
            <div className="col-12">
                <ImageUploader/>
            </div>
        </>
    );
}

export default Customizer;
