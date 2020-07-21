import React from 'react';
import {View} from 'react-native';

const TimerButton = ({children, style, ...rest}) => (
  <View style={style}>{children}</View>
);

export default TimerButton;
