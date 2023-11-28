import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import filtersSlice from './../../slices/filtersSlice';
import { searchTextSelector } from './../../redux-toolkit/selectors';

function Navbar() {
    const searchText = useSelector(searchTextSelector)
    const dispatch = useDispatch()
    return (
        <div className="d-flex justify-content-between align-items-center border-bottom py-2">
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
            <div className="">
                <FaShoppingCart size={20} className="me-2" role="button" />
                <FaUser size={20} role="button" />
            </div>
        </div>
    )
}

export default Navbar;