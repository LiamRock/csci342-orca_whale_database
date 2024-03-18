import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { expect } from 'vitest';
import OrcaBio from '../Whales/WhaleBios/OrcaBio/OrcaBio';
import ResidentBio from '../Whales/WhaleBios/OrcaBio/ResidentBio/ResidentBio'
import TransientBio from '../Whales/WhaleBios/OrcaBio/TransientBio/TransientBio'
import OffshoreBio from '../Whales/WhaleBios/OrcaBio/OffshoreBio/OffshoreBio'

describe('OrcaBio Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<OrcaBio />} />
                </Routes>
                </BrowserRouter>
            </Provider>
        );
    });

    test('headings are rendered and display the correct text', ()=> {
        const heading = screen.getByRole('heading',  { name : 'Orca Whales'});
        const facts = screen.getAllByRole('heading', {name: 'Did You Know?'});

        expect(heading.textContent).toBe('Orca Whales');
        facts.forEach(fact => {
            expect(fact.textContent).toBe('Did You Know?');
        })
    });

    test('links are rendered and clickable', () => {
        const link = screen.getByRole('link', {name: 'More Information!'});
        const donate = screen.getByRole('link', {name: 'Donate'});

        expect(link).toBeInTheDocument();
        expect(link).not.toBeDisabled();
        expect(donate).toBeInTheDocument();
        expect(donate).not.toBeDisabled();
        
        fireEvent.click(link);
        fireEvent.click(donate);
    })
});

describe('ResidentBio Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ResidentBio />} />
                </Routes>
                </BrowserRouter>
            </Provider>
        );
    });

    test('headings are rendered and display the correct text', ()=> {
        const heading = screen.getByRole('heading',  { name : 'Southern Resident Orcas'});

        expect(heading.textContent).toBe('Southern Resident Orcas');

    });

    test('links are rendered and clickable', () => {
        const link = screen.getByRole('link', {name: 'More Information!'});


        expect(link).toBeInTheDocument();
        expect(link).not.toBeDisabled();
        
        fireEvent.click(link);
    })
});

describe('TransientBio Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TransientBio />} />
                </Routes>
                </BrowserRouter>
            </Provider>
        );
    });

    test('headings are rendered and display the correct text', ()=> {
        const heading = screen.getByRole('heading',  { name : 'Transient Orcas'});

        expect(heading.textContent).toBe('Transient Orcas');

    });

    test('links are rendered and clickable', () => {
        const link = screen.getByRole('link', {name: 'More Information!'});


        expect(link).toBeInTheDocument();
        expect(link).not.toBeDisabled();
        
        fireEvent.click(link);
    })
});

describe('OffshoreBio Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<OffshoreBio />} />
                </Routes>
                </BrowserRouter>
            </Provider>
        );
    });

    test('headings are rendered and display the correct text', ()=> {
        const heading = screen.getByRole('heading',  { name : 'Offshore Orcas'});

        expect(heading.textContent).toBe('Offshore Orcas');

    });

    test('links are rendered and clickable', () => {
        const link = screen.getByRole('link', {name: 'More Information!'});
        

        expect(link).toBeInTheDocument();
        expect(link).not.toBeDisabled();
        
        fireEvent.click(link);
    })
});