import {Text, View} from "react-native";
import * as React from "react";
import {colors} from "../utils.ts";

function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background}}>
      <Text style={{fontSize: 126, color: colors.grey_text}}>02</Text>
    </View>
  );
}

export default ChatScreen;
