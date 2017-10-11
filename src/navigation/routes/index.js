import { StackNavigator, TabNavigator } from 'react-navigation';

import AllList from '../../containers/AllList';
import Baskets from '../../containers/Baskets';

StackNavigator({
    AllList: { screen: AllList },
    Baskets: { screen: Baskets }
}, { headerMode: "none" });

export default TabNavigator({
    AllList: {
        screen: AllList,
    },
    Baskets: {
        screen: Baskets,
    },
}, {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#000',
            showLabel: false,
            iconStyle: {
                fontSize: 16,
            },
        },
    })
