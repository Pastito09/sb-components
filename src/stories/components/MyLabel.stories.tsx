import type { Meta, StoryObj } from '@storybook/react';

import { MyLabel } from "../../components/MyLabel";

const meta = {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'select' },
        fontColor: { control: 'color'} 
    }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Basic: Story = {
    args: {
        label: 'Pastito.',
        size: 'normal',
        allCaps: false, 
    }
}
export const AllCaps: Story = {
    args: {
        size: 'normal',
        allCaps: true
    }
}
export const Secondary: Story = {
    args: {
        size: 'normal',
        color: 'secondary'
    }
}
export const Tertiary: Story = {
    args: {
        size: 'normal',
        color: 'tertiary'
    }
};
export const CustomFontColor: Story = {
    args: {
        size: 'h1',
        fontColor: "#5517ac"
    }
}
export const CustomBackgroundColor: Story = {
    args: {
        size: 'h1',
        fontColor: 'white',
        backgroundColor: 'black'
    }
}