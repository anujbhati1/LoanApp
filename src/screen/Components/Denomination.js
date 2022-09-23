import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColor} from '../utils/AppColor';
import {horizScale} from '../utils/Layouts';
import {fontSize, fontWeight} from '../utils/fonts';

const DenominationData = [
  {
    id: 1,
    value: 100,
    number: 1,
  },
  {
    id: 2,
    value: 500,
    number: 3,
  },
  {
    id: 3,
    value: 1000,
    number: 4,
  },
  {
    id: 1,
    value: 100,
    number: 1,
  },
  {
    id: 2,
    value: 500,
    number: 3,
  },
  {
    id: 3,
    value: 1000,
    number: 4,
  },
];

const Denomination = () => {
  return (
    <SafeAreaView style={{width: '100%', height: '30%'}}>
      <View style={styles.viewRow}>
        <Text style={styles.rowText}>Denomination</Text>
        <Text style={styles.rowText}>No</Text>
        <Text style={styles.rowText}>Total</Text>
      </View>
      <FlatList
        data={DenominationData}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={{width: '100%'}}>
              <View style={styles.detailsRow}>
                <Text style={styles.detailsData}>₹{item.value} </Text>
                <Text style={styles.detailsData}>x{item.number}</Text>
                <Text style={styles.detailsData}>
                  ₹{item.value * item.number}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Denomination;

const styles = StyleSheet.create({
  detailsData: {
    color: AppColor.f9,
    padding: horizScale(10),
    fontSize: fontSize.medium,
    fontWeight: fontWeight.w7,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '112.1%',
    right: '11.2%',
  },
});
