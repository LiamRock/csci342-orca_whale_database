import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { expect } from 'vitest';
import AboutUs from '../AboutUs/AboutUs'


describe('SpeciesProfile Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AboutUs />} />
                </Routes>
                </BrowserRouter>
            </Provider>
        );
    });
    test('renders the registration form and allows typing', async () => {
        // Test content...
    });
})