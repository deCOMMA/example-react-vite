import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorators';
import AvatarImg from './storybook.jpg';
const meta = {
    decorators: [RouterDecorator()],
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};
export const Small: Story = {
    args: {
        size: 50,
        src: AvatarImg,
    },
};
