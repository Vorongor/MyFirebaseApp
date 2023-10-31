import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux"; 
import { increment, decrement } from "../redux/regslice"; 

function MyComponent() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
}

export default MyComponent;
