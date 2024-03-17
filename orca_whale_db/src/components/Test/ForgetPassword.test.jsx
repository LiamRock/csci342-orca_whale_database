import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ForgetPassword from '../Forms/ForgetPassword';
import { Provider } from 'react-redux';
import store from '../../store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { expect } from 'vitest';

describe('ForgetPassword Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ForgetPassword />} />
                </Routes>
                </BrowserRouter>
            </Provider>
        );
    });

    test('input fields are initially empty', ()=> {
        const emailInput = screen.getByPlaceholderText('Email');

        expect(emailInput.value).toBe('');
    
    });

    test('registration button is rendered and clickable', () => {
        const button = screen.getByRole('button', { name: "Submit" });
        
        // Assert button is in the document and not disabled
        expect(button).toBeInTheDocument();
        expect(button).not.toBeDisabled();
    
        // Mock click event
        fireEvent.click(button);
      });
});