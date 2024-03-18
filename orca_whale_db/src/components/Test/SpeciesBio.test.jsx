import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { expect } from 'vitest';
import SpeciesProfile from '../Whales/WhaleGroup/SpeciesProfile';

describe('SpeciesProfile Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SpeciesProfile />} />
                </Routes>
                </BrowserRouter>
            </Provider>
        );
    });


    test('Learn More links are rendered and clickable', () => {
        const Links = screen.getAllByRole('link', { class: "reactive-button" });
        
        // Assert button is in the document and not disabled
        Links.forEach(link => {
            expect(link).toBeInTheDocument();
            expect(link).not.toBeDisabled();
            fireEvent.click(link);
        })
        
      });
});