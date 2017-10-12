import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Text, TouchableOpacity } from 'react-native';
import { Container, Header, Button, Title, Body, Content, ListItem, Left, List } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import Item from './../components/Item';
import ProductList from "./../components/List";
import GroceryModal from './../components/Modal';
import * as storage from "./../utils/storage";
import * as GroceryActions from "./../actions";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(GroceryActions, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
class Baskets extends Component {
    constructor(props) {
        super(props);
        this.state = { modalVisible: false };
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="shopping-cart" style={{ fontSize: 28 }} />
    };

    static propTypes = {
        products: PropTypes.array.isRequired
    }

    setModalVisible = () => {
        this.setState(prevState => ({ modalVisible: !prevState.modalVisible }));
    }

    handleDeleteItem = (id) => {
        storage.setItem('products', this.props.products.filter(product => product.id !== id))
            .then(() => this.props.actions.deleteGrocery(id));
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Groceries</Title>
                    </Body>
                    <Button onPress={this.setModalVisible} transparent><Icon name="edit" style={{ fontSize: 20 }} /></Button>
                </Header>
                <GroceryModal
                    {...this.state}
                    setModalVisible={this.setModalVisible}
                    showDoneButton={false}
                >
                    <Container>
                        <Content>
                            <List>
                                {this.props.products.map(product =>
                                    <ListItem icon key={product.id}>
                                        <Left>
                                            <Button transparent
                                                onPress={() => this.handleDeleteItem(product.id)}>
                                                <Icon name="delete" />
                                            </Button>
                                        </Left>
                                        <Body>
                                            <Text>{product.name}</Text>
                                        </Body>
                                    </ListItem>
                                )}
                            </List>
                        </Content>
                    </Container>
                </GroceryModal>
                <ProductList products={this.props.products.filter(product => !product.acquired)} />
            </Container>
        );
    }
};

export default Baskets;