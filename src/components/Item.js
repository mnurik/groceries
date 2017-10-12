import React from 'react';
import { ListItem, Text } from 'native-base';

const Item = ({ item }) => (
    <ListItem><Text>{item}</Text></ListItem>
);

export default Item;