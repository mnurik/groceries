import React, { Component } from 'react';
import { connect } from "redux";
import { FlatList, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import { Container, Header, Button, Title, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GroceryModal from './../components/Modal';
import { addGrocery } from './../actions';

// @connect(state => state)
class AllList extends Component {
    constructor(props) {
        super(props);
        this.state = { modalVisible: false, name: '' };
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="list" />
        )
    };

    setModalVisible = () => {
        this.setState(prevState => ({ modalVisible: !prevState.modalVisible }));
    }

    handleAddItem = () => {
        this.props.dispatch(addGrocery(this.state.name));
        this.setState({ modalVisible: false, name: '' });
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Groceries</Title>
                    </Body>
                    <TouchableOpacity onPress={this.setModalVisible}><Icon name="add" /></TouchableOpacity>
                </Header>
                <GroceryModal
                    {...this.state}
                    setModalVisible={this.setModalVisible}
                    onAddItem={this.handleAddItem}
                    onChange={(name) => this.setState({ name })}
                />
                <FlatList
                    data={[{ key: 'a' }, { key: 'b' }]}
                    renderItem={({ item }) => <Text>{item.key}</Text>}
                />
            </Container>
        );
    }
};

export default AllList;