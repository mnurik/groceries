import React, { Component } from 'react';
import {
    Content,
    Item,
    Input,
    Container,
    Header,
    Body,
    Title,
    Icon
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
                <Container style={styles.container}>
                    <Header>
                        <TouchableOpacity onPress={this.props.setModalVisible}>
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                        <Body>
                            <Title>Groceries</Title>
                        </Body>
                        <TouchableOpacity onPress={this.props.onAddItem}>
                            <Text>Done</Text>
                        </TouchableOpacity>
                    </Header>
                    <Content>
                        <Item>
                            <Input
                                onChangeText={this.props.onChange}
                                onSubmitEditing={this.props.onAddItem}
                                placeholder="Type name"
                                blurOnSubmit={false}
                                returnKeyType="done"
                                value={this.props.name}
                            />
                        </Item>
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