import type { Meta, StoryObj } from '@storybook/react-vite';
import { CurrencySelect } from './CurrencySelect';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorators';

const meta = {
    decorators: [RouterDecorator()],
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    tags: ['autodocs'],
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
