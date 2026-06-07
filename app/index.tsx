import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleContinue = () => {
    if (email.trim()) {
      router.push({ pathname: "/otp", params: { email } });
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-zinc-950 px-6">
      <View className="w-full max-w-sm items-center bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800/80 shadow-2xl">
        <View className="p-1 rounded-full bg-indigo-500/10 mb-8 border border-indigo-500/20">
          <Image
            source={require("../assets/icon.png")}
            className="w-48 h-48 rounded-full"
            resizeMode="contain"
          />
        </View>
        
        <Text className="text-3xl font-extrabold text-white mb-2 tracking-tight">
          Memesounds
        </Text>
        <Text className="text-base text-zinc-400 mb-8 text-center font-medium">
          Enter your email to continue
        </Text>

        <View className="w-full mb-6">
          <Text className="text-sm font-semibold text-zinc-300 mb-2 ml-1 tracking-wide">
            EMAIL ADDRESS
          </Text>
          <TextInput
            className="w-full bg-zinc-900/80 border border-zinc-700 focus:border-indigo-500 rounded-2xl px-5 py-4 text-base text-white shadow-inner"
            placeholder="you@example.com"
            placeholderTextColor="#71717a"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            selectionColor="#6366f1"
          />
        </View>

        <TouchableOpacity
          className="w-full bg-indigo-600 rounded-2xl py-4 items-center shadow-lg shadow-indigo-500/30 active:bg-indigo-700"
          onPress={handleContinue}
        >
          <Text className="text-white text-lg font-bold tracking-wide">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}