import { memo, useState, useEffect } from 'react';


export const Effect = memo(() => {
    const [count,setCount] = useState(0);

    const countup = () => {
        setCount(count + 1);
    }

    useEffect( () => {
        window.alert("カウントが表示されました。")
     },[countup]);

    return(
        <>
           <button onClick={countup}>押す</button>
           <p>{count}</p>
        </>
    )
});