import React, { useState } from "react";
import { Router, useNavigate } from "react-router-dom";
import { Reservation } from "./Reservation";

export const Home = (props) => {
    const navRef = useState();
    const navigate = useNavigate();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <div>
            <header>
                <h3 data-testid="todo-1">Maribor Airways</h3>
                <nav ref={navRef}>
                    <a href="./Login">Log in</a>
                    <a href="./Register">Register</a>
                </nav>
            </header>
            <div className="lala">
                <div className="container">
                    <div>
                            <button data-testid="todo-2" className="button-flights" onClick={() => navigate("./Reservation")}>Find flights</button>
                    </div>
                </div>
            </div>
        </div>
    )
}