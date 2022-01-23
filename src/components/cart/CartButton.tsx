import {Button, Popover, Text} from '@geist-ui/core';
import {ShoppingCart} from '@geist-ui/icons';
import {cartState} from 'lib/recoil/atoms/cart';
import React, {useCallback} from 'react';
import {useRecoilValue} from 'recoil';
import {Bubble, Main, WrapperRow} from 'styles/cart/CartButton';
import {currencyFormat} from 'utils/currency';

/**
 * Displays cart button.
 *
 * @return {React.ReactElement} Cart button.
 */
export function CartButton(): React.ReactElement {
  const cart = useRecoilValue(cartState);

  const renderPopover = useCallback((): React.ReactElement => {
    return <>
      <Popover.Item title>
        <Text h5>Your cart</Text>
      </Popover.Item>
      <Popover.Item style={{
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100px',
        overflowY: 'scroll',
      }}>
        {cart.products?.map((product) => (
          <WrapperRow key={product.id}>
            <Text p
              margin={0}
              marginTop={'8px'}
              marginBottom={'8px'}>{product.fruit.name}</Text>
            <Text p
              margin={0}
              marginTop={'8px'}
              marginBottom={'8px'}>x {product.quantity}</Text>
          </WrapperRow>
        ))}
        {cart.products?.length === 0 && (
          <Text>
            Cart is empty
          </Text>
        )}
      </Popover.Item>
      <Popover.Item line />
      <Popover.Item style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Text p>Subtotal</Text>
          <Text p>{currencyFormat(cart?.subtotal ?? 0)}</Text>
        </div>
        <Button type='success' ghost>Go to checkout</Button>
      </Popover.Item>
    </>;
  }, [cart]);

  return (
    <Main>
      <Bubble>
        <Text font={'12px'} p margin={0}>{cart.products?.length ?? 0}</Text>
      </Bubble>
      <Popover content={renderPopover} placement='leftStart' >
        <ShoppingCart cursor={'pointer'}/>
      </Popover>
    </Main>
  );
}
