import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import { Container, Header, Button, Title, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import Item from './../components/Item';

const mapStateToProps = state => state;

@connect(mapStateToProps)
class Baskets extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => <Icon name="shopping-cart" style={{ fontSize: 28 }} />
    };

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Groceries</Title>
                    </Body>
                    <Button transparent><Icon name="edit" style={{ fontSize: 20 }} /></Button>
                </Header>
                <ProductList list={this.props.products} />
            </Container>
        );
    }
};

export default Baskets;