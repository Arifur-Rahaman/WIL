import { useMemo, useState } from "react";

const UseMemo = () => {
    const [color, setColor] = useState('red')
    const [limit] = useState(1000000000)
    const changeColor = () => {
        setColor(prev => prev === 'red' ? 'black' : 'red')
    }
    let count
    useMemo(() => {
        for (let i = 0; i < limit; i++) {
            if(count){
                count++
            }
            else{ 
                count = 0
            }
        }
    }, [limit])
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', background: `${color}` }}>
            <div>
                <p style={{ color: 'white' }}>Count: {count}</p>
                <button onClick={changeColor}>Change Color</button>
            </div>
        </div>
    );
};

export default UseMemo;