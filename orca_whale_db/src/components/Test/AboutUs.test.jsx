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
    test('renders the page and checks the heading', async () => {
        const aboutHeading = screen.getByRole('heading', {name: 'About Us' });
        const heading = screen.getByRole('heading', {name: 'Who are we? What is our mission?' });
        
        expect(aboutHeading.textContent).toBe('About Us')
        expect(heading.textContent).toBe('Who are we? What is our mission?')
    });
})