import React from 'react';
import { Container, Content, List } from 'native-base';
import Item from './../components/Item';

export default ProductList = (props) => {
    return (<Container>
        <Content>
            <List>
                {props.list.map(item => <Item key={item} item={item} />)}
            </List>
        </Content>
    </Container>)
};