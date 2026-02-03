import type { Meta, StoryObj } from '@storybook/react-vite';
import { CommentList } from './CommentList';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorators';

const meta = {
    title: 'entities/CommentList',
    component: CommentList,
    tags: ['autodocs'],
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'коментарий',
                user: {
                    id: '1',
                    username: 'decomma',
                },
            },
            {
                id: '2',
                text: 'коментарий2',
                user: {
                    id: '2',
                    username: 'anril',
                },
            },
        ],
    },
    decorators: [RouterDecorator()],
};
export const Loading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [RouterDecorator()],
};
export const Dark: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'коментарий',
                user: {
                    id: '1',
                    username: 'decomma',
                },
            },
            {
                id: '2',
                text: 'коментарий2',
                user: {
                    id: '2',
                    username: 'anril',
                },
            },
        ],
    },
    decorators: [
        RouterDecorator({
            theme: 'dark',
        }),
    ],
};
