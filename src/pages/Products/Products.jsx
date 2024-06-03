import React, { useEffect } from 'react'
import CarouselItm from '../../components/CarouselItm/CarouselItm'
import { useSnapshot } from 'valtio'
import state from '../../store'
import Aos from 'aos'
import CanvasModel from '../../canvas/CanvasModel'
import Sorter from '../../components/Sorters/Sorter'
import './Products.css'
import { useNavigate } from 'react-router-dom'
import WoodenChair from '../../components/ThreeDModels/WoodenChair'
const Products = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const snap = useSnapshot(state);
  const navigate = useNavigate();
  const handleEdit = (data) => {
    state.geometry = data;

    navigate('/manage')
  }
  const handleView = (data) => {
    state.geometry = data;
    navigate('/details')
  }

  const initialGeos = {

    woodenChair: {
      price: 800,
      name: 'Wooden Chair',
      type: 'woodenChair',
      images: '',
      materials: [{
        name: 'Cussion',
        color: null,
        texture: 0,
        repeate: 20,
        visible: true,
      }]
    },
    officeTable: {
      price: 800,
      name: 'Office Tables',
      type: 'officeTable',
      images: '',
      materials: [{
        name: 'TopCussion',
        color: null,
        texture: 0,
        repeate: 20,
        visible: true,
      }, {
        name: 'BtmCussion',
        color: null,
        texture: 0,
        repeate: 20,
        visible: true,
      }
      ]
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 d-flex align-items-center justify-content-center">
          <p>
            <h1 data-aos="fade-down-right" data-aos-duration="1000" className='text-center' style={{ color: snap.themeColor }}>Welcome to Thiwanka Reiss Show room</h1>
            <br></br>
            <h5 data-aos="fade-up" data-aos-duration="2000">Hope you have an inovative and enjoyable experience with us</h5>
          </p>

        </div>
        <div className="col-lg-7">
          <div data-aos="zoom-in" data-aos-duration="3000" id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel">
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
      <div className="row d-flex justify-content-center">
        <div className="col-lg-3 m-3 model-container" style={{ border: `2px solid ${snap.themeColor}` }}>
          <Sorter model="woodenChair" geos={[initialGeos.woodenChair]} />
          <div className='buttons-container'>
            <button className='btn btn-sm btn-outline-warning m-1' onClick={() => { handleEdit(initialGeos.woodenChair) }}>Edit</button>
            <button className='btn btn-sm btn-outline-success m-1'>View</button>
            <button className='btn btn-sm btn-outline-info m-1'>Cart</button>
          </div>
        </div>
        <div className="col-lg-3 m-3 model-container" style={{ border: `2px solid ${snap.themeColor}` }}>
          <Sorter model="officeTable" geos={[]}></Sorter>
          <div className='buttons-container'>
            <button className='btn btn-sm btn-outline-warning m-1' onClick={() => { handleEdit(initialGeos.officeTable) }}>Edit</button>
            <button className='btn btn-sm btn-outline-success m-1'>View</button>
            <button className='btn btn-sm btn-outline-info m-1'>Cart</button>
          </div>
        </div>
        <div className="col-lg-3 m-3 model-container" style={{ border: `2px solid ${snap.themeColor}` }}>
          <Sorter model="sofa" geos={[]}></Sorter>
          <div className='buttons-container'>
            <button className='btn btn-sm btn-outline-warning m-1'>Edit</button>
            <button className='btn btn-sm btn-outline-success m-1'>View</button>
            <button className='btn btn-sm btn-outline-info m-1'>Cart</button>
          </div>
        </div>
        <div className="col-lg-3 m-3 model-container" style={{ border: `2px solid ${snap.themeColor}` }}>
          <Sorter model="picnicTable" geos={[]}></Sorter>
          <div className='buttons-container'>
            <button className='btn btn-sm btn-outline-warning m-1'>Edit</button>
            <button className='btn btn-sm btn-outline-success m-1'>View</button>
            <button className='btn btn-sm btn-outline-info m-1'>Cart</button>
          </div>
        </div>


      </div>
    </div>

  )
}

export default Products