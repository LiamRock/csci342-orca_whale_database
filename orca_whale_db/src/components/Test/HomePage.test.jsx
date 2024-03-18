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
    test('renders the home page checks headings', async () => {
        const bannerHeading = screen.getByRole('heading', {name: 'Dive into the diverse world of whales with us! Explore a mesmerizing array of magnificent species including Orca, Grey Whale, and more!' });
        
        
        expect(bannerHeading.textContent).toBe('Dive into the diverse world of whales with us! Explore a mesmerizing array of magnificent species including Orca, Grey Whale, and more!')
        
    });

    test('see posts button is rendered and clickable', () => {
        const button = screen.getByRole('button', { name: "See Posts" });
        
        // Assert button is in the document and not disabled
        expect(button).toBeInTheDocument();
        expect(button).not.toBeDisabled();
    
        // Mock click event
        fireEvent.click(button);
    });

    test('footer links are rendered and clickable', () => {
        const Links = screen.getAllByRole('link');
        
        // Assert button is in the document and not disabled
        Links.forEach(link => {
            expect(link).toBeInTheDocument();
            expect(link).not.toBeDisabled();
            fireEvent.click(link);
        })
        
      });
})