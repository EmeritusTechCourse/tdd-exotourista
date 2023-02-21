import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {Button} from './Button';

test('button should use primary by default', async () => {
  // ARRANGE
  render(<Button>Test button</Button>)
  //ACT
  const button = await screen.findByText('Test button');
  //ASSERT
  expect(button).toHaveClass('primary');

});

test('button should use show danger state', async () => {
    // ARRANGE
    render(<Button type='danger'>Danger button</Button>)
    //ACT
    const button = await screen.findByText('Danger button');
    //ASSERT
    expect(button).toHaveClass('danger');
  
  });

  test('button should trigger callback on click', (done) => {
    const callback = (event) => {
        //ASSERT
        done();
    };
    // ARRANGE
    render(<Button onClick={callback}>Event button</Button>) 
    //ACT
    screen.findByText('Event button').then(button => {
      userEvent.click(button);
    })
   
  });

  test('button uses a link when a href is provided', async () => {
    // ARRANGE
    render(<Button href="/example">Link button</Button>)
    //ACT
    const link = await screen.findByRole('link');
    expect(link).toBeDefined();
  });