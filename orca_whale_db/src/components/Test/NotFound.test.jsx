import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PageNotFound from '../NotFound/NotFoundPage';
import { Provider } from 'react-redux';
import store from '../../store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { expect } from 'vitest';

describe('Page not found component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageNotFound />} />
                </Routes>
                </BrowserRouter>
            </Provider>
        );
    });

    test('heading text is rendered', ()=> {
        const header = screen.getByRole('heading');

        expect(header.textContent).toBe('Page Not Found');
        
    });

    test('cancel and post buttons are rendered and clickable', () => {
        const home = screen.getByRole('link');

        
        
        // Assert button is in the document and not disabled
        
        expect(home).toBeInTheDocument();
        expect(home).not.toBeDisabled();
    
    
        // Mock click event
        fireEvent.click(home);
    
    });
});