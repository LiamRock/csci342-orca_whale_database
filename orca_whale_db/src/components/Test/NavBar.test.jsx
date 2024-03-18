import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { expect } from 'vitest';
import NavBar from '../HomePage/NavBar/NavBar'


describe('SpeciesProfile Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <NavBar />
                </BrowserRouter>
            </Provider>
        );
    });


    test('nav bar links are rendered and clickable', () => {
        const Links = screen.getAllByRole('link');

        Links.forEach(link => {
            expect(link).toBeInTheDocument();
            expect(link).not.toBeDisabled();
            
            fireEvent.click(link);
        });
        
        
        
      });
});