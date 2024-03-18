import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateDiscussions from '../CreateDiscussion/CreateDiscussion';
import { Provider } from 'react-redux';
import store from '../../store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { expect } from 'vitest';

describe('Create Discussions Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CreateDiscussions />} />
                </Routes>
                </BrowserRouter>
            </Provider>
        );
    });

    test('input fields are initially empty', ()=> {
        const userNameInput = screen.getByPlaceholderText('Latitude (optional)');
        const emailInput = screen.getByPlaceholderText('Longitude (optional)');
        const passwordInput = screen.getByPlaceholderText('Species (optional)');
        const confirmPasswordInput = screen.getByPlaceholderText('Description (required)');

        expect(userNameInput.value).toBe('');
        expect(emailInput.value).toBe('');
        expect(passwordInput.value).toBe('');
        expect(confirmPasswordInput.value).toBe('');
    });

    test('cancel and post buttons are rendered and clickable', () => {
        const cancelButton = screen.getByRole('button', {name: 'Cancel'});
        const postButton = screen.getByRole('button', {name: 'Post'});
        
        
        // Assert button is in the document and not disabled
        
        expect(cancelButton).toBeInTheDocument();
        expect(cancelButton).not.toBeDisabled();
        expect(postButton).toBeInTheDocument();
        expect(postButton).not.toBeDisabled();
    
        // Mock click event
        fireEvent.click(cancelButton);
    
    });
});