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
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Loader loading={loading} />
      <StatusBar backgroundColor={AppColor.f1} barStyle="dark-content" />
      <ScrollView>
        <View style={styles.imageview}></View>
        <View style={styles.textview}>
          <Text style={styles.firsttext}>Hii,Welcome Back!</Text>
          <Text style={styles.secondtext}>Sign In to your account.</Text>
        </View>
        <View style={styles.input}>
          <View style={{marginTop: horizScale(20)}}>
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
            value={password}
            autoCorrect={false}
            placeholder="Password"
            placeholderTextColor="#808080"
            secureTextEntry={hidePassword}
            onChangeText={text => {
              setPassword(text);
            }}
          />
          <MaterialCommunityIcons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={styles.iconstyle}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('forgotpassword');
          }}
          style={styles.passwordview}>
          <Text style={styles.passwordtext}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginview}
          onPress={() => {
            navigation.replace('TabHome');
          }}>
          <Text style={styles.logintext}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.orfirstview}>
          <View style={styles.orsecondview} />
          <Text style={styles.ortext}>OR</Text>
          <View style={styles.orsecondview} />
        </View>
        <View style={styles.mainviewfirst}>
          <TouchableOpacity
            onPress={() => {
              alert('coming soon');
            }}
            style={styles.mainsecondview}>
            <Image source={CustomImages.google} style={styles.gfimage} />
            <View style={{marginLeft: horizScale(10)}}>
              <Text
                style={{
                  color: AppColor.f6,
                }}>
                Google
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert('coming soon');
            }}
            style={styles.mainsecondview}>
            <Image source={CustomImages.facebook} style={styles.gfimage} />
            <View style={{marginLeft: horizScale(10)}}>
              <Text
                style={{
                  color: AppColor.f6,
                }}>
                FaceBook
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.simpletextview}>
          <Text style={styles.simpletext}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('signup');
            }}>
            <Text
              style={{
                fontSize: fontSize.regular,
                color: AppColor.f4,
                fontWeight: '600',
              }}>
              {' '}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  gfimage: {
    height: horizScale(25),
    width: horizScale(25),
  },
  mainsecondview: {
    borderRadius: 20,
    height: horizScale(50),
    width: horizScale(150),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: horizScale(20),
    marginLeft: horizScale(20),
    borderWidth: 1,
    borderColor: AppColor.f7,
  },
  mainviewfirst: {
    flexDirection: 'row',
    marginTop: horizScale(50),
    marginHorizontal: horizScale(20),
  },
  ortext: {
    textAlign: 'center',
    color: AppColor.f6,
    fontWeight: '500',
  },
  orsecondview: {
    backgroundColor: AppColor.f6,
    width: '30%',
    height: horizScale(1),
    marginHorizontal: horizScale(20),
  },
  orfirstview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: horizScale(30),
  },
  simpletext: {
    textAlign: 'center',
    fontSize: fontSize.regular,
    color: AppColor.f6,
    fontWeight: '500',
  },
  simpletextview: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: horizScale(30),
  },

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
