import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { expect } from 'vitest';
import HomePage from '../HomePage/main/HomePage';


describe('SpeciesProfile Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
                </BrowserRouter>
            </Provider>
        );
    });
    test('renders the registration form and allows typing', async () => {
        // Test content...
    });
})