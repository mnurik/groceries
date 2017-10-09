import React from 'react';
import PropTypes from 'prop-types';
import { FooterTab, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class FooterItem extends React.Component {
    render() {
        return (
            <FooterTab>
                <Button onPress={this.props.changeFilter}>
                    <Icon name="list" />
                    <Text>
                        {this.props.message}
                    </Text>
                </Button>
            </FooterTab>
        );
    }
}
