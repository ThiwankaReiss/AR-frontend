import React from 'react'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import CanvasModel from '../../canvas/CanvasModel'
const Detail = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div>
                    <ImageCarousel></ImageCarousel>
                </div>
            </div>
            <div className="col-lg-6 mt-3">
            <CanvasModel></CanvasModel>
            </div>
            <div className="col-12">
              
                
           
                
            </div>
        </div>
    </div>
    
  )
}

export default Detail