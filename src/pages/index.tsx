import React, {useCallback, useState} from 'react';
import {
  Text,
  Grid,
  Card,
  Button,
  Image as GeistImage,
} from '@geist-ui/core';
import {Plus} from '@geist-ui/icons';
import {Fruit} from 'data/type/Fruit';
import api from 'services/api';
import {CartModal} from 'components/cart/CartModal';
import {Product} from 'data/type/Product';
import {currencyFormat} from 'utils/currency';
import {useSetRecoilState} from 'recoil';
import {productState} from 'lib/recoil/atoms/product';

type Props = {
  fruits: Fruit[]
}

/**
 * Display home page.
 *
 * @return {React.ReactElement} Home page.
 */
export default function Home({fruits}: Props): React.ReactElement {
  const [loading, setLoading] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const setProduct = useSetRecoilState(productState);

  const onAddFruitToCart = useCallback((fruit: Fruit) => {
    const product: Product = {
      id: fruit.id,
      fruit,
      quantity: 1,
      price: fruit.nutritions.fat * Math.PI + 0.99,
    };

    setProduct(product);
    setLoading(true);
    setCartModalOpen(true);
  }, []);

  const onCartModalCancel = useCallback(() => {
    setLoading(false);
    setCartModalOpen(false);
  }, []);

  const onCartModalAdd = useCallback(() => {
    setLoading(false);
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
                loading={loading}
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
