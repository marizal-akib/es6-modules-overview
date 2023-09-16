import React from 'react';

import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multiply, divideTheFirstNumberByTheSecond as vaag } from '../../Utils/Calculate';
// import add from '../../Utils/Calculate';


const Sunglass = () => {
    const first = 45;
    const second = 55;
    const sum = add(first,second);
    const multy = multiply(first,second);
    const divide = vaag(first,second)



    return (
        <div>

            <Watch></Watch>
            
        </div>
    );
};

export default Sunglass;