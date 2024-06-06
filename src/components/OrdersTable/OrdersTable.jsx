import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sorter from '../../components/Sorters/Sorter'
import './OrdersTable.css'
import state from '../../store'
import { useSnapshot } from 'valtio'
import DropList from '../DropList/DropList'
import Swal from 'sweetalert2'

const OrdersTable = ({ customerId, all, byId }) => {
    const snap = useSnapshot(state);
    const [userOrders, setUserOrders] = useState(null);
    const [status, setStatus] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const handleChangeStatus = () => {
        Swal.fire('Please wait')
        Swal.showLoading();
        axios.post('http://localhost:8080/order', {
            id: selectedOrder.id,
            user: selectedOrder.user,
            total: selectedOrder.total,
            date: selectedOrder.data,
            time: selectedOrder.time,
            status: status,
            detail: selectedOrder.detail
        })
            .then(function (response) {


                if (response.data != null && response.data != '') {


                    Swal.fire({
                        title: "Sucess!",
                        text: "Update Sucessfull",
                        icon: "success"
                    });
                    Swal.hideLoading();
                    setStatus(null)
                    selectedOrder(null)
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Failed!",
                        text: "Something went wrong",
                    });
                    Swal.hideLoading();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleSlectedOrder = (data) => {
        setStatus(data.status)
        setSelectedOrder(data);
    }




    useEffect(() => {
        const fetchOrders = async () => {
            if (customerId != null) {
                try {
                    const response = await axios.get(`http://localhost:8080/orders/user/${customerId}`);
                    setUserOrders(response.data);
                    console.log(response.data)
                } catch (error) {
                    console.error('Error fetching image:', error);
                }
            } else if (all) {
                try {
                    const response = await axios.get(`http://localhost:8080/orders`);
                    setUserOrders(response.data);
                    console.log(response.data)
                } catch (error) {
                    console.error('Error fetching image:', error);
                }
            } else if (byId != null) {
                try {
                    const response = await axios.get(`http://localhost:8080/order/${byId}`);
                    setUserOrders([response.data]);
                    console.log(response.data)
                } catch (error) {
                    console.error('Error fetching image:', error);
                }
            }

        };
        fetchOrders();

    }, [customerId])
    return (
        <div className="container">
            <div className="row">

                {
                    userOrders && userOrders.map((data) => (
                        <>
                            {all || byId && <div className="col-lg-12">
                                <h5>User Id : {data.user.id} Email : {data.user.email}  OrderId :{data.id}</h5>
                            </div>}
                            <div className="col-lg-6">

                                <h3>Date/Time : {data.date} / {data.time} {data.status} </h3>

                            </div>
                            <div className="col-lg-6 d-flex justify-content-end align-items-center">
                                <h3> Total : {data.total}</h3>
                                {snap.customer && (snap.customer.status == 'admin' || snap.customer.status == 'employee') &&
                                    <>
                                        <button className='btn btn-sm btn-outline-primary m-1' data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={() => { handleSlectedOrder(data) }}>Change Status</button>
                                        <button className='btn btn-sm btn-danger m-1'>Delete Order</button>
                                    </>
                                }

                            </div>
                            <table class="table text-center table-bordered mt-3 mb-3">
                                <thead>
                                    <tr >
                                        <th scope='col' >Name</th>
                                        <th scope='col'>View</th>
                                        <th scope='col'>Unit Price</th>
                                        <th scope='col'>Quantity</th>
                                        <th scope='col'>Amount</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {data.detail && data.detail.map((info, index) => (
                                        <tr>
                                            <th>{info.product.name}</th>
                                            <td className='container-width-change'>
                                                <div >
                                                    <Sorter geos={info.product.materials} model={info.product.type}></Sorter>
                                                </div>
                                            </td>
                                            <td>{info.price}</td>
                                            <td>{info.amount}</td>
                                            <td>{info.price * info.amount}</td>

                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </>
                    ))
                }
                {/* modal31 */}
                <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Confirm Order</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body" >
                                <div>
                                    <DropList array={["processing", "completed", "delivered"]} topic={"Update Status"} setter={setStatus} current={status}></DropList>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleChangeStatus}>Confim</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default OrdersTable