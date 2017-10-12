import { TabNavigator } from 'react-navigation';

import AllList from '../../containers/AllList';
import Baskets from '../../containers/Baskets';

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
            inactiveTintColor: '#b0b6be',
            activeTintColor: '#000',
            showLabel: false
        },
    })
