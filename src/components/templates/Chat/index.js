import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Spacings, Colors as defColors, TextInputChat, UserMessageChat } from '../../';

function Chat() {
  const Colors = defColors(false);
  return (
    <View
      style={{
        margin: Spacings.tiny / 2,
      }}>
      <TextInputChat placeholder={'Votre message'} />
      <UserMessageChat isRight={false} />
      <UserMessageChat isRight={true} />
    </View>
  );
}

export default Chat;
