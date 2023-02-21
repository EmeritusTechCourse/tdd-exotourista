import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Input } from './Input'

test('input renders text field by default', async () => {
    //Arrange
    render(<Input/>)
    //Act
    const input = await screen.findByTestId('text-input');
    const dateInput = screen.queryByTestId('date-input');
    //Assert
    expect(input).toBeDefined();
    expect(dateInput).toBeNull();
});

test('input renders date field when selected', async () => {
 //Arrange
 render(<Input type='date'/>)
 //Act
 const input = screen.queryByTestId('text-input');
 const dateInput = await screen.findByTestId('date-input');
 //Assert
 expect(input).toBeNull();
 expect(dateInput).toBeDefined();
});

test('onChange returns text value for text input', async () => {
    const callback = jest.fn((result) => {
        expect(typeof result === 'string').toBe(true);
    });
    render(<Input onChange={callback}/>)
    const inputString = 'hi there';
    const input = await screen.findByTestId('text-input');
    await userEvent.type(input, inputString);
    expect(callback).toHaveBeenCalledTimes(inputString.length);

});

test('onChange returns date value for date input', async () => {
    const callback = (result) => {
        expect(typeof result === 'object').toBe(true);
    };
    render(<Input type='date' onChange={callback}/>)
    const inputDate = (new Date()).toISOString();
    const input = await screen.findByTestId('date-input');
    await userEvent.paste(input, inputDate);
});