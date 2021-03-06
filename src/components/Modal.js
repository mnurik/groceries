import React, { Component } from 'react';
import {
    Content,
    Container,
    Header,
    Body,
    Title,
    Icon,
    Button
} from "native-base";
import { Modal, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import PropTypes from 'prop-types';

class GroceryModal extends Component {
    render() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.modalVisible}
            >
                <Container>
                    <Header>
                        <Button onPress={this.props.setModalVisible} transparent>
                            <Text>Cancel</Text>
                        </Button>
                        <Body>
                            <Title>Groceries</Title>
                        </Body>
                        {this.props.showDoneButton &&
                            <Button onPress={this.props.onAddItem} transparent>
                                <Text>Done</Text>
                            </Button>}
                    </Header>
                    <Content>
                        {this.props.children}
                    </Content>
                </Container>
            </Modal>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            ios: { paddingTop: 30 }
        })
    }
});

export default GroceryModal;