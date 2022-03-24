import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from '../components/Testimonials/Pagination';

describe('Pagination Component', () => {
    it('rendered Pagination component', () => {
        render(
            <Pagination 
                testimonialData={{
                    "pagination": {
                        "current_page": 1,
                        "total_count": 2011,
                        "total_pages": 101
                    }
                }}
                currentPage={1}
        />)
        const component = screen.getByTestId('pagination');
        expect(component).toBeTruthy();
    })

    it('rendered next button', () => {
        render(
            <Pagination 
                testimonialData={{
                    "pagination": {
                        "current_page": 1,
                        "total_count": 2011,
                        "total_pages": 101
                    }
                }}
                currentPage={1}
        />)
        const next = screen.getByTestId('next_button');
        expect(next).toBeTruthy();
    })

    it('next button clicked', () => {
        render(
            <Pagination 
                testimonialData={{
                    "pagination": {
                        "current_page": 1,
                        "total_count": 2011,
                        "total_pages": 101
                    }
                }}
                currentPage={1}
        />)
        const next = screen.getByTestId('next_button');
        fireEvent.click(next, {target: {value: 1}});
        expect(next).toBeTruthy();
    })

    it('rendered prev button', () => {
        render(
            <Pagination 
                testimonialData={{
                    "pagination": {
                        "current_page": 1,
                        "total_count": 2011,
                        "total_pages": 101
                    }
                }}
                currentPage={1}
        />)
        const prev = screen.getByTestId('prev_button');
        expect(prev).toBeTruthy();
    })
});