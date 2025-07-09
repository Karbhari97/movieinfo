import { View } from "react-native";
import '../global.css'
import { Image, ScrollView } from "react-native";
import { images } from "@/React Native Movie App (assets)/constants/images";
import { icons } from "@/React Native Movie App (assets)/constants/icons";
import SearchBarr from "@/component/SearchBarr";
import { useRouter } from "expo-router";

export default function Index() {
  const route = useRouter();
  return (
    <View
      className="flex-1 bg-primary"
    >
      <Image source={images.bg} className='absolute w-full z-0' />
           <ScrollView className=' flex-1 px-5' showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight:"100%", paddingBottom:10}}>
            <Image  source={icons.logo} className="mt-10 mx-auto w-12 h-10 mb-5" />
            <View>
              <SearchBarr onPress={()=>{route.push('/search')}} placeholder="search for a movie"/>
            </View>
           </ScrollView>

    </View>
  );
}
