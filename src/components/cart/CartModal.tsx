import React, {useCallback, useEffect, useState} from 'react';
import {Button, Modal, Text} from '@geist-ui/core';
import {QuantityWrapper, Wrapper} from 'styles/cart/CartModal';
import {Minus, Plus} from '@geist-ui/icons';
import {currencyFormat} from 'utils/currency';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {cartState} from 'lib/recoil/atoms/cart';
import {cartProductState} from 'lib/recoil/atoms/cartProduct';

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

  const setCart = useSetRecoilState(cartState);
  const cartProduct = useRecoilValue(cartProductState);

  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(cartProduct.price);

  const resetStates = useCallback(() => {
    setQuantity(1);
  }, []);

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
    resetStates();
    onCancel();
  }, []);

  const onInternalAdd = useCallback(() => {
    setCart((oldCart) => ({
      products: [
        ...oldCart?.products ?? [],
        {
          id: cartProduct.id,
          fruit: cartProduct.fruit,
          quantity,
          price,
        },
      ],
      total: 0,
      shipping: 0,
      subtotal: (oldCart?.subtotal ?? 0) + price,
    }));

    onAdd();
    resetStates();
  }, [price, quantity]);

  useEffect(() => {
    if (cartProduct) {
      setPrice(cartProduct.price * quantity);
    }
  }, [cartProduct, quantity]);

  return (
    <Modal visible={visible} disableBackdropClick>
      <Modal.Title>Add product</Modal.Title>
      <Modal.Subtitle>Add this product to your cart?</Modal.Subtitle>
      <Modal.Content>
        <Wrapper>
          <Text h4>{cartProduct.fruit?.name ?? ''}</Text>
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
            <Text width={'16px'} p>{quantity.toString().padStart(2, '0')}</Text>
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
