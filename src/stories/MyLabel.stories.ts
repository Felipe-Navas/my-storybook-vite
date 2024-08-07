import { Meta, StoryObj } from '@storybook/react'
import { MyLabel } from '../components/MyLabel'

const meta = {
  title: 'UI/Labels/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'inline-radio',
    },
  },
} satisfies Meta<typeof MyLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: 'Basic Label',
  },
}

export const AllCaps: Story = {
  args: {
    label: 'All Caps Label',
    allCaps: true,
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Label',
    color: 'text-secondary',
  },
}

export const CustomColor: Story = {
  args: {
    label: 'Custom Color Label',
    fontColor: '#146b86',
  },
}

export const CustomBackgroundColor: Story = {
  args: {
    label: 'Custom Background Color Label',
    fontColor: '#FFF',
    backgroundColor: '#000000',
  },
}
