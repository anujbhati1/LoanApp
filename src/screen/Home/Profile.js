import {
  View,
  Text,
  Alert,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../utils/AppColor';
import {horizScale} from '../utils/Layouts';
import {CustomImages} from '../utils/CustomImages';
import {fontSize} from '../utils/fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Loader from '../utils/Loader';
import * as ImagePicker from 'react-native-image-picker';

function Profile(props) {
  const [imageUri, setimageUri] = useState(
    Image.resolveAssetSource(require('../../../assets/icons/profile.png')).uri,
  );
  const imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    console.log('hii======>');

    ImagePicker.launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.errorCode || res.errorMessage) {
        console.log(
          'ImagePicker Error: ',
          res.errorCode + ' ' + res.errorMessage,
        );
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);

        alert(res.customButton);
      } else if (res.assets) {
        const source = res.assets[0];
        console.log('User sucessfully image pick===>>>', source.uri);
        setimageUri(source.uri);
      }
    });
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Loader loading={loading} />
      <StatusBar backgroundColor={AppColor.f1} barStyle="dark-content" />
      <ScrollView style={{marginBottom: horizScale(10)}}>
        <View style={{flexDirection: 'row', marginTop: horizScale(20)}}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{
              height: horizScale(30),
              width: horizScale(30),
              borderRadius: 15,
              backgroundColor: AppColor.f4,
              justifyContent: 'center',
              marginHorizontal: horizScale(20),
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: horizScale(20),
                width: horizScale(20),
                tintColor: AppColor.f2,
              }}
              source={CustomImages.left}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: fontSize.h6,
              color: AppColor.f5,
              fontWeight: '700',
            }}>
            User Profile
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              imageGalleryLaunch();
            }}
            style={{
              alignSelf: 'center',
              marginTop: horizScale(30),
            }}>
            <Image
              style={{
                height: horizScale(150),
                width: horizScale(150),
                borderRadius: 75,
                resizeMode: 'cover',
              }}
              source={{uri: imageUri}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.input}>
          <View style={styles.iconimageview}>
            <Image style={styles.inputimage} source={CustomImages.person} />
          </View>
          <TextInput
            value={name}
            style={styles.placeholder}
            placeholder="Name"
            placeholderTextColor="#808080"
            onChangeText={text => {
              setName(text);
            }}
          />
        </View>
        <View style={styles.input}>
          <View style={styles.iconimageview}>
            <Image style={styles.inputimage} source={CustomImages.email} />
          </View>
          <TextInput
            value={email}
            style={styles.placeholder}
            placeholder="Email"
            placeholderTextColor="#808080"
            onChangeText={text => {
              setEmail(text);
            }}
          />
        </View>
        <View style={styles.input}>
          <View style={styles.iconimageview}>
            <Image style={styles.inputimage} source={CustomImages.password} />
          </View>
          <TextInput
            value={password}
            autoCorrect={false}
            style={styles.placeholder}
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
          style={styles.loginview}
          onPress={() => {
            Alert.alert('Coming Soon');
          }}>
          <Text style={styles.logintext}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.replace('Auth');
          }}
          style={{
            flexDirection: 'row',
            marginHorizontal: horizScale(20),
            marginTop: horizScale(40),
          }}>
          <View style={styles.logoutimageview}>
            <Image style={styles.logout} source={CustomImages.logout} />
          </View>
          <View style={{marginLeft: horizScale(20)}}>
            <Text
              style={{
                fontSize: fontSize.h6,
                color: AppColor.f5,
                fontWeight: '600',
              }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  logoutimageview: {
    height: horizScale(40),
    width: horizScale(40),
    borderRadius: 20,
    backgroundColor: AppColor.f4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logout: {
    height: 20,
    width: 20,
    tintColor: AppColor.f1,
  },
  iconimageview: {
    marginTop: horizScale(18),
    height: horizScale(30),
    width: horizScale(30),
    borderRadius: 15,
    backgroundColor: AppColor.f4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  placeholder: {
    marginLeft: horizScale(10),
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
    tintColor: AppColor.f1,
  },
  input: {
    height: horizScale(60),
    paddingHorizontal: horizScale(20),
    borderRadius: 10,
    marginTop: horizScale(40),
    backgroundColor: AppColor.f18,
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
