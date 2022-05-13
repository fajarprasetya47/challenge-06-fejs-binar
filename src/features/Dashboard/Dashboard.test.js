import '@testing-library/jest-dom'
import Dashboard from './Dashboard';
import {renderer} from 'react-test-renderer'


it("Test to match snapshot of component", () => {
    const subscribeFormTree = renderer?.create(<Dashboard/>).toJSON();
    expect(subscribeFormTree).toMatchSnapshot();
})