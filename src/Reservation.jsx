import React, { useState } from "react"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'; 

export const Reservation = (props) => {

    const [originD, setOriginD] = useState('');
    const [destination, setDestination] = useState('');
    //const [deperature, setDeperature] = useState('');
    //const [passengers, setPassengers] = useState('');
    const [date, setDate] = useState(new Date());
    const [passengers, setPassengers] = useState(0);

 
    //increase counter
    const increase = () => {
        setPassengers(count => count + 1);
    };
   
    //decrease counter
    const decrease = () => {
        setPassengers(count => count > 0 ? count - 1 : 0);
    };
   
    //reset counter 
    const reset = () =>{
        setPassengers(0)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(origin);
    }

    return (
        <div className="body">
        <div className="auth-form-container">
            <h2>Reservation</h2>
        <form className="reservation-form" onSubmit={handleSubmit}>
            <label htmlFor="originD">Origin</label>
            <input value={originD} name="originD" id="originD" placeholder="Type your starting point" />
            <label htmlFor="destination">Destination</label>
            
            <input data-testid="todo-6" value={destination} name="destination" id="destination" placeholder="Type your endpoint" />
            <label htmlFor="passengers">Passengers</label>
            <span data-testid="todo-5" className="counter__output">{passengers}</span>
            <div class = "buttons">
            <button data-testid="todo-8" className="control__btn" onClick={increase} >+</button>
            <button data-testid="todo-4" className="control__btn" onClick={decrease}>-</button>
            <button className="reset" onClick={reset}>Reset</button>
            </div>
            <br/>
            <div className="calendar-container">
            <Calendar onChange={setDate} value={date}/>
            </div>
            <p data-testid="todo-7" htmlFor="deperature">{date.toDateString()}</p>            
            <button type="submit">Search</button>
        </form>
    </div>
    </div>
    
    )
}