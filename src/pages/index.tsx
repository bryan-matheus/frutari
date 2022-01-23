import React from 'react';
import {
  Page,
  Text,
  Grid,
  Card,
  Button,
  Link,
  Image as GeistImage,
} from '@geist-ui/core';
import {Plus, ShoppingCart} from '@geist-ui/icons';
import {Items, Navbar, NavbarLogoWrapper} from 'styles/navigation/Navbar';
import {ThemeIcon} from 'components/theme/ThemeIcon';
import {Fruit} from 'data/type/Fruit';
import api from 'services/api';
import Image from 'next/image';

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
    <Page dotBackdrop>
      <Navbar>
        <NavbarLogoWrapper>
          <Image
            src={'/logo.png'}
            width={36}
            height={36} />
          <Text h2 margin={0}>Frutari</Text>
        </NavbarLogoWrapper>
        <Items>
          <ThemeIcon />
          <ShoppingCart cursor={'pointer'} />
        </Items>
      </Navbar>

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
