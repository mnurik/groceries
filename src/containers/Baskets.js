import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

class Baskets extends Component {
    render() {
        return (
            <FlatList
                data={[{ key: 'c' }, { key: 'd' }]}
                renderItem={({ item }) => <Text>{item.key}</Text>}
            />
        );
    }
};

export default Baskets;