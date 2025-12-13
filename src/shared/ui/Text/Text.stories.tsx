import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './Text';
import { ThemeDecorators } from '@/shared/config/storybook/decorators/ThemeDecorators';

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error: Story = {
    args: {
        text: 'Text text text',
        title: 'Title title',
        thema: 'error'
    },
    decorators: ThemeDecorators({ theme: 'dark' })
};

export const TextTitleDark: Story = {
    args: {
        text: 'Text text text',
        title: 'Title title',
    },
    decorators: ThemeDecorators({ theme: 'dark' })
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title title',
    },
    decorators: ThemeDecorators({ theme: 'dark' })

};
export const OnlyTextDark: Story = {
    args: {
        text: 'Text text text',
    },
    decorators: ThemeDecorators({ theme: 'dark' })
};
export const TextTitleNormal: Story = {
    args: {
        text: 'Text text text',
        title: 'Title title',
    },
    decorators: ThemeDecorators({ theme: 'normal' })
};
export const OnlyTitleNormal: Story = {
    args: {
        title: 'Title title',
    },
    decorators: ThemeDecorators({ theme: 'normal' })

};
export const OnlyTextNormal: Story = {
    args: {
        text: 'Text text text',
    },
    decorators: ThemeDecorators({ theme: 'normal' })
};
