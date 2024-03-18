import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { expect } from 'vitest';
import PostPage from '../PostPage/PostPage';



describe('PostPage Component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PostPage />} />
                </Routes>
                </BrowserRouter>
            </Provider>
        );
    });
    test('renders the post page and checks heading', async () => {
        const bannerHeading = screen.getByRole('heading', {name: 'See what people have been posting!' });
        const sightings = screen.getByRole('heading', {name: 'Reported Sightings!'});
        
        expect(bannerHeading.textContent).toBe('See what people have been posting!');
        expect(sightings.textContent).toBe('Reported Sightings!');
        
    });

    test('reverse order button is rendered and clickable', () => {
        const button = screen.getByRole('button', { name: "Reverse Order" });
        
        // Assert button is in the document and not disabled
        expect(button).toBeInTheDocument();
        expect(button).not.toBeDisabled();
    
        // Mock click event
        fireEvent.click(button);
    });

})