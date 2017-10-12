import React from 'react';
import { Container, Content, List } from 'native-base';
import Swiper from 'react-native-swiper';
import Item from './../components/Item';

export default ProductList = (props) => {
    return (
        <Container>
            <Content>
                <List>
                    {props.products.map(product => <Item key={product.id} {...props} product={product} />)}
                </List>
            </Content>
        </Container>
    );
};