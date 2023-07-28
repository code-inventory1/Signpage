import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';

const MockRouteApp=()=>{
  return(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}
describe('App', () => {
test('renders login page link', () => {
  render(<MockRouteApp />);
  const linkElement = screen.getByText(/Log in to your account/i);
  expect(linkElement).toBeInTheDocument();})
});