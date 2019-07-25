import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <Header/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2">
                    <Navbar/>
                </div>

                <div className="col-md-10">
                    <Profile/>
                </div>
            </div>
        </div>
    );
}

export default App;
