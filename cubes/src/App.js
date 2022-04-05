import React, { useState, useEffect } from 'react';

function App() {
    const item = 'photos';
    const [data, setData] = useState([]);
    
	useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${item}?_start=0&_limit=40`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [item])

    const array = data.map(elem => <img key={elem.id} src={elem.thumbnailUrl} className='cube' />)
    
    return <>{array}</>;
}


export default App;

