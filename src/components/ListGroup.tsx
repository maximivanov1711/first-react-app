import { useState } from 'react';

interface Props {
  items: string[];
  heading: string;
  onSelectItem?: (itemIndex: number) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedId, setSelectedId] = useState(0);

  const SelectItem = (itemId: number) => {
    setSelectedId(itemId);
    if (onSelectItem) onSelectItem(itemId);
  };

  return (
    <>
      {heading && <h2>{heading}</h2>}

      {items.length === 0 && <p>No items</p>}

      <ul className='list-group'>
        {items.map((city, index) => (
          <li
            className={
              'list-group-item' + (index === selectedId ? ' active' : '')
            }
            key={city}
            onClick={() => SelectItem(index)}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
