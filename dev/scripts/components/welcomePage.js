import React from 'react';
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';
import AddNewUser from './addNewUser.js';
import LogIn from './logIn.js';
import PackingList from './packingList.js';
import AddTrips from './addTrips.js';
import Nav from './nav.js';



//Welcome /Home Page
class WelcomePage extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <header>
                    <h1>Welcome to Our Unnamed Travel App</h1>
                    <Nav />
                    <AddNewUser />
                    <LogIn />
                    <AddTrips />
                </header>
            </div>
        )
    }
}




export default WelcomePage