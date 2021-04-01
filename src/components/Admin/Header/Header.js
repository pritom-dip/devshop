import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div style={{ backgroundColor: '#19103F' }} className="col-md-3 col-sm-12">

            <h3 className="mb-4 mt-4 admin-title">
                <Link to="/">Dev Shop</Link>
            </h3>

            <ul className="list-group">

                <Link to="/admin/managebook">
                    <li className="list-group-item">
                        <span><FontAwesomeIcon icon={faThLarge} /></span>
                        <span>Manage Books</span>
                    </li>
                </Link>

                <Link to="/admin/addbook">
                    <li className="list-group-item">
                        <span><FontAwesomeIcon icon={faPlus} /></span>
                        <span>Add Book</span>
                    </li>
                </Link>

            </ul>
        </div>
    );
};

export default Header;