import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { expect } from 'vitest';
import Whales from '../Whales/Whales'

describe('Whales Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Whales />
                </BrowserRouter>
            </Provider>
        );
    });




    test('Learn More links are rendered and clickable', () => {
        const Links = screen.getAllByRole('link', {name: 'Learn More'});
        
        Links.forEach(link => {
            expect(link).toBeInTheDocument();
            expect(link).not.toBeDisabled();
            
            fireEvent.click(link);
        });
        
      });
});

    
