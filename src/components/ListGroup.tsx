import { useState } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { BsFillBoomboxFill } from 'react-icons/bs';

const List = styled.ul`
  margin-top: 10px;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding-left: 5px;
  ${props =>
    props.active &&
    css`
      padding: 10px;
      background-color: red !important;
    `};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem?: (itemIndex: number) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedId, setSelectedId] = useState(0);

  heading = '';

  const SelectItem = (itemId: number) => {
    setSelectedId(itemId);
    if (onSelectItem) onSelectItem(itemId);
  };

  return (
    <>
      {heading && <h1>{heading}</h1>}

      {items.length === 0 && <p>No items</p>}

      <List className='list-group'>
        {items.map((city, index) => (
          <ListItem
            active={index === selectedId}
            className={
              'list-group-item' + (index === selectedId ? ' active' : '')
            }
            key={city}
            onClick={() => SelectItem(index)}
          >
            <BsFillBoomboxFill />
            {city}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
