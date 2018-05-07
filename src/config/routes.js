import { StackNavigator } from 'react-navigation'

//screens imports
import Intro from '../screens/intro'

// possible pattern to adhere. The name of the route should be the same as the name of the class
// but in lowercase.

const MainNavigator = StackNavigator(
  {
    intro: { screen: Intro }
  },
  {
    navigationOptions: {
      header: null
    }
  }
)

export default MainNavigator
