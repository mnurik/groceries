import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { FlatList, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import { Container, Header, Button, Title, Body } from 'native-base';
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
            .then(res => this.props.actions.loadGroceries(res));
    }

    setModalVisible = () => {
        this.setState(prevState => ({ modalVisible: !prevState.modalVisible }));
    }

    handleAddItem = () => {
        storage.setItem('products', [...this.props.products, this.state.name])
            .then(() => this.props.actions.addGrocery(this.state.name))
            .then(() => this.setState({ modalVisible: false, name: '' }));
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
                    onChange={(name) => this.setState({ name })}
                />
                <ProductList list={this.props.products} />
            </Container>
        );
    }
};

export default AllList;