import React from 'react';
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

type Props = {
  fruits: Fruit[]
}

/**
 * Display home page.
 *
 * @return {React.ReactElement} Home page.
 */
export default function Home({fruits}: Props): React.ReactElement {
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
          xs={12}
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
                {new Intl
                // eslint-disable-next-line max-len
                    .NumberFormat('en-US', {style: 'currency', currency: 'USD'})
                    .format(fruit.nutritions.fat * Math.PI + 0.99)
                }
              </Text>
              <Button type='success' auto
                ghost scale={1/1.5} icon={<Plus />}>
                    Add to cart
              </Button>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
}

export const getStaticProps = async () => {
  const {data} = await api.get('/fruit/all');

  return {
    props: {
      fruits: data,
    },
  };
};
