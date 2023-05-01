import Button from './components/Button';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import Like from './components/Like';

function App() {
  return (
    <>
      <Like onClick={() => console.log('like')}></Like>
    </>
  );
}

export default App;
