import { render, screen, cleanup, fireEvent, queryByText } from '@testing-library/react'
import { Login } from "../Login";
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

test('should log email field input value', () => {
    render(<Router><Login /></Router>,);
    const todoElement = screen.getByTestId('todo-3');
    fireEvent.change(todoElement, { target: { value: 'user@gmail.com' } });
    console.log('value=' + todoElement.value)
})

