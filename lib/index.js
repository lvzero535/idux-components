import { IsButton } from '@sdv/components/button';
import { IsInput } from '@sdv/components/input';
import { IsSelect } from '@sdv/components/select';

const components = [
    IsButton, IsInput, IsSelect
];
var index = (app) => {
    components.forEach((component) => app.component(component.name, component));
};

export { index as default };
