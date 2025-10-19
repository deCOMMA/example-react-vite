import { useState } from "react";
import styles from "./Counter.module.css"

function Counter() {

    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => setCount(count + 1)}
                className={styles.btnMain}
            >

            </button>
        </div>
    )
}

export default Counter;