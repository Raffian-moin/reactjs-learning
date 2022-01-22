import React from 'react';
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Main(props) {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: 'Banana',
        },
        {
            id: 2,
            checked: false,
            item: 'Grape',
        },
        {
            id: 3,
            checked: true,
            item: 'School Bag',
        },
    ])

    const handleCheck = (id) => {
      const  listItems = items.map((item) => 
        item.id == id ? {...item, checked: !item.checked} : item
      );
      setItems(listItems);
    }

    const handleDelete = (id) => {
      const listItems = items.filter((item) =>
        item.id != id 
      );
      setItems(listItems);
    }
    const listItems = items.map((item) => (
      <li className="item" key={item.id}>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => {
            handleCheck(item.id);
          }}
        />
        <label
          htmlFor=""
          style={
            item.checked == true ? { textDecoration: "line-through" } : null
          }
        >
          {item.item}
        </label>
        <FaTrashAlt onClick={()=> {handleDelete(item.id);}} role="button" />
      </li>
    ));
    return (
      <div>
        <header>
          {items.length ? (
          <ul>{listItems}</ul>
          ) : (
            <p>Your Item Empty</p>
          )
          }
        </header>
      </div>
    );
}

export default Main;