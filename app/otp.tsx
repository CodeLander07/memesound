import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function OTPScreen() {
  const [otp, setOtp] = useState("");
  const { email } = useLocalSearchParams<{ email: string }>();
  const router = useRouter();

  // Handle auto-submit when 6 digits are entered
  useEffect(() => {
    if (otp.length === 6) {
      handleVerify();
    }
  }, [otp]);

  const handleVerify = () => {
    if (otp.length === 6) {
      console.log(`OTP entered for email ${email || 'unknown'}:`, otp);
      // Here you would typically make an API call to verify the OTP.
      // After verification, you can navigate the user to the home screen.
      // For now, we just log it as requested.
    }
  };

  return (
    <View className="flex-1 items-center justify-center bg-zinc-950 px-6">
      <View className="w-full max-w-sm items-center bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800/80 shadow-2xl">
        <Text className="text-3xl font-extrabold text-white mb-2 tracking-tight">
          Verification
        </Text>
        <Text className="text-base text-zinc-400 mb-8 text-center font-medium">
          Enter the 6-digit code we sent to{"\n"}
          <Text className="font-semibold text-indigo-400">{email || "your email"}</Text>
        </Text>

        <View className="w-full mb-8">
          <TextInput
            className="w-full bg-zinc-900/80 border border-zinc-700 focus:border-indigo-500 rounded-2xl px-4 py-5 text-center text-3xl font-mono tracking-[0.5em] text-white shadow-inner"
            placeholder="000000"
            placeholderTextColor="#52525b"
            value={otp}
            onChangeText={(text) => {
              // Only allow numbers
              const numericValue = text.replace(/[^0-9]/g, '');
              setOtp(numericValue);
            }}
            keyboardType="number-pad"
            maxLength={6}
            autoFocus
            selectionColor="#6366f1"
          />
        </View>

        <TouchableOpacity
          className="w-full bg-indigo-600 rounded-2xl py-4 items-center shadow-lg shadow-indigo-500/30 active:bg-indigo-700"
          onPress={handleVerify}
          disabled={otp.length !== 6}
          style={{ opacity: otp.length === 6 ? 1 : 0.5 }}
        >
          <Text className="text-white text-lg font-bold tracking-wide">
            Verify Code
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="mt-6"
          onPress={() => router.back()}
        >
          <Text className="text-indigo-400 font-medium tracking-wide">
            Back to Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
