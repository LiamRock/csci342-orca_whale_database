import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../Forms/Login';
import { Provider } from 'react-redux';
import store from '../../store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { expect } from 'vitest';

describe('Login Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
                </BrowserRouter>
            </Provider>
        );
    });

    test('input fields are initially empty', ()=> {
        const emailInput = screen.getByPlaceholderText('Email');
        const passwordInput = screen.getByPlaceholderText('Password');

        expect(emailInput.value).toBe('');
        expect(passwordInput.value).toBe('');
    });

    test('Login button is rendered and clickable', () => {
        const button = screen.getByRole('button', { name: "Login" });
        
        // Assert button is in the document and not disabled
        expect(button).toBeInTheDocument();
        expect(button).not.toBeDisabled();
    
        // Mock click event
        fireEvent.click(button);
      });
});