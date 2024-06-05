import React, { useEffect, useState } from 'react'
import state from '../../store'
import axios from 'axios'
import { useSnapshot } from 'valtio'
import Sorter from '../../components/Sorters/Sorter'
import './Order.css'
const Orders = () => {
    const snap = useSnapshot(state);
    const [userOrders, setUserOrders] = useState(null);
    useEffect(() => {
        const fetchOrders = async () => {
            if (snap.customer != null) {
                try {
                    const response = await axios.get(`http://localhost:8080/orders/user/${snap.customer.id}`);
                    setUserOrders(response.data);
                    console.log(response.data)
                } catch (error) {
                    console.error('Error fetching image:', error);
                }
            }

        };
        fetchOrders();

    }, [snap.customer])
    return (
        <div className="container">
            <div className="row">
                <div className="row">
                    {
                        userOrders && userOrders.map((data) => (
                            <>
                                <div className="col-lg-6">
                                    <h3>Date/Time : {data.date} / {data.time}  </h3>
                                    
                                </div>
                                <div className="col-lg-6 text-end">
                                    <h3> Total : {data.total}</h3>
                                </div>
                                <table class="table text-center table-bordered mt-3">
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
        </div>

    )
}

export default Orders