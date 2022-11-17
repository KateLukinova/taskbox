import MLink from './Link.vue';

export default {
    component: MLink,
    argTypes: {
        href: '#'
    },
};

const Template = (args) => ({
    components: { MLink },
    setup() {
        return { args };
    },
    template: '<MLink v-bind="args" />',
});

export const Dark = Template.bind({});
Dark.args = {
    label: 'ссылка',
    href: '#'
};

export const Uppercase = Template.bind({});
Uppercase.args = {
    label: 'ссылка',
    href: '#'
};

export const Gold = Template.bind({});
Gold.args = {
    label: 'ссылка',
    href: '#'
};
