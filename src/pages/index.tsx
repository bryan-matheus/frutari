import React from 'react';
import {
  Page,
  Text,
  Grid,
  Card,
  Button,
  Link,
} from '@geist-ui/core';
import {ShoppingCart} from '@geist-ui/icons';
import {Items, Navbar} from 'styles/navigation/Navbar';
import {ThemeIcon} from 'components/theme/ThemeIcon';
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
    <Page>
      <Navbar>
        <Text h2>Frutari</Text>
        <Items>
          <ThemeIcon />
          <ShoppingCart cursor={'pointer'} />
        </Items>
      </Navbar>

      <Grid.Container gap={2}
        justify="center"
        marginTop={'32px'}
        marginBottom={'32px'}>
        {fruits.map((fruit) => (
          <Grid key={`fruit_${fruit.id}`} xs={6}>
            <Card style={{cursor: 'pointer'}} shadow width="100%">
              <Card.Content>
                <Text h4>{fruit.name}</Text>
                <Text p>
                  The {fruit.name} from genus {' '}
                  {fruit.genus} and the order {fruit.order}
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
                      .format(fruit.nutritions.fat + 0.5)
                  }
                </Text>
                <Button type='success-light' ghost>Add to cart</Button>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
      <Page.Footer>
        <Text p>Made with ❤️ by {''}
          <Link href='https://github.com/bryan-matheus' color target={'_blank'}>Bryan Matheus</Link>
        </Text>
      </Page.Footer>
    </Page>
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
