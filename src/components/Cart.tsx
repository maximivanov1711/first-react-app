import Button from './Button';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

type Product = {
  id: number;
  name: string;
  quantity: number;
};

type Props = {
  products: Product[];
  onClear: () => void;
  onAddProduct: () => void;
  onRemoveLastProduct: () => void;
  onChangeQuantity: (productId: number, addedValue: number) => void;
};

const Cart = ({
  products,
  onClear,
  onAddProduct,
  onRemoveLastProduct,
  onChangeQuantity,
}: Props) => {
  return (
    <>
      <ul className='list-group'>
        {products.map(product => (
          <li className='list-group-item' key={product.id}>
            id:{product.id} {product.name} x {product.quantity}
            <AiOutlineMinusCircle
              onClick={() => onChangeQuantity(product.id, -1)}
            />
            <AiOutlinePlusCircle
              onClick={() => onChangeQuantity(product.id, 1)}
            />
          </li>
        ))}
      </ul>
      <Button onClick={onClear}>Clear</Button>
      <Button onClick={onAddProduct}>Add one product</Button>
      <Button onClick={onRemoveLastProduct}>Remove last product</Button>
    </>
  );
};

export default Cart;
