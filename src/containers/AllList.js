import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { Container } from 'native-base';
import Footer from './../containers/Footer';

class AllList extends Component {
    render() {
        return (
            <Container>
                <FlatList
                    data={[{ key: 'a' }, { key: 'b' }]}
                    renderItem={({ item }) => <Text>{item.key}</Text>}
                />
                <Footer {...this.props} />
            </Container>
        );
    }
};

export default AllList;