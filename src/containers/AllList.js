import React, { Component } from 'react';
import { FlatList, Text, TouchableOpacity, Modal } from 'react-native';
import { Container, Header, Button, Title, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

class AllList extends Component {
    constructor(props) {
        super(props);
        this.state = { modalVisible: false };
    }

    setModalVisible = () => {
        this.setState((prev, nextState) => { modalVisible: !nextState });
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="list" />
        )
    };

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Groceries</Title>
                    </Body>
                    <TouchableOpacity onPress={this.setModalVisible}><Icon name="add" /></TouchableOpacity>
                </Header>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { alert("Modal has been closed.") }}
                >
                </Modal>
                <FlatList
                    data={[{ key: 'a' }, { key: 'b' }]}
                    renderItem={({ item }) => <Text>{item.key}</Text>}
                />
            </Container>
        );
    }
};

export default AllList;