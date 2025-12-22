import type { Meta, StoryObj } from '@storybook/react-vite';
import ProfilePage from './ProfilePage';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorators';
const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
    decorators: [RouterDecorator()],
};
export const Dark: Story = {
    args: {},
    decorators: [RouterDecorator({ theme: 'dark' })],
};
