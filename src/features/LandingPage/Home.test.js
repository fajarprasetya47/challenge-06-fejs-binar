import '@testing-library/jest-dom'
import Home from './Home'
import {renderer} from 'react-test-renderer'


it("Test to match snapshot of component", () => {
    const subscribeFormTree = renderer?.create(<Home/>).toJSON();
    expect(subscribeFormTree).toMatchSnapshot();
})