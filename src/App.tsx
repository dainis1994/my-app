import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div>
            <Header/>

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <Navbar/>
                    </div>

                    <div className="col-lg-9 col-md-8">
                        <Profile/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
