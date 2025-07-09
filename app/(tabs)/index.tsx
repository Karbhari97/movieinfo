import { Text, View } from "react-native";
import '../global.css'
import { Link } from "expo-router";
import { Route } from "expo-router/build/Route";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="color-accent text-3xl"  >Sachin & Simran</Text>
    
    </View>
  );
}
