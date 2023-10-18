import { useState } from "react";

// cities : string ,, items = string[]

interface ListGroupProps {
  items: String[];
  heading: String;
  onSelectItem: (item: String) => String;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const message = () => {
    return items.length === 0 && <p>No items found</p>;
  };

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  var title = "";
  return (
    <>
      <h1>{title}</h1>
      {message()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              title = onSelectItem(item).toString();
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
