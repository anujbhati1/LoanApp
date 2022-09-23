import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../utils/AppColor';
import {horizScale} from '../utils/Layouts';
import {CustomImages} from '../utils/CustomImages';
import {fontSize} from '../utils/fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Loader from '../utils/Loader';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [newpassword, setNewpassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword1, setHidePassword1] = useState(true);
  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Loader loading={loading} />
      <StatusBar backgroundColor={AppColor.f1} barStyle="dark-content" />
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <View style={styles.imageview}>
            <Image style={styles.image} source={CustomImages.left} />
          </View>
        </TouchableOpacity>

        <View style={styles.textview}>
          <Text style={styles.firsttext}>Hello, Set your new password!</Text>
        </View>
        <View style={styles.input}>
          <View style={{marginTop: horizScale(20), marginRight: horizScale(5)}}>
            <Image style={styles.inputimage} source={CustomImages.email} />
          </View>
          <TextInput
            value={email}
            placeholder="Email"
            placeholderTextColor="#808080"
            onChangeText={text => {
              setEmail(text);
            }}
          />
        </View>

        <View style={styles.input}>
          <View style={{marginTop: horizScale(20)}}>
            <Image style={styles.inputimage} source={CustomImages.password} />
          </View>
          <TextInput
            value={newpassword}
            autoCorrect={false}
            placeholder=" New Password"
            placeholderTextColor="#808080"
            secureTextEntry={hidePassword}
            onChangeText={text => {
              setNewpassword(text);
            }}
          />
          <MaterialCommunityIcons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={styles.iconstyle}
          />
        </View>

        <View style={styles.input}>
          <View style={{marginTop: horizScale(20)}}>
            <Image style={styles.inputimage} source={CustomImages.password} />
          </View>
          <TextInput
            value={confirm}
            autoCorrect={false}
            placeholder="Confirm Password"
            placeholderTextColor="#808080"
            secureTextEntry={hidePassword1}
            onChangeText={text => {
              setConfirm(text);
            }}
          />
          <MaterialCommunityIcons
            onPress={() => setHidePassword1(!hidePassword1)}
            name={hidePassword1 ? 'eye-outline' : 'eye-off-outline'}
            style={styles.iconstyle}
          />
        </View>

        <TouchableOpacity
          style={styles.loginview}
          onPress={() => {
            // setLoading(true);
            if (email === '' || email < 10) {
              ToastAndroid.showWithGravity(
                'Please Enter email ',
                ToastAndroid.BOTTOM,
                ToastAndroid.SHORT,
              );
            } else if (newpassword.length < 8) {
              ToastAndroid.showWithGravity(
                'Please eneter new password',
                ToastAndroid.BOTTOM,
                ToastAndroid.SHORT,
              );
            } else if (confirm.length < 8) {
              ToastAndroid.showWithGravity(
                'Please enetr Confirm password',
                ToastAndroid.BOTTOM,
                ToastAndroid.SHORT,
              );
            } else {
              setLoading(false);
              //login(); //api function call

              setTimeout(() => {
                setLoading(false);
                ToastAndroid.showWithGravity(
                  'Save your password reenter login',
                  ToastAndroid.BOTTOM,
                  ToastAndroid.SHORT,
                );
                navigation.navigate('login');
              }, 3000);
            }
          }}>
          <Text style={styles.logintext}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  iconstyle: {
    color: AppColor.f6,
    fontSize: fontSize.h5,
    position: 'absolute',
    right: horizScale(20),
    top: horizScale(20),
  },
  logintext: {
    color: AppColor.f2,
    textAlign: 'center',
    fontSize: fontSize.input,
  },
  loginview: {
    paddingBottom: horizScale(15),
    paddingTop: horizScale(15),
    backgroundColor: AppColor.f4,
    marginHorizontal: horizScale(60),
    borderRadius: 20,
    marginTop: horizScale(40),
    justifyContent: 'center',
  },
  passwordtext: {
    fontSize: fontSize.medium,
    color: AppColor.f4,
    fontWeight: '600',
  },
  passwordview: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginHorizontal: horizScale(20),
    marginTop: horizScale(20),
  },
  inputimage: {
    height: 18,
    width: 18,
    tintColor: AppColor.f6,
  },
  input: {
    height: horizScale(60),
    paddingHorizontal: horizScale(20),
    borderRadius: 10,
    marginTop: horizScale(50),
    backgroundColor: AppColor.f7,
    marginHorizontal: horizScale(20),
    flexDirection: 'row',
  },

  btnImage1: {
    height: horizScale(210),
    width: horizScale(300),
  },
  secondtext: {
    lineHeight: 30,
    fontSize: fontSize.regular,
    color: AppColor.f6,
    fontWeight: '500',
  },
  firsttext: {
    fontSize: fontSize.h5,
    color: AppColor.f5,
    fontWeight: '700',
  },
  textview: {
    marginTop: horizScale(20),
    marginHorizontal: horizScale(20),
  },
  image: {
    height: horizScale(20),
    width: horizScale(20),
  },
  imageview: {
    marginHorizontal: horizScale(20),
    marginTop: horizScale(20),
  },

  container: {
    flex: 1,
    backgroundColor: AppColor.f1,
  },
});
