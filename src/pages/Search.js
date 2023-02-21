import { useEffect, useState} from "react";

export const SearchPage = () => {
    const [placeholders, setPlaceholders] = useState([]);
    useEffect(() => {
        async function loadPlaceholders(){
            console.log('loading placeholders')
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            console.log('setting placeholders');
            setPlaceholders(data);
         
        }
        loadPlaceholders().catch(error => console.error(error));
    }, []);
    return <div>
        {placeholders.map(p => {
            return <div key={p.id}>{p.title}</div>
        })}
    </div>;
};