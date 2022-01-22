import React from 'react';
import { useState } from "react";

function Main(props) {
    const moin = "name";
    const job = "rap";

    const [name, setName] = useState();

    const handleNameChange = () => {
    const names = ["moin", "happy", "khushi"];
    const int = Math.floor(Math.random() * 3);
    return setName(names[int]);
    };

    const handleMessage = () => {
        alert('hello');
    }
    const handleMessage1 = (myname) => {
      alert(myname);
    };
    return (
      <div>
        <header>
          <p>{name}</p>
          {/* <p>{handleNameChange}</p> */}
          <button onClick={handleNameChange}>Click Me!</button>
          <button
            onClick={() => {
              handleMessage1("myname");
            }}
          >
            Once More Click Me!
          </button>
        </header>
      </div>
    );
}

export default Main;