import type { Meta, StoryObj } from '@storybook/react-vite';
import ProfilePage from './ProfilePage';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorators';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/ui/Avatar/storybook.jpg'
const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
    },
    decorators: [RouterDecorator({
        state: {
            profile: {
                form: {
                    username: 'decomma',
                    age: 23,
                    country: Country.Russia,
                    avatar: AvatarImg,
                    city: 'Voronezh',
                    currency: Currency.RUB,
                    firstname: 'Имя',
                    lastname: 'Фамилия',
                }
            }
        }
    })],
};
export const Dark: Story = {
    args: {},
    decorators: [RouterDecorator({
        theme: 'dark',
        state: {
            profile: {
                form: {
                    username: 'decomma',
                    age: 23,
                    country: Country.Russia,
                    avatar: AvatarImg,
                    city: 'Voronezh',
                    currency: Currency.RUB,
                    firstname: 'Имя',
                    lastname: 'Фамилия',
                }
            }
        }
    })],
};
