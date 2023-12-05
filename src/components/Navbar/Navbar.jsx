import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import filtersSlice from './../../slices/filtersSlice';
import { cartSelector, searchTextSelector } from './../../redux-toolkit/selectors';
import { Link } from "react-router-dom";

function Navbar() {
    const cart = useSelector(cartSelector)
    const searchText = useSelector(searchTextSelector)
    const dispatch = useDispatch()
    return (
        <div className="d-flex justify-content-between align-items-center border-bottom py-2 mt-2">
            <form className="w-50 d-flex align-items-center">
                <input
                    value={searchText}
                    type="search"
                    placeholder="Enter your search shoes"
                    className="form-control form-control-sm"
                    style={{paddingRight: '25px'}}
                    onInput={(e) => dispatch(filtersSlice.actions.setSearchText(e.target.value))}
                />
                <FaSearch size={20} style={{ marginLeft: '-25px', color: 'rgba(0,0,0,.2)' }} />
            </form>
            <div className="d-flex">
                {
                    cart.cartDetails.length ? (
                        <Link to={'/cart'} className="position-relative me-3">  
                        <FaShoppingCart size={20} className="me-2" role="button" />
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cart.cartDetails.length}
                        </span>
                        </Link>
                    ) : (
                        <div>
                            <FaShoppingCart size={20} className="me-2" />
                        </div>
                    )
                }              
                <FaUser size={20} role="button" />
            </div>
        </div>
    )
}

export default Navbar;