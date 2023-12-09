import { render, screen, cleanup, fireEvent, queryByText } from '@testing-library/react'
import { Home } from "../Home";
import { Reservation } from "../Reservation";
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

