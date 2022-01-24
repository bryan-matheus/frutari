import React, {useMemo} from 'react';
import {Button, Card, Divider, Grid, Text} from '@geist-ui/core';
import Lottie, {Options} from 'react-lottie';
import animationData from 'assets/lottie/bouncing-fruits.json';
import {FaCcStripe} from 'react-icons/fa';
import {currencyFormat} from 'utils/currency';
import {useRecoilValue} from 'recoil';
import {cartState} from 'lib/recoil/atoms/cart';

/**
 * Displays the Confirmation page.
 *
 * @return {React.ReactElement} Confirmation page.
 */
export default function Confirmation(): React.ReactElement {
  const cart = useRecoilValue(cartState);

  const defaultOptions = useMemo((): Options => ({
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }), []);

  return (
    <Grid.Container
      gap={2}
      marginTop={'32px'}
      justify="center">
      <Grid
        xs={24}
        sm={24}
        md={14}>
        <Lottie
          options={defaultOptions}
          width={480}
          isClickToPauseDisabled />
      </Grid>
      <Grid
        xs={24}
        sm={24}
        md={10}>
        <Card shadow width="100%">
          <Card.Content>
            <Text h4>Summary</Text>
          </Card.Content>
          <Divider />
          <Card.Content height={'54%'}>
            {JSON.stringify(cart, null, 2)}
          </Card.Content>
          <Card.Footer style={{flexDirection: 'column'}}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}>
              <Text h4>Total</Text>
              <Text h4>{currencyFormat(0)}</Text>
            </div>
            <div style={{width: '100%', marginTop: '10px'}}>
              <Button type="success" scale={1.5} width={'100%'}>
                Checkout with
                <FaCcStripe size={32} style={{marginLeft: '10px'}}/>
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
}
