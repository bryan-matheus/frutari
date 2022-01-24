import {Button, Capacity, Popover, Text} from '@geist-ui/core';
import {Check, ShoppingCart} from '@geist-ui/icons';
import {cartState} from 'lib/recoil/atoms/cart';
import {useRouter} from 'next/router';
import React, {useCallback} from 'react';
import {useRecoilValue} from 'recoil';
import {Bubble, Main, Subtotal, WrapperRow} from 'styles/cart/CartButton';
import {sumProperty} from 'utils';
import {currencyFormat} from 'utils/currency';

/**
 * Displays cart button.
 *
 * @return {React.ReactElement} Cart button.
 */
export function CartButton(): React.ReactElement {
  const cart = useRecoilValue(cartState);

  const navigation = useRouter();

  const onCheckoutClick = useCallback(() => {
    navigation.push('/checkout');
  }, []);

  const renderPopover = useCallback((): React.ReactElement => {
    return <>
      <Popover.Item title>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          width: '100%',
        }}>
          <Text h5>Your cart</Text>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
            <Text p
              small
              margin={0}>
                Max. 180/{sumProperty(cart.products, 'quantity')}
            </Text>
            <Capacity
              value={sumProperty(cart.products, 'quantity')}
              limit={180}/>
          </div>
        </div>
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
        <Subtotal>
          <Text h5
            margin={0}
            marginBottom={'16px'}>Subtotal</Text>
          <Text h5
            margin={0}
            marginBottom={'16px'}>{currencyFormat(cart?.subtotal ?? 0)}</Text>
        </Subtotal>
        <Button
          type='success'
          ghost
          iconRight={<Check />}
          disabled={cart.products?.length === 0}
          onClick={onCheckoutClick}>Checkout</Button>
      </Popover.Item>
    </>;
  }, [cart]);

  return (
    <Main>
      {(cart.products?.length > 0) && (
        <Bubble>
          <Text font={'12px'} p margin={0}>{cart.products?.length ?? 0}</Text>
        </Bubble>
      )}

      <Popover content={renderPopover} placement='leftStart' >
        <ShoppingCart cursor={'pointer'}/>
      </Popover>
    </Main>
  );
}
