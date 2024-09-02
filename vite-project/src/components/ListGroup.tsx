import { useState } from "react";

interface ListProps {
  items: [];
  title: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup(props: ListProps) {
  // let cities = ["Lagos", "Abuja", "Portharcourt", "Asaba", "Owerri"];
  let cities = props.items;

  // Hook
  // let selectedIndex = -1;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event Handler
  const handleClick = (event: MouseEvent, city: string) => {
    console.log(event);
    // selectedIndex = index;
  };

  return (
    <>
      <h2>{props.title}</h2>
      {cities.length === 0 && <h5>No Cities Found</h5>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            // onClick={(event) => console.log("Clicked " + city, index, event)}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectedItem(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
