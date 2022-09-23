import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {AppColor} from '../utils/AppColor';
import {horizScale} from '../utils/Layouts';
import {fontSize, fontWeight} from '../utils/fonts';

const DenominationData = [
  {
    id: 1,
    value: 10,
    number: 1,
  },
  {
    id: 2,
    value: 20,
    number: 3,
  },
  {
    id: 3,
    value: 50,
    number: 4,
  },
  {
    id: 1,
    value: 100,
    number: 1,
  },
  {
    id: 1,
    value: 200,
    number: 1,
  },
  {
    id: 2,
    value: 500,
    number: 3,
  },
  {
    id: 3,
    value: 2000,
    number: 4,
  },
];

const CashDenomination = () => {
  return (
    <SafeAreaView style={{width: '100%', height: '70%'}}>
      <FlatList
        data={DenominationData}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={styles.detailsRow}>
              <Text style={styles.detailsData}>₹{item.value} </Text>
              <TextInput placeholder="x1" style={styles.numberInput} />
              <Text style={styles.detailsData}>
                ₹{item.value * item.number}
              </Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default CashDenomination;

const styles = StyleSheet.create({
  numberInput: {
    backgroundColor: AppColor.f1,
    borderRadius: fontSize.pis,
    width: 85,
    textAlign: 'center',
  },
  detailsData: {
    color: AppColor.f9,
    padding: horizScale(10),
    fontSize: fontSize.medium,
    fontWeight: fontWeight.w7,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: AppColor.f8,
    margin: horizScale(5),
    padding: horizScale(10),
    borderRadius: fontSize.pis,
  },
  rowText: {
    color: AppColor.f1,
    padding: horizScale(10),
    fontSize: fontSize.f13,
    fontWeight: fontWeight.w5,
  },
  viewRow: {
    backgroundColor: AppColor.f4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
