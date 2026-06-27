import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        getCounter();
    }, []);

    const getCounter = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5001/counter"
            );

            setCount(response.data.count);
        } catch (err) {
            console.log(err);
        }
    };

    const increase = async () => {
        try {
            const response = await axios.post(
                "http://localhost:5001/counter"
            );

            setCount(response.data.count);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">
            <h1>Counter App</h1>

            <h2>{count}</h2>

            <button onClick={increase}>
                Increment
            </button>
        </div>
    );
}

export default App;