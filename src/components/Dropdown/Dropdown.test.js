import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Dropdown } from './Dropdown';

test('dropdown renders list correctly', async () => {
    const dropdownData = [
        {
            name: 'Karachi', 
            value: 'karachi'
        },
        {
            name: 'Islamabad',
            value: 'islamabad'
        },
        {
            name: 'Sukkur',
            value: 'sukkur'
        }
    ];
    render(<Dropdown items={dropdownData}/>);
    for(const item of dropdownData){
        const option = await screen.findByTestId(item.value)
        expect(option).toBeDefined();
    }
});


test('callback fires with correct option', async () => {
    // const dropdownData = [
    //     {
    //         name: 'Karachi', 
    //         value: 'karachi'
    //     },
    //     {
    //         name: 'Islamabad',
    //         value: 'islamabad'
    //     },
    //     {
    //         name: 'Sukkur',
    //         value: 'sukkur'
    //     }
    // ];
    // const callback = jest.fn((result) => {
    //     expect(result.name).toBe('Islamabad');
    //     expect(result.value).toBe('islamabad');
    // });
    // render(<Dropdown onSelect={callback} items={dropdownData}/>);
    // const selector = await screen.findByRole('listbox');
    // userEvent.change(selector, {target: 'islamabad'});
    // expect(callback).toHaveBeenCalled();
});