import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import Register from './Register';
import {BrowserRouter} from 'react-router-dom'
import {renderer} from 'react-test-renderer'

it("should be display text Create new account", () => {
    const initialState = {};
    const mockConfigStore = configureStore();
    
    const mockStore = mockConfigStore(initialState);

    render(
        <Provider store={mockStore}>
            <BrowserRouter>
                <Register/>
            </BrowserRouter>
        </Provider>
    );
    const titlePage = screen.getByText("Create New Account");
    expect(titlePage).toBeInTheDocument();
})
it("Test to match snapshot of component", () => {
    const subscribeFormTree = renderer?.create(<Register/>).toJSON();
    expect(subscribeFormTree).toMatchSnapshot();
})