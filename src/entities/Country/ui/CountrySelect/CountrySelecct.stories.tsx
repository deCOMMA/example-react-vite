import type { Meta, StoryObj } from '@storybook/react-vite';
import { CountrySelect } from './CountrySelect';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorators';
import { Country } from '../../model/types/country';

const meta = {
    decorators: [RouterDecorator()],
    title: 'entities/CountrySelect',
    component: CountrySelect,
    tags: ['autodocs'],
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        value: Country.Belarus,
    },
};
