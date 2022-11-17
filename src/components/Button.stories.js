import MButton from './Button.vue';

export default {
    component: MButton,
    argTypes: {
        backgroundColor: { control: 'color' },
        size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
        onClick: {},
    },
};

const Template = (args) => ({
    components: { MButton },
    setup() {
        return { args };
    },
    template: '<MButton v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Кнопка',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Кнопка',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Кнопка',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Кнопка',
};

export const Dark = Template.bind({});
Dark.args = {
    size: 'large',
    label: 'Кнопка',
};

