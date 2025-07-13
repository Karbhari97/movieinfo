import { ActivityIndicator, FlatList, Text, View } from "react-native";
import "../global.css";
import { Image, ScrollView } from "react-native";
import { images } from "@/React Native Movie App (assets)/constants/images";
import { icons } from "@/React Native Movie App (assets)/constants/icons";
import SearchBarr from "@/component/SearchBarr";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovie } from "@/services/api";
import Movie from "@/component/Movie";

export default function Index() {
  const route = useRouter();

  const {
    data: movie,
    loading: movieLoading,
    error: movieError,
  } = useFetch(() => fetchMovie({ query: "" }));

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className=" flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
      <Image source={icons.logo} className="mt-10 mx-auto w-12 h-10 mb-5" />
      <View>
        {movieLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : movieError ? (
          <Text>Error : {movieError?.message}</Text>
        ) : (
          <View>
            <SearchBarr
              onPress={() => {
                route.push("/search");
              }}
              placeholder="search for a movie "
            />
            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3 ml-2">
                Latest Movies
              </Text>
              <FlatList
                data={movie}
                renderItem={({ item }) => (
                  <Movie {...item}/>
                )}
                keyExtractor={(item) => item.id}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent:"flex-start",
                  gap:20,
                  padding:5,
                  marginBottom:10
                }}
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </View>
      </ScrollView>
    </View>
  );
}
