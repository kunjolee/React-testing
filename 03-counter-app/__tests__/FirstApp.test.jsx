import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Tests on <FirstApp />', () => {
    it('should match the snapshot', () => {
        const { container } = render(<FirstApp title='Hi, im kunjo' />);
        expect(container).toMatchSnapshot();
    });

    it('should have the title in h1', () => {
        const title = 'Hi, im kunjo';
        const { container, getByText, getByTestId } = render(
            <FirstApp title={title} />
        );
        expect(getByText(title)).toBeTruthy();
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toBe(title);
        expect(getByTestId('test-title').innerHTML).toContain(title);
    });

    it('should show the subtitle sent by props', () => {
        const title = 'Hi, im kunjo';
        const subTitle = 'Im a subtitle';
        const { getAllByText } = render(
            <FirstApp title={title} subTitle={subTitle} />
        );
        expect(getAllByText(subTitle).length).toBe(2);
    });
});
