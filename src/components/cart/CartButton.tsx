import {Button, Popover, Text} from '@geist-ui/core';
import {ShoppingCart} from '@geist-ui/icons';
import {cartState} from 'lib/recoil/atoms/cart';
import React, {useCallback} from 'react';
import {useRecoilValue} from 'recoil';
import {Bubble, Main} from 'styles/cart/CartButton';
import {currencyFormat} from 'utils/currency';

/**
 * Displays cart button.
 *
 * @return {React.ReactElement} Cart button.s
 */
export function CartButton(): React.ReactElement {
  const cart = useRecoilValue(cartState);

  const renderPopover = useCallback((): React.ReactElement => {
    return <>
      <Popover.Item title>
        <span>Your cart</span>
      </Popover.Item>
      <Popover.Item style={{maxHeight: '100px', overflowY: 'scroll'}}>
        {cart.products.map((product) => (
          <div key={product.id}>
            <Text>{product.fruit.name}
            </Text>
            <Text>x {product.quantity}</Text>
          </div>
        ))}
        {cart.products.length === 0 && (
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
          <Text p>Total</Text>
          <Text p>{currencyFormat(cart.total)}</Text>
        </div>
        <Button type='success' ghost>Go to checkout</Button>
      </Popover.Item>
    </>;
  }, []);

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
