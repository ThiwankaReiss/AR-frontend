import './Customizer.css'
import React, { useState } from 'react'
import CanvasModel from '../../canvas/CanvasModel'
import DropDown from '../DropDown/DropDown'
import Tab from '../Tab/Tab'
const Customizer = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [topColor, setTopColor] = useState('#FF3333');
    function adjustActiveTab(tab) {
        setActiveTab(activeTab === tab ? null : tab);
    }
    const getTopColor = (col) => {
        setTopColor(col);
    };
    return (
        <>
            <div className="col-lg-4 m-3 customizer-container ">

                <DropDown text="Top" adjustActiveTab={adjustActiveTab} tab="top"></DropDown>
                {
                    activeTab && activeTab === "top" && (
                        <>
                            <Tab getColor={getTopColor} currentColor={topColor} text="Top Color"></Tab>
                        </>
                    )
                }
            </div>
            <div className="col-lg-7 m-3 canvas-container ">
                <CanvasModel model={"sofa"} />
            </div>
        </>
    )
}

export default Customizer