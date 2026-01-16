import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProfileCard } from './ProfileCard';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorators';
import { Country } from '@/entities/Country';
import AvatarImg from '@/shared/ui/Avatar/storybook.jpg'
import { Currency } from '@/entities/Currency';
const meta = {
    decorators: [RouterDecorator()],
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: {
            username: 'decomma',
            age: 23,
            country: Country.Russia,
            avatar: AvatarImg,
            city: 'Voronezh',
            currency: Currency.RUB,
            firstname: 'Имя',
            lastname: 'Фамилия',
        }
    },
};
export const isLoading: Story = {
    args: {
        isLoading: true
    },
};
export const withError: Story = {
    args: {
        error: 'true'
    },
};



