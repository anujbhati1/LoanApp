import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import Icon from 'react-native-vector-icons/Ionicons';
import {AppColor} from './src/screen/utils/AppColor';
//import {CustomImages} from './src/screen/utils/CustomImages';
import {fontSize} from './src/screen/utils/fonts';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {horizScale} from './src/screen/utils/Layouts';

const Test = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [password, setPassword] = useState('');
  // const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{marginBottom: 20}}>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: AppColor.f1,

            alignItems: 'center',
            borderRadius: 15,
          },
        ]}>
        <TextInput
          value={password}
          autoCorrect={false}
          //   onFocus={() => {
          //     onFocus();
          //     setIsFocused(true);
          //   }}
          //   onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          onChangeText={text => {
            setPassword(text);
          }}
          style={{color: AppColor.f1, flex: 1}}
        />

        <MaterialCommunityIcons
          onPress={() => setHidePassword(!hidePassword)}
          name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
          style={style.iconstyle}
        />

        {/*<TouchableOpacity
          onPress={() => setHidePassword(!hidePassword)}
          //style={style.iconstyle}
          name={
            hidePassword ? (
              <Image style={style.Imagestyle} source={CustomImages.left} />
            ) : (
              <Image style={style.Imagestyle} source={CustomImages.left} />
            )
          }></TouchableOpacity>*/}
      </View>
    </View>
  );
};
export default Test;

const style = StyleSheet.create({
  Imagestyle: {
    height: 20,
    width: 20,
    tintColor: AppColor.f1,
  },
  iconstyle: {
    color: AppColor.f1,
    fontSize: fontSize.h5,
  },

  label: {
    // marginVertical: 5,
    // fontSize: 14,
    // color: AppColor.darkGrey,
    fontWeight: 'bold',
    marginTop: horizScale(10),
    marginHorizontal: horizScale(15),
  },
  inputContainer: {
    height: 55,
    backgroundColor: AppColor.f4,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: horizScale(20),
    // borderWidth: horizScale(1.5),
    // marginTop: horizScale(10),
    // marginHorizontal: horizScale(15),
    // paddingHorizontal: horizScale(10),
    // borderRadius: horizScale(10),
  },
});
