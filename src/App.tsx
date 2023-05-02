import ListGroup from './components/ListGroup';
import Button from './components/Button';
import Like from './components/Like';
import Alert from './components/Alert';
import Shop from './components/Shop';
import ExpandableText from './components/ExpandableText';

import styled from 'styled-components';
import { useState } from 'react';

const ComponentTitle = styled.h2`
  margin: 30px 0 10px;
  padding-bottom: 5px;
  border-bottom: 2px solid #ddd;
`;
const ComponentDescription = styled.p`
  color: #aaa;
`;

function App() {
  const cities = ['New York', 'London', 'Paris', 'Berlin', 'Tokyo', 'Moscow'];

  let [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <h1>My components:</h1>
      <ComponentTitle>ListGroup</ComponentTitle>
      <ComponentDescription>
        Click on each item to select it.
      </ComponentDescription>
      <ListGroup items={cities} heading='Cities' />

      <ComponentTitle>Button</ComponentTitle>
      <ComponentDescription></ComponentDescription>
      <Button type='primary'>Buy</Button>

      <ComponentTitle>Like</ComponentTitle>
      <ComponentDescription>(Click me!)</ComponentDescription>
      <Like onClick={() => console.log('like')}></Like>

      <ComponentTitle>Inline Alert</ComponentTitle>
      <ComponentDescription>
        Click on the button to show alert. Then click on X button to close ot.
      </ComponentDescription>
      {showAlert && <Alert onClose={() => setShowAlert(false)}>Alert!</Alert>}
      <Button onClick={() => setShowAlert(true)}>Show Alert</Button>

      <ComponentTitle>Shop</ComponentTitle>
      <Shop />

      <ComponentTitle>Expandable Text</ComponentTitle>
      <ExpandableText maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut
        excepturi labore. Consectetur repellat ducimus culpa adipisci dolore
        enim cumque hic reprehenderit eos quo assumenda corrupti, sequi odio?
        Soluta, omnis!
      </ExpandableText>
    </>
  );
}

export default App;
