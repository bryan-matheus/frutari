import React, {useCallback, useEffect, useState} from 'react';
import {Button, Modal, Text} from '@geist-ui/core';
import {QuantityWrapper, Wrapper} from 'styles/cart/CartModal';
import {Minus, Plus} from '@geist-ui/icons';
import {currencyFormat} from 'utils/currency';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {cartState} from 'lib/recoil/atoms/cart';
import {productState} from 'lib/recoil/atoms/product';
import {Product} from 'data/type/Product';

type Props = {
  visible: boolean;
  onCancel: () => void;
  onAdd: () => void;
}

/**
 * Displays the cart modal.
 *
 * @param {Props} props - Component props.
 * @return {React.ReactElement} Cart modal.
 */
export function CartModal(props: Props): React.ReactElement {
  const {visible, onCancel, onAdd} = props;
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const setCart = useSetRecoilState(cartState);
  const product = useRecoilValue(productState);

  const onAddQuantity = useCallback(() => {
    if (quantity < 30) {
      setQuantity(quantity + 1);
    }
  }, [quantity]);

  const onRemoveQuantity = useCallback(() => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }, [quantity]);

  const onInternalCancel = useCallback(() => {
    onCancel();
  }, []);

  const onInternalAdd = useCallback(() => {
    const newCartWithProduct: Product = {
      id: product.id,
      fruit: product.fruit,
      quantity,
      price: product.price * quantity,
    };

    setCart((oldCart) => ({
      products: [...oldCart.products, newCartWithProduct],
      total: oldCart.total + price,
    }));
    onAdd();
  }, []);

  useEffect(() => {
    if (product) {
      setPrice(product.price * quantity);
    }
  }, [product, quantity]);

  return (
    <Modal visible={visible}>
      <Modal.Title>Add product</Modal.Title>
      <Modal.Subtitle>Add this product to your cart?</Modal.Subtitle>
      <Modal.Content>
        <Wrapper>
          <Text h4>{product.fruit?.name ?? ''}</Text>
          <Text h4>{currencyFormat(price)}</Text>
        </Wrapper>

        <Wrapper>
          <Text p>Quantity</Text>
          <QuantityWrapper>
            <Button
              scale={2/6}
              auto
              icon={<Plus />}
              onClick={onAddQuantity}/>
            <Text width={'16px'} p>{quantity}</Text>
            <Button
              scale={2/6}
              auto
              icon={<Minus />}
              onClick={onRemoveQuantity}/>
          </QuantityWrapper>
        </Wrapper>
      </Modal.Content>
      <Modal.Action
        passive
        onClick={onInternalCancel}>Cancel</Modal.Action>
      <Modal.Action onClick={onInternalAdd}>Add</Modal.Action>
    </Modal>
  );
}
