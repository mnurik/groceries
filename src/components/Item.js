import React from 'react';
import { ListItem, Text, Left, Right, Body } from 'native-base';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Item = ({ product, show, onAcquiered, onCancelAcquiered }) => show ? (
    <GestureRecognizer
        onSwipeRight={() => onAcquiered(product.id)}
        onSwipeLeft={() => onCancelAcquiered(product.id)}
    >
        <ListItem icon>
            {show && product.acquired && <Left>
                <Icon name="home" />
            </Left>}
            <Body>
                <Text>{product.name}</Text>
            </Body>
            {show && !product.acquired && <Right>
                <Icon name="shopping-cart" />
            </Right>}
        </ListItem>
    </GestureRecognizer>) :
    <ListItem><Text>{product.name}</Text></ListItem>;

export default Item;