import React, { Component } from "react";
import { connect } from "redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "native-base";
import FooterItem from "./../components/FooterItem";

class Footer extends Component {
    static defaultProps = {
        tabs: ['AllList', 'Baskets']
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                {this.props.tabs.map(tab =>
                    <FooterItem key={tab} changeFilter={() => navigate(tab)} message={tab} />)
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    filters: {
        flexDirection: "row",
    },
    filter: {
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "transparent"
    },
    selected: {
        borderColor: "rgba(175, 47, 47, .2)"
    }
})
export default Footer;