import React from 'react';
import './Admin.css';

import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import AddBook from './AddBook/AddBook';
import ManageBook from './ManageBook/ManageBook';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Admin = () => {
    return (
        <div>
            <Switch>
                <PrivateRoute path="/admin/addbook">
                    <AddBook />
                </PrivateRoute>

                <PrivateRoute path="/admin/managebook">
                    <ManageBook />
                </PrivateRoute>

                <PrivateRoute exact path="/admin">
                    <ManageBook />
                </PrivateRoute>

            </Switch>

        </div>
    );
};

export default Admin;