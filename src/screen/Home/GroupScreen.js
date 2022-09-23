import {
  View,
  Text,
  Alert,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import {AppColor} from '../utils/AppColor';
import {horizScale, vertScale} from '../utils/Layouts';
import {fontSize, fontWeight} from '../utils/fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OnlineStatus from '../Components/OnlineStatus';

const groupData = [
  {
    id: 1,
    serialNumber: 'CS0001',
    name: 'John Doe',
    mobile: '+9112345678',
    outstandingAmount: 4500,
  },
  {
    id: 2,
    serialNumber: 'CS0002',
    name: 'John Doe',
    mobile: '+9112345678',
    outstandingAmount: 4500,
  },
  {
    id: 3,
    serialNumber: 'CS0003',
    name: 'John Doe',
    mobile: '+9112345678',
    outstandingAmount: 4500,
  },
  {
    id: 4,
    serialNumber: 'CS0004',
    name: 'John Doe',
    mobile: '+9112345678',
    outstandingAmount: 4500,
  },
  {
    id: 5,
    serialNumber: 'CS0005',
    name: 'John Doe',
    mobile: '+9112345678',
    outstandingAmount: 4500,
  },
  {
    id: 6,
    serialNumber: 'CS0005',
    name: 'John Doe',
    mobile: '+9112345678',
    outstandingAmount: 4500,
  },
  {
    id: 7,
    serialNumber: 'CS0005',
    name: 'John Doe',
    mobile: '+9112345678',
    outstandingAmount: 4500,
  },
];

const GroupItem = ({id, serialNumber, name, mobile, outstandingAmount}) => (
  <View style={styles.receiptsCards}>
    <View style={styles.iconName}>
      <MaterialCommunityIcons
        name="account-multiple-outline"
        size={25}
        color={'white'}
        style={styles.contactIcon}
      />
      <View>
        <Text style={styles.contactId}>{serialNumber}</Text>
        <Text>{name}</Text>
        <Text>{mobile}</Text>
      </View>
    </View>
    <View>
      <View>
        <Text>Outstanding amount</Text>
        <Text style={styles.amount}>{outstandingAmount}</Text>
      </View>
      <View style={styles.receiptButton}>
        <TouchableOpacity
          style={styles.createReceiptsFlex}
          onPress={() => {
            Alert.alert('Coming Soon');
          }}>
          <Text style={styles.createReceipt}>Create receipt </Text>
          <MaterialCommunityIcons
            name="chevron-right"
            size={15}
            color={'green'}
          />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const GroupScreen = ({navigation}) => {
  const renderGroupItem = ({item}) => (
    <GroupItem
      name={item.name}
      mobile={item.mobile}
      serialNumber={item.serialNumber}
      outstandingAmount={item.outstandingAmount}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <View style={styles.headerGreeting}>
          <View>
            <Text style={styles.userName}>Groups</Text>
          </View>
          <View>
            <OnlineStatus />
          </View>
        </View>
        <View style={styles.searchBox}>
          <MaterialCommunityIcons name="magnify" size={25} color={'black'} />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
      </View>
      <FlatList
        data={groupData}
        renderItem={renderGroupItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default GroupScreen;

const styles = StyleSheet.create({
  createReceiptsFlex: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  receiptButton: {
    top: horizScale(10),
  },
  container: {
    flex: 1,
    backgroundColor: AppColor.f1,
  },
  screenContainer: {
    padding: horizScale(20),
  },
  headerGreeting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: horizScale(15),
  },
  textGreet: {
    fontSize: fontSize.regular,
    color: AppColor.f6,
  },
  userName: {
    fontSize: fontSize.userName,
    fontWeight: fontWeight.w7,
    color: AppColor.f5,
  },
  searchBox: {
    marginTop: horizScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColor.f10,
    borderRadius: horizScale(10),
    paddingVertical: horizScale(5),
    paddingHorizontal: horizScale(20),
  },
  searchInput: {
    fontSize: fontSize.medium,
  },
  receiptsCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizScale(20),
    backgroundColor: AppColor.f8,
    padding: horizScale(20),
    borderRadius: horizScale(16),
    marginVertical: horizScale(6),
  },
  iconName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactIcon: {
    backgroundColor: AppColor.f4,
    padding: horizScale(10),
    borderRadius: horizScale(10),
    marginRight: horizScale(20),
  },
  contactId: {
    fontSize: fontSize.medium,
    fontWeight: fontWeight.w8,
    color: AppColor.f9,
  },
  amount: {
    textAlign: 'right',
    fontSize: fontSize.userName,
    fontWeight: fontWeight.w8,
    color: AppColor.f9,
  },
  createReceipt: {
    textAlign: 'right',
    fontSize: fontSize.tiny,
    fontWeight: fontWeight.w6,
    color: AppColor.f4,
  },
});
