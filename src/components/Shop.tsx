import NavBar from './NavBar';
import Cart from './Cart';
import { produce } from 'immer';

import { useState } from 'react';

const Shop = () => {
  const productObjects = [];
  for (let i = 0; i < 3; i++) {
    productObjects.push({
      id: i,
      name: `Product ${i + 1}`,
      quantity: 1,
    });
  }

  const [products, setProducts] = useState(productObjects);

  const addOneProduct = () => {
    setProducts(
      produce(draft => {
        const newId = draft.length ? draft[draft.length - 1].id + 1 : 0;

        draft.push({
          id: newId,
          name: `Product ${newId + 1}`,
          quantity: 1,
        });
        return draft;
      })
    );
  };

  const removeProduct = (productId: number) => {
    setProducts(
      produce(draft => {
        return draft.filter(product => product.id !== productId);
      })
    );
  };

  const changeQuantity = (productId: number, addedValue: number) => {
    const product = products.find(product => product.id === productId);

    if (!product) return;

    const newQuantity = product.quantity + addedValue;

    if (newQuantity <= 0) {
      removeProduct(product.id);
      return;
    }

    setProducts(
      produce(draft => {
        const product = draft.find(product => product.id === productId);
        if (product) product.quantity += addedValue;

        return draft;
      })
    );
  };

  return (
    <>
      <NavBar itemsCount={products.length} />
      <Cart
        products={products}
        onClear={() => setProducts([])}
        onAddProduct={addOneProduct}
        onRemoveLastProduct={() => removeProduct(products.length - 1)}
        onChangeQuantity={changeQuantity}
      />
    </>
  );
};

export default Shop;
