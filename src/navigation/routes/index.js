import { StackNavigator } from 'react-navigation';

import AllList from '../../containers/AllList';
import Baskets from '../../containers/Baskets';

export default StackNavigator({
    AllList: { screen: AllList },
    Baskets: { screen: Baskets }
}, { headerMode: "none" });
