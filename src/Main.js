import React from 'react';

function Main(props) {
    const moin = "name";
    const job = "rap";

    const handleNameChange = () => {
    const names = ["moin", "happy", "khushi"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
    };
    return (
      <div>
        <header>
          <p>{handleNameChange()}</p>
        </header>
      </div>
    );
}

export default Main;