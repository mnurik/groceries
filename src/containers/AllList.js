import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { FlatList, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import { Container, Header, Button, Title, Body, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GroceryModal from './../components/Modal';
import * as GroceryActions from './../actions';
import ProductList from "./../components/List";
import * as storage from "./../utils/storage";

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
        tabBarIcon: ({ tintColor }) => <Icon name="list" style={{ fontSize: 30 }} />
    };

    componentWillMount() {
        storage.getItem('products')
            .then(res => res && this.props.actions.loadGroceries(res));
    }

    setModalVisible = () => {
        this.setState(prevState => ({ modalVisible: !prevState.modalVisible }));
    }

    handleAddItem = () => {
        const newGrocery = { id: Date.now(), name: this.state.name, acquired: false };
        storage.setItem('products', [...this.props.products, newGrocery])
            .then(() => this.props.actions.addGrocery(newGrocery))
            .then(() => this.setState({ modalVisible: false, name: '' }));
    }

    handleAcquiered = (id) => {
        storage.setItem('products', this.props.products.map(product => {
            if (product.id === id) {
                product.acquired = true;
            }
            return product;
        }))
            .then(() => this.props.actions.acquiringGroceries(id));
    }

    handleCancelAcquiered = (id) => {
        storage.setItem('products', this.props.products.map(product => {
            if (product.id === id) {
                product.acquired = false;
            }
            return product;
        }))
            .then(() => this.props.actions.cancelAcquiringGroceries(id))
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Groceries</Title>
                    </Body>
                    <Button onPress={this.setModalVisible} transparent>
                        <Icon name="add" style={{ fontSize: 20 }} />
                    </Button>
                </Header>
                <GroceryModal
                    {...this.state}
                    setModalVisible={this.setModalVisible}
                    onAddItem={this.handleAddItem}
                >
                    <Item>
                        <Input
                            onChangeText={(name) => this.setState({ name })}
                            onSubmitEditing={this.handleAddItem}
                            placeholder="Type name"
                            blurOnSubmit={false}
                            returnKeyType="done"
                            value={this.state.name}
                        />
                    </Item>
                </GroceryModal>
                <ProductList
                    show={true}
                    products={this.props.products}
                    onAcquiered={this.handleAcquiered}
                    onCancelAcquiered={this.handleCancelAcquiered}
                />
            </Container>
        );
    }
};

export default AllList;