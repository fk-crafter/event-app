import "../global.css";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import Animated, { FadeInUp, FadeInDown } from "react-native-reanimated";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-black">
      <ImageBackground
        source={require("../assets/images/tst.png")}
        className="absolute w-full h-full"
        imageStyle={{ resizeMode: "cover", opacity: 0.15 }}
      />

      <View className="flex-1 items-center justify-between px-6 py-16">
        <Animated.View entering={FadeInDown.duration(500)} className="mt-10">
          <Image
            source={require("../assets/images/logo.png")}
            className="w-20 h-20 rounded-full"
            resizeMode="contain"
          />
        </Animated.View>

        <Animated.View
          entering={FadeInUp.delay(150).duration(500)}
          className="items-center space-y-4"
        >
          <Text className="text-3xl font-bold text-white text-center">
            Welcome to Chuzly
          </Text>

          <Text className="text-sm text-gray-300 text-center max-w-xs">
            The fastest way to plan with your friends. Built so everyone sticks
            with it.
          </Text>
        </Animated.View>

        <Animated.View
          entering={FadeInUp.delay(300).duration(500)}
          className="w-full max-w-sm space-y-4 gap-2"
        >
          <TouchableOpacity className="w-full py-4 rounded-full bg-white flex-row justify-center items-center">
            <Text className="text-black font-semibold text-base">
               Continue with Apple
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-full py-4 rounded-full bg-white/90 border border-white/20">
            <Text className="text-black font-semibold text-base text-center">
              Continue with Google
            </Text>
          </TouchableOpacity>

          <View className="flex-row items-center justify-center my-2">
            <View className="flex-1 h-[1px] bg-white/20" />
            <Text className="px-3 text-gray-400 text-sm">or</Text>
            <View className="flex-1 h-[1px] bg-white/20" />
          </View>

          <TouchableOpacity
            onPress={() => router.push("/register")}
            className="w-full py-4 rounded-full bg-white"
          >
            <Text className="text-black font-semibold text-base text-center">
              Continue with Email
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text className="text-gray-300 text-center mt-2">
              Already have an account?{" "}
              <Text className="text-white underline">Log in</Text>
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}
