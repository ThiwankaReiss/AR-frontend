import React from 'react'
import CarouselItm from '../../components/CarouselItm/CarouselItm'
const Products = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-8">
          <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">

                <div className='w-100'>
                  <CarouselItm
                    image={"loginback.jpg"}
                    mainheading={"3D"}
                    subheading={"View Products As 3d"}
                    description={`Click on 3d to view product as 3d`}>
                  </CarouselItm>
                </div>
              </div>
              <div class="carousel-item">
                <CarouselItm
                  image={"loginback.jpg"}
                  mainheading={"AR"}
                  subheading={"Vew Products in Augmented Reality"}
                  description={`Click on AR to view product in your home environment`}>
                </CarouselItm>
              </div>
              <div class="carousel-item">
                <CarouselItm
                  image={"loginback.jpg"}
                  mainheading={"Album"}
                  subheading={"Vew Products as Album"}
                  description={`Click on book to view product images`}>
                </CarouselItm>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Products