import type { Meta, StoryObj } from '@storybook/react-vite';
import AddCommentForm from './AddCommentForm';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorators';

const meta = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    tags: ['autodocs'],
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        onSendComment: () => {
        }
    },
    decorators: [RouterDecorator()],
};
export const Dark: Story = {
    args: {
        onSendComment() {
        },
    },
    decorators: [RouterDecorator({ theme: 'dark' })],
};
