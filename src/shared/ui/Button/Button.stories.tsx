import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';
import { StyleDecorators } from '@/shared/config/storybook/decorators/StyleDecorators';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    decorators: [StyleDecorators()],
    title: 'shared/Button',
    component: Button,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        theme: 'def',
        children: 'Button',
    },
};

export const Clear: Story = {
    args: {
        theme: 'clear',
        children: 'Button',
    },
};
export const ClearInv: Story = {
    args: {
        theme: 'clearInv',
        children: 'Button',
    },
};
export const Background: Story = {
    args: {
        theme: 'background',
        children: 'Button',
    },
};
export const BackgroundInv: Story = {
    args: {
        theme: 'backgroundInv',
        children: 'Button',
    },
};
export const Small: Story = {
    args: {
        children: 'Button',
        size: 'small',
    },
};
export const Medium: Story = {
    args: {
        children: 'Button',
        size: 'medium',
    },
};
export const Large: Story = {
    args: {
        children: 'Button',
        size: 'large',
    },
};
export const xl: Story = {
    args: {
        children: 'Button',
        size: 'xl',
    },
};
export const sqareSizeS: Story = {
    args: {
        children: '?',
        size: 'small',
        sqare: true,
    },
};
export const sqareSizeM: Story = {
    args: {
        children: '?',
        size: 'medium',
        sqare: true,
    },
};
export const sqareSizeL: Story = {
    args: {
        children: '?',
        size: 'large',
        sqare: true,
    },
};
export const sqareSizeXLBackgroundInv: Story = {
    args: {
        children: '?',
        size: 'xl',
        sqare: true,
        theme: 'backgroundInv',
    },
};
