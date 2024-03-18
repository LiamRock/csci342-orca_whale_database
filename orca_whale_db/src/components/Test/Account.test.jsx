import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { expect } from 'vitest';
import Account from '../Account/Account'



describe('Account Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Account />} />
                </Routes>
                </BrowserRouter>
            </Provider>
        );
    });
    test('renders the page and checks the heading', async () => {
        const postHeading = screen.getByRole('heading', {name: 'Your Posts' });

        expect(postHeading.textContent).toBe('Your Posts')
    });
})


