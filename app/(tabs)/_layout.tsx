import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { Tabs } from "expo-router";
import { images } from "@/React Native Movie App (assets)/constants/images";
import { icons } from "@/React Native Movie App (assets)/constants/icons";

const IconLayout = ({ focused, icon, text }) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[85px] min-h-12 mt-2 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-secondery font-semibold ml-2 text-base">
          {text}
        </Text>
      </ImageBackground>
    );
  } else {
    return (
      <View className="justify-center items-center size-full rounded-full mt-2">
        <Image source={icon} tintColor="#A8B5DB" className="size-5" />
      </View>
    );
  }
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          borderColor:"#0f0D23",
          marginHorizontal: 20,
          marginBottom: 40,
          height: 45,
          position: "absolute",
          overflow: "hidden",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <IconLayout focused={focused} icon={icons.home} text={"Home"} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <IconLayout focused={focused} icon={icons.search} text={"Search"} />
          ),
        }}
      />
      <Tabs.Screen
        name="save"
        options={{
          headerShown: false,
          title: "Bookmark",
          tabBarIcon: ({ focused }) => (
            <IconLayout focused={focused} icon={icons.save} text={"Save"} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <IconLayout
              focused={focused}
              icon={icons.person}
              text={"Profile"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
