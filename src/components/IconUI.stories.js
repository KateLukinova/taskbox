import Icon from './IconUI.vue';

export default {
    component: Icon,
    argTypes: {
        fillColor: { control: 'color' },
        strokeColor: { control: 'color' },
    },
};

const Template = (args) => ({
    components: { Icon },
    setup() {
        return { args };
    },
    template: '<Icon v-bind="args" />',
});

export const Reload = Template.bind({});
Reload.args = {
    name: 'reload',
    strokeColor: 'black'
};

export const Arrow = Template.bind({});
Arrow.args = {
    name: 'arrow',
    strokeColor: 'red'
};
