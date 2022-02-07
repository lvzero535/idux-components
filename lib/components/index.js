import { IxsButton } from '@ixsu/components/button';
import { IxsInput } from '@ixsu/components/input';
import { IxsSelect } from '@ixsu/components/select';

const components = [IxsButton, IxsInput, IxsSelect];
var index = (app) => {
    components.forEach(component => app.component(component.name, component));
};

export { index as default };
