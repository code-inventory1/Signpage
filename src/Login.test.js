import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import Login from './Login';

const MockRouteLogin=()=>{
    return(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )
  }
describe('Login in page', () => {
test('renders login page link', () => {
  render(<MockRouteLogin/>);
  const inputElement = screen.getByPlaceholderText(/Email or Phone or Username/i);
  const buttonElement = screen.getByRole('button',{target:{value:"Log In"}});
  fireEvent.change(inputElement,{target:{value:"My Name"}});
  fireEvent.click(buttonElement)
  expect(inputElement.value).toBe("My Name");})
});