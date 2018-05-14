import React, { Component } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

// redux imports
import { Provider, connect } from 'react-redux'
import store from './redux/store'
import MainNavigator from './config/routes'
import { addNavigationHelpers } from 'react-navigation'

import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
const middleware = createReactNavigationReduxMiddleware('root', state => state.nav)
const addListener = createReduxBoundAddListener('root')

const App = ({ dispatch, nav }) => (
  <MainNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav,
      addListener
    })}
  />
)

const mapStateToProps = state => ({
  nav: state.nav
})
const AppWithNavigation = connect(mapStateToProps)(App)

const StyledView = styled.View`
  flex: 1;
`

export default class MainApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <StyledView>
          <AppWithNavigation />
        </StyledView>
      </Provider>
    )
  }
}
