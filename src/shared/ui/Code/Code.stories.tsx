import type { Meta, StoryObj } from '@storybook/react-vite';
import { Code } from './Code';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorators';

const meta = {
    decorators: [RouterDecorator()],
    title: 'shared/Code',
    component: Code,
    tags: ['autodocs'],
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: `consile.log('Hellow world!')`
    },
}



