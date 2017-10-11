import React from 'react';
import { bindActionCreators } from 'redux';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { View, StyleSheet, Platform } from 'react-native';
import { Container } from 'native-base';
import Navigator from './routes';

const mapStateToProps = state => ({
    navigate: state.navigate
});

@connect(mapStateToProps)
export default class ScreenManager extends React.Component {
    render() {
        return (
            <Navigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.navigate
            })} />

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...Platform.select({
            ios: { paddingTop: 30 }
        })
    },
    loading: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,.2)"
    }
});