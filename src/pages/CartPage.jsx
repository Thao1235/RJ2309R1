import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../layouts/MainLayout";
import MainLayout from '../layouts/MainLayout';

function CartPage() {
    const dispatch = useDispatch()
    const cart = useSelector(cartSelector)
    const { cartinfo, cartDetails} = cart
    return(
        <MainLayout>
            <div className="container mt-1">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="py-2">Cart Details</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <table className="table cart-table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th className="text-end">Price</th>
                                    <th className="text-center">Quantity</th>
                                    <th className="text-end">Total</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default CartPage;