import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Tests on <FirstApp />', () => {
    const title = 'Hi, im kunjo';
    const subtitle = 'im subtitle';
    it('should match the snapshot', () => {
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });

    it('should show "Hi, im kunjo" message', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
        // al ejecutarse despues de el render, screen es el componente renderizado
        // screen.debug();
    });

    it('should show the title in h1', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(title);
    });

    it('should show the subtitle sent by props', () => {
        render(<FirstApp title={title} subTitle={subtitle} />);
        expect(screen.getAllByText(subtitle).length).toBe(2);
    });
});
