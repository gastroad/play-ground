import { ComponentStory } from '@storybook/react';
import Hello from './Hello';

export default {
    component: Hello,
    title: 'Hello',
};


const Template: ComponentStory<typeof Hello> = (args) => <Hello {...args} />;


export const Default = Template.bind({});
Default.args = {
    name: "",
};
export const HasValue = Template.bind({});
Default.args = {
    name: "jimmy",
};