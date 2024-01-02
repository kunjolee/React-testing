import { render, screen } from '@testing-library/react';
import { GifItem } from '../../components/GifItem';

describe('Tests on <GifItem/>', () => {
    const url = 'https://sample.com/onepunch.gif';
    const title = 'onepunch';
    it('should match the snapshot', () => {
        const { container } = render(<GifItem title='My title' url='My url' />);
        expect(container).toMatchSnapshot();
    });

    it('should show the image with the correct url and alt', () => {
        render(<GifItem title={title} url={url} />);
        const { src, alt } = screen.getByRole('img');
        // screen.getByRole('img').src
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    it('should show the title in the component', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});
