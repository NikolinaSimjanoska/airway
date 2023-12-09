import { render, screen, cleanup, fireEvent, queryByText } from '@testing-library/react'
import { Home } from "../Home";
import { Reservation } from "../Reservation";
import { Login } from "../Login";
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/dom";

test('should render home header text', () => {
    render(<Router><Home /></Router>,);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toHaveTextContent('Maribor');
})

test('should render home button', () => {
    render(<Router><Home /></Router>,);
    const todoElement2 = screen.getByTestId('todo-2');
    expect(todoElement2).toBeInTheDocument();
    expect(todoElement2).toHaveTextContent('flights');
})

test('should check href for navbar link', () => {
    render(<Router><Home /></Router>,);
    expect(screen.getByText("Register")).toHaveAttribute('href', './Register');
})

test('should render reservation page when clicked', async () => {
    render(<Router><Home /></Router>,);
    render(<Router><Reservation /></Router>,);
    const button = screen.getByTestId('todo-2');
    userEvent.click(button);

    await waitFor(() => screen.getByText("Reservation"));
    expect(screen.getByText("Reservation")).toBeInTheDocument();
})


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

test('should check if start date is current date', async () => {
    render(<Router><Reservation /></Router>,);
    const date = screen.findByTestId('todo-7');
    const current = new Date();
    const dateNow = current.toDateString();
    expect((await date).textContent).toBe(dateNow);
})

test('should log email field input value', () => {
    render(<Router><Login /></Router>,);
    const todoElement = screen.getByTestId('todo-3');
    fireEvent.change(todoElement, { target: { value: 'user@gmail.com' } });
    console.log('value=' + todoElement.value)
})
