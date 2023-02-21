import { useCallback } from "react"


export const Dropdown = ({
    items,
    onSelect
}) => {
    const handleSelect = useCallback((event) => {
        console.log(event);
        onSelect(event);
    }, [onSelect]);

    return (<select role="listbox" onSelect={handleSelect}>
        {items.map(item => <option key={item.value} data-testid={item.value} value={item.value}>{item.name}</option>)}
    </select>)
}