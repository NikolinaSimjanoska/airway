import { render, screen, cleanup, fireEvent, queryByText } from '@testing-library/react'
import { Register } from "../Register";
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

test('should check if button is enabled', async () => {
    render(<Router><Register /></Router>,);
    expect(screen.getByTestId('todo-9')).not.toHaveAttribute('disabled');
    expect(screen.getByTestId('todo-9')).toBeEnabled();
})