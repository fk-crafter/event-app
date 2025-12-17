import React, { useState } from "react";
import "../global.css";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import Animated, {
  FadeInUp,
  FadeInDown,
  SlideOutDown,
  FadeIn,
  FadeOut,
  SlideInDown,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/auth-store";
import Toast from "react-native-toast-message";
import { API_URL } from "@/config";

const LoginSheet = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginMutation = useMutation({
    mutationFn: async () => {
      if (!email || !password) throw new Error("Please fill in all fields");
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const err = await res.text();
        throw new Error(err || "Login failed");
      }
      return res.json();
    },
    onSuccess: (data) => {
      useAuthStore.getState().setAuth({
        token: data.token,
        userName: data.name,
        userPlan: data.plan,
      });
      Toast.show({ type: "success", text1: "Welcome back 👋" });
      onClose();
      router.replace("/(protected)/overview");
    },
    onError: (error: any) => {
      Toast.show({
        type: "error",
        text1: "Login failed",
        text2: error?.message || "Please try again.",
      });
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="absolute bottom-0 w-full z-50"
    >
      <Animated.View
        entering={SlideInDown.duration(500)}
        exiting={SlideOutDown.duration(300)}
        className="bg-white w-full rounded-t-3xl px-6 pt-6 pb-10 shadow-xl"
      >
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-xl font-bold text-black">
            Sign in with Email
          </Text>
          <TouchableOpacity
            onPress={onClose}
            className="bg-gray-100 p-1 rounded-full"
          >
            <Ionicons name="close" size={20} color="gray" />
          </TouchableOpacity>
        </View>

        <View className="space-y-4">
          <View>
            <Text className="text-gray-500 mb-1.5 text-sm font-medium ml-1">
              Email
            </Text>
            <TextInput
              placeholder="Your email"
              placeholderTextColor="#9CA3AF"
              autoCapitalize="none"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3.5 text-base text-gray-900"
            />
          </View>

          <View>
            <View className="flex-row justify-between ml-1 mb-1.5">
              <Text className="text-gray-500 text-sm font-medium">
                Password
              </Text>
              <TouchableOpacity
                onPress={() => router.push("/(auth)/forgot-password")}
              >
                <Text className="text-blue-600 font-semibold text-sm">
                  Forgot?
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center border border-gray-200 rounded-2xl px-4 bg-white">
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                className="flex-1 py-3.5 text-base text-gray-900"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={20}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => loginMutation.mutate()}
            disabled={loginMutation.isPending}
            className="w-full bg-[#717171] rounded-2xl py-4 mt-2 shadow-sm"
          >
            {loginMutation.isPending ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-center text-white font-bold text-lg">
                Log in
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default function Index() {
  const router = useRouter();
  const [showLoginSheet, setShowLoginSheet] = useState(false);

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
              Continue with Apple
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
            className="w-full py-4 rounded-full bg-[#717171] border border-white/20"
          >
            <Text className="text-white font-semibold text-base text-center">
              Sign up with Email
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setShowLoginSheet(true)}>
            <Text className="text-gray-300 text-center mt-2">
              Already have an account?{" "}
              <Text className="text-white underline">Log in</Text>
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>

      {showLoginSheet && (
        <>
          <Animated.View
            entering={FadeIn.duration(300)}
            exiting={FadeOut.duration(300)}
            className="absolute inset-0 bg-black/60 z-40"
          >
            <Pressable
              className="flex-1"
              onPress={() => setShowLoginSheet(false)}
            />
          </Animated.View>

          <LoginSheet onClose={() => setShowLoginSheet(false)} />
        </>
      )}
    </View>
  );
}
