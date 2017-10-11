import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { FlatList, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import { Container, Header, Button, Title, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GroceryModal from './../components/Modal';
import * as GroceryActions from './../actions';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(GroceryActions, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
class AllList extends Component {
    constructor(props) {
        super(props);
        this.state = { modalVisible: false, name: '' };
    }

    static propTypes = {
        products: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
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
        this.props.actions.addGrocery(this.state.name);
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
                    data={this.props.products.map(p => ({ key: p }))}
                    renderItem={({ item }) => <Text>{item.key}</Text>}
                />
            </Container>
        );
    }
};

export default AllList;