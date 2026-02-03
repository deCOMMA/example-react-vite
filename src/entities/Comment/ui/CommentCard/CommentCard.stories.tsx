import type { Meta, StoryObj } from '@storybook/react-vite';
import { CommentCard } from './CommentCard';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorators';

const meta = {
    title: 'entities/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comment: {
            id: '1',
            text: 'коментарий',
            user: {
                id: '1',
                username: 'decomma',
            },
        },
    },
    decorators: [RouterDecorator()],
};
export const DarkLoading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [
        RouterDecorator({
            theme: 'dark',
        }),
    ],
};
