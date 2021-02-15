import React, { useState }from "react";

const MyFirstFunctionComponent = () => {
    let [name, setName] = useState('');

       return (
           <div>
           <input type="text" onChange={(event) => setName(event.target.value)}></input>
           <br />
           <span> Salut {name}</span>
           </div>
       )
}

export default MyFirstFunctionComponent;