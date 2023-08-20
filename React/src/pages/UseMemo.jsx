import { useMemo, useState } from "react";

const UseMemo = () => {
    const [color, setColor] = useState('red')
    const [limit, setLimit] = useState(1000000000)
    const changeColor = () => {
        setColor(prev => prev === 'red' ? 'black' : 'red')
    }
    let count = useMemo(() => {
        let sum = i
        for (var i = 0; i < limit; i++) {
            sum = i
        }
        return sum
    }, [limit])

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', background: `${color}` }}>
            <div>
                <p style={{ color: 'white' }}>Count: {count}</p>
                <button onClick={changeColor}>Change Color</button>
                <button onClick={()=>setLimit(prev=>prev-1)}>Decrease Limit</button>
            </div>
        </div>
    );
};

export default UseMemo;