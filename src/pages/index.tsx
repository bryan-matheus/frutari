import React, {useCallback, useState} from 'react';
import {
  Text,
  Grid,
  Card,
  Button,
  Image as GeistImage,
  useToasts,
} from '@geist-ui/core';
import {Plus} from '@geist-ui/icons';
import {Fruit} from 'data/type/Fruit';
import api from 'services/api';
import {CartModal} from 'components/cart/CartModal';
import {currencyFormat} from 'utils/currency';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {cartProductState} from 'lib/recoil/atoms/cartProduct';
import {CartProduct} from 'data/type/Cart';
import {nanoid} from 'nanoid';

type Props = {
  fruits: Fruit[]
}

/**
 * Display home page.
 *
 * @return {React.ReactElement} Home page.
 */
export default function Home({fruits}: Props): React.ReactElement {
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [, setToast] = useToasts();

  const setCartProduct = useSetRecoilState(cartProductState);
  const cartProduct = useRecoilValue(cartProductState);

  const onAddFruitToCart = useCallback((fruit: Fruit) => {
    if (cartProduct.fruit.id !== fruit.id) {
      setCartProduct((prev) => ({
        ...prev,
        id: nanoid(),
        fruit,
        quantity: 1,
        price: fruit.nutritions.fat * Math.PI + 0.99,
      } as CartProduct));

      setCartModalOpen(true);
    } else {
      setToast({
        text: `${fruit.name} is already added to cart`,
        type: 'error',
      });
    }
  }, []);

  const onCartModalCancel = useCallback(() => {
    setCartModalOpen(false);
  }, []);

  const onCartModalAdd = useCallback(() => {
    setCartModalOpen(false);
  }, []);

  return (
    <Grid.Container
      gap={2}
      justify="center"
      marginTop={'32px'}
      marginBottom={'32px'}>
      {fruits.map((fruit) => (
        <Grid
          key={`fruit_${fruit.id}`}
          justify='center'
          xs={24}
          sm={12}
          md={12}
          lg={6}
          xl={6}>
          <Card width="100%">
            <GeistImage
              src={'/fruit-placeholder.jpg'}
              width={'100%'}
              height={'200px'}
              style={{objectFit: 'cover'}}
              scale={2/3}/>
            <Card.Content>
              <Text h4>{fruit.name}</Text>
              <Text p>
                  The {fruit.name} is genus {' '}
                {fruit.genus} and is {fruit.order} order.
              </Text>
            </Card.Content>

            <Card.Footer style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <Text b>
                {currencyFormat(fruit.nutritions.fat * Math.PI + 0.99)}
              </Text>
              <Button
                type='success'
                auto
                ghost
                scale={1/1.5}
                onClick={() => onAddFruitToCart(fruit)}
                icon={<Plus />}>
                    Add to cart
              </Button>
            </Card.Footer>
          </Card>
        </Grid>
      ))}

      <CartModal
        visible={cartModalOpen}
        onCancel={onCartModalCancel}
        onAdd={onCartModalAdd} />
    </Grid.Container>
  );
}

export const getStaticProps = async () => {
  const {data} = await api.get('/fruit/all');

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      fruits: data,
    },
  };
};
