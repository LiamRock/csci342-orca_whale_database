import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Signup from '../Forms/Signup';
import { Provider } from 'react-redux';
import store from '../../store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { expect } from 'vitest';

describe('Signup Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Signup />} />
                </Routes>
                </BrowserRouter>
            </Provider>
        );
    });

    test('input fields are initially empty', ()=> {
        const userNameInput = screen.getByPlaceholderText('Username');
        const emailInput = screen.getByPlaceholderText('Email');
        const passwordInput = screen.getByPlaceholderText('Password');
        const confirmPasswordInput = screen.getByPlaceholderText('confirmPassword');

        expect(userNameInput.value).toBe('');
        expect(emailInput.value).toBe('');
        expect(passwordInput.value).toBe('');
        expect(confirmPasswordInput.value).toBe('');
    });

    test('registration button is rendered and clickable', () => {
        const button = screen.getByRole('button', { name: "Sign up" });
        
        // Assert button is in the document and not disabled
        expect(button).toBeInTheDocument();
        expect(button).not.toBeDisabled();
    
        // Mock click event
        fireEvent.click(button);
      });
});