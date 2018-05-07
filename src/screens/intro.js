import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const StyledText = styled.Text`
  color: palevioletred;
`

export default class Intro extends Component {
  render() {
    return (
      <StyledView>
        <StyledText>Starcross</StyledText>
      </StyledView>
    )
  }
}
