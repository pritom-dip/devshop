import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Order = () => {
    const [user, setUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch(`https://apple-pudding-44312.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoader(false);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>

            {
                loader ? (
                    <div className="loading">
                        <div className="loader"></div>
                    </div>
                ) : (
                        <>
                            <Header />

                            <div className="container" style={{ alignSelf: 'stretch' }}>
                                <div className="row">

                                    <div className="col-md-12 col-sm-12 pe-0 ps-0">
                                        <div className="card mb-3 admin-card">
                                            <div className="card-header pb-4 pt-4">My Orders</div>
                                            <div className="card-body text-dark pe-0 ps-0">

                                                {
                                                    orders.length > 0 ? (
                                                        <table className="table table-striped table-hover">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Image</th>
                                                                    <th scope="col">Name</th>
                                                                    <th scope="col">Author</th>
                                                                    <th scope="col">Address</th>
                                                                    <th scope="col">Price</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                {
                                                                    orders.map((order, index) => {
                                                                        return (
                                                                            <tr key={order?._id}>
                                                                                <th scope="row">
                                                                                    <img style={{ width: '50px', height: '50px' }} src={order?.product?.image} alt="image" />
                                                                                </th>
                                                                                <td>{order?.product?.name}</td>
                                                                                <td>{order?.product?.author}</td>
                                                                                <td>{order?.address}</td>
                                                                                <td>{order?.product?.price}</td>

                                                                            </tr>
                                                                        )
                                                                    })
                                                                }

                                                            </tbody>
                                                        </table>
                                                    ) : (
                                                            <h3>No orders available. Make an order first</h3>
                                                        )
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
            }



        </div >
    );
};

export default Order;