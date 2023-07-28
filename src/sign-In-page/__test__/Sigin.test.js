import { fireEvent, screen, waitFor } from '@testing-library/react';
import Signin from '../Signin';
import { renderWithProviders } from '../../utils/utils';
import { Handlers, mockData } from '../../mocks/handlers';
import userEvent from '@testing-library/user-event';
import { server } from '../../mocks/server';


describe('Signin page', () => {
test('Signin page rendering the header', async() => {
  renderWithProviders( <Signin/>);
  const headerElement = await screen.findByText(/User Details/i);
  expect(headerElement).toBeInTheDocument();});
test('Signin page rendering the data', async() => {
  // server.use(Handlers[0])
  renderWithProviders( <Signin/>);
  const tableElement = await screen.queryByTestId('item-element');
  expect(tableElement).toBeInTheDocument();

})
test('Signin page rendering the data', async() => {
  // server.use(Handlers[0]
  renderWithProviders( <Signin/>);
  // const rowElement = await waitFor(()=> screen.queryAllByTestId('checkName'),{timeout:3000});
  mockData.forEach((e, i) => {
    waitFor(()=> expect(queryAllByTestId('checkName')[i]).toHaveTextContent(mockData[0].first_name));
  });
  // expect(rowElement).toHaveTextContent(mockData[0].first_name);
})
});