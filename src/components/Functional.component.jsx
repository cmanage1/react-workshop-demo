import React, {useState} from 'react';

import Child from './Child.component';


const ReactFunctional = () => {
    const [count, updateCount] = useState(0);
    return(
        <div>
            <p>Functional counter: {count}</p>
            {/* show why onClick={updateCount(count+1)} will not work (all function are ran on render) */}
            <button onClick={() => {updateCount(count+1)}}>Click me</button>
            <Child text="this is some text">
                    <h1>Another React Component</h1>
                </Child>
        </div>
    )
}

export default ReactFunctional;