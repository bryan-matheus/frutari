import {Text} from '@geist-ui/core';
import {ShoppingCart} from '@geist-ui/icons';
import {cartState} from 'lib/recoil/atoms/cart';
import React from 'react';
import {useRecoilValue} from 'recoil';
import {Bubble, Main} from 'styles/cart/CartButton';

/**
 * Displays cart button.
 *
 * @return {React.ReactElement} Cart button.s
 */
export function CartButton(): React.ReactElement {
  const cart = useRecoilValue(cartState);

  return (
    <Main>
      <Bubble>
        <Text font={'12px'} p margin={0}>{cart.length}</Text>
      </Bubble>
      <ShoppingCart cursor={'pointer'} />
    </Main>
  );
}
