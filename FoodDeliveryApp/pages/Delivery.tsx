import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

/**
 * 스크린 중첩: 다른 탭(지도) 계속 켜둔상태에서 새 탭 켜기
 */
const Delivery = () => {
  return (
    <Stack.Navigator initialRouteName="Ing">
      <Stack.Screen name="Ing" component={Ing} options={{headerShown: true}} />
      <Stack.Screen name="Complete" component={Complete} />
    </Stack.Navigator>
  );
};

export default Delivery;
