import { render, screen, cleanup, fireEvent, queryByText } from '@testing-library/react'
import { Reservation } from "../Reservation";
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import userEvent from "@testing-library/user-event";

test('should check if counter decreases till 0', async () => {
    render(<Router><Reservation /></Router>,);
    const basicCounter = screen.findByTestId('todo-5');
    const decreaseCount = screen.getByTestId('todo-4');
    userEvent.click(decreaseCount);
    expect((await basicCounter)).toHaveTextContent("0");
})

test('should check if counter increases', async () => {
    render(<Router><Reservation /></Router>,);
    const basicCounter = screen.findByTestId('todo-5');
    const increaseCount = screen.getByTestId('todo-8');
    userEvent.click(increaseCount);
    userEvent.click(increaseCount);
    userEvent.click(increaseCount);
    userEvent.click(increaseCount);
    expect((await basicCounter)).toHaveTextContent("4");
})

test('should check placeholder text', async () => {
    render(<Router><Reservation /></Router>,);
    const inputField = screen.findByTestId('todo-6');
    expect((await inputField).getAttribute('placeholder')).toBe("Type your endpoint");
})

test('should check if start date is current date', async () => {
    render(<Router><Reservation /></Router>,);
    const date = screen.findByTestId('todo-7');
    const current = new Date();
    const dateNow = current.toDateString();
    expect((await date).textContent).toBe(dateNow);
})