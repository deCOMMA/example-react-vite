import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorators';

const meta = {
    decorators: [RouterDecorator()],
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Label',
        options: [
            { content: 'Москва', value: '123' },
            { content: 'Воронеж', value: '234' },
        ],
    },
};
