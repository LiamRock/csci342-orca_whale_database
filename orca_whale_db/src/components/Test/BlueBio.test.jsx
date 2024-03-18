import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BlueBio from '../Whales/WhaleBios/BlueBio/BlueBio';
import { Provider } from 'react-redux';
import store from '../../store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { expect } from 'vitest';

describe('BlueBio Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BlueBio />} />
                </Routes>
                </BrowserRouter>
            </Provider>
        );
    });

    test('headings are rendered and display the correct text', ()=> {
        const heading = screen.getByRole('heading',  { name : 'Blue Whales'});
        const facts = screen.getAllByRole('heading', {name: 'Did You Know?'});

        expect(heading.textContent).toBe('Blue Whales');
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