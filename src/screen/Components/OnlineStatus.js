import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../utils/AppColor';
import {horizScale, vertScale} from '../utils/Layouts';
import {fontSize, fontWeight} from '../utils/fonts';

const OnlineStatus = () => {
  const [status, setStatus] = useState(1);
  const pressOnline = () => {
    setStatus(1);
    Alert.alert('Coming Soon');
  };
  const pressOffline = () => {
    setStatus(0);
    Alert.alert('Coming Soon');
  };
  return (
    <View style={styles.onlineStatus}>
      <TouchableOpacity
        style={{
          ...styles.stats,
          backgroundColor: status == 1 ? AppColor.f4 : AppColor.f1,
        }}
        onPress={pressOnline}>
        <Text
          style={{
            color: status == 1 ? AppColor.f1 : AppColor.f5,
          }}>
          Online
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.stats,
          backgroundColor: status == 0 ? AppColor.f4 : AppColor.f1,
        }}
        onPress={pressOffline}>
        <Text
          style={{
            color: status == 0 ? AppColor.f1 : AppColor.f5,
          }}>
          Offline
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnlineStatus;

const styles = StyleSheet.create({
  onlineStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizScale(10),
    paddingVertical: horizScale(10),
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: AppColor.f14,
  },
  stats: {
    height: vertScale(23),
    width: horizScale(60),
    fontSize: fontSize.tiny,
    fontWeight: fontWeight.w7,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
