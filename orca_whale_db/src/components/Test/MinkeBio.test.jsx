import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MinkeBio from '../Whales/WhaleBios/MinkeBio/MinkeBio';
import { Provider } from 'react-redux';
import store from '../../store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { expect } from 'vitest';

describe('MinkeBio Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MinkeBio />} />
                </Routes>
                </BrowserRouter>
            </Provider>
        );
    });

    test('headings are rendered and display the correct text', ()=> {
        const heading = screen.getByRole('heading',  { name : 'Common Minke Whales'});
        const facts = screen.getAllByRole('heading', {name: 'Did You Know?'});

        expect(heading.textContent).toBe('Common Minke Whales');
        facts.forEach(fact => {
            expect(fact.textContent).toBe('Did You Know?');
        })
    });

    test('more information is rendered and clickable', () => {
        const link = screen.getByRole('link')

        expect(link).toBeInTheDocument();
        expect(link).not.toBeDisabled();
        
        fireEvent.click(link);
    })


});