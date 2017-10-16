import React from 'react';
import { ListItem, Text, Left, Right, Body, Container, Thumbnail } from 'native-base';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Item = ({ product, show, onAcquiered, onCancelAcquiered }) => show ? (
    <GestureRecognizer
        onSwipeRight={() => onAcquiered(product.id)}
        onSwipeLeft={() => onCancelAcquiered(product.id)}
    >
        <ListItem>
            {show && product.acquired &&
                < Thumbnail square source={require('./../assets/home.png')} style={{ width: 30, height: 30 }} />
            }
            <Body>
                <Text>{product.name}</Text>
            </Body>
            {show && !product.acquired &&
                < Thumbnail square source={require('./../assets/basket.png')} style={{ width: 30, height: 30 }} />
            }
        </ListItem>
    </GestureRecognizer>) :
    <ListItem><Text>{product.name}</Text></ListItem>;

export default Item;