import {StyleSheet, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {AppColor} from '../utils/AppColor';
import {horizScale} from '../utils/Layouts';
import {CustomImages} from '../utils/CustomImages';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('login');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.btnImage} source={CustomImages.splash} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  btnImage: {
    height: horizScale(250),
    width: horizScale(250),
    marginLeft: horizScale(10),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColor.f4,
  },
});
