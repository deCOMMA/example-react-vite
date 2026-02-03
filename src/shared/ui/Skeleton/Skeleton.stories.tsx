import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './Skeleton';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorators';

const meta = {
    decorators: [RouterDecorator()],
    title: 'shared/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        width: '100%',
        height: 100,
    },
};
export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
};
export const CircleBlack: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
    decorators: RouterDecorator({ theme: 'black' }),
};
export const CircleNormal: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
    decorators: RouterDecorator({ theme: 'normal' }),
};
