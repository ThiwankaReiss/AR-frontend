import React, { useEffect, useState } from 'react'

import axios from 'axios'

import Sorter from '../../components/Sorters/Sorter'
import './OrdersTable.css'
const OrdersTable = ({customerId,all}) => {
    
    const [userOrders, setUserOrders] = useState(null);
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
            }else if (all){
                try {
                    const response = await axios.get(`http://localhost:8080/orders`);
                    setUserOrders(response.data);
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
                               { all &&<div className="col-lg-12">
                               <h5>User Id : {data.user.id} Email : {data.user.email}  OrderId :{data.id}</h5>
                                </div>}
                                <div className="col-lg-6">
                              
                                    <h3>Date/Time : {data.date} / {data.time}  </h3>
                                    
                                </div>
                                <div className="col-lg-6 text-end">
                                    <h3> Total : {data.total}</h3>
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



            </div>
        </div>

    )
}

export default OrdersTable