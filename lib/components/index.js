import { IsButton } from '@lvdavis/components/button';
import { IsInput } from '@lvdavis/components/input';
import { IsSelect } from '@lvdavis/components/select';

const components = [
    IsButton, IsInput, IsSelect
];
var index = (app) => {
    components.forEach((component) => app.component(component.name, component));
};

export { index as default };
