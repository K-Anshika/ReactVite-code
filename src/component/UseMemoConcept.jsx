// used to add filter functionality on page

import React, {useMemo, useState} from "react";

export function UseMemoConcept(){

    const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9,10])
    const [filterOn, setFilterOn] = useState(false)
    const [filter, setFilter] = useState(false)

    const evenNumbers = useMemo(()=>{                         //explicit return in arrow function
        return numbers.filter(n=> n % 2 === 0)
    }, [numbers]);

    const oddNumbers = useMemo(()=>{
        return numbers.filter(n=> n%2 === 1)
    }, [numbers]);


return(
    <>
    <div>
        <button onClick={()=> setFilterOn(!filterOn)}>
             Click for even (Currently {filterOn ? "ON":"OFF"})
             </button>
    <ul>
       {
       (filterOn ? evenNumbers :numbers).map( num => (<li key={num}> {num} </li>)
       )
       }
        </ul>
    </div>

    <div>
        <button onClick={()=>setFilter(!filter)}>
             Click for even (Currently {filter ? "ON":"OFF"})
             </button>
<ul>
       {
       (filter ? oddNumbers :numbers).map( num => (<li key={num}> {num} </li>)  //implicit return in arrow function
       )
       }
        </ul>
    </div>
    </>
)

};