import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text } from 'react-native';
import { Container } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Baskets extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="shopping-cart" />
        )
    };

    render() {
        return (
            <Container>
                <FlatList
                    data={[{ key: 'c' }, { key: 'd' }]}
                    renderItem={({ item }) => <Text>{item.key}</Text>}
                />
            </Container>
        );
    }
};

export default Baskets;