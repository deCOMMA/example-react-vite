import type { Meta, StoryObj } from '@storybook/react-vite';
import AtriclesPage from './AtriclesPage';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorators';


const meta = {
    decorators: [RouterDecorator()],
    title: 'page/AtriclesPage',
    component: AtriclesPage,
    tags: ['autodocs'],
} satisfies Meta<typeof AtriclesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
    decorators: RouterDecorator({
        theme: 'dark'
    })
};