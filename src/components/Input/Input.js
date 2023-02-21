import { useCallback } from "react"

export const Input = ({
    type,
    onChange
}) => {
    const handleChange = useCallback((event)=> {
        const value = event.target.value;
        onChange(value);
    }, [onChange]);
    if(type === 'date'){
        return <input onChange={handleChange} type='date' data-testid="date-input"></input>
    }
    return <input onChange={handleChange} type='text' data-testid="text-input"></input>
}