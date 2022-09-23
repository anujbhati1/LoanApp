import {
  View,
  Text,
  Alert,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
import {AppColor} from '../utils/AppColor';
import {horizScale, vertScale} from '../utils/Layouts';
import {fontSize, fontWeight} from '../utils/fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OnlineStatus from '../Components/OnlineStatus';

const AllocatedGroupsData = [
  {
    id: 1,
    name: 'Group 1',
  },
  {
    id: 2,
    name: 'Group 2',
  },
  {
    id: 3,
    name: 'Group 3',
  },
  {
    id: 4,
    name: 'Group 4',
  },
];

const RecentReceiptsData = [
  {
    id: 1,
    name: 'Arun maheswari',
    number: 1234,
    amount: '120,90',
    date: '18 Sep, 09:39 AM',
  },
  {
    id: 2,
    name: 'Ilya Vasil',
    number: 45678,
    amount: '120,90',
    date: '18 Sep, 09:39 AM',
  },
  {
    id: 3,
    name: 'Shamsil',
    number: 67677,
    amount: '120,90',
    date: '18 Sep, 09:39 AM',
  },
  {
    id: 4,
    name: 'Radhika Singh',
    number: 3432,
    amount: '120,90',
    date: '18 Sep, 09:39 AM',
  },
];

const Groups = ({name}) => (
  <View style={styles.groupStyle}>
    <View style={styles.flexRow}>
      <MaterialCommunityIcons name="circle-medium" size={20} color={'green'} />
      <Text style={styles.groupText}>{name}</Text>
    </View>
  </View>
);

const RecentReceipts = ({name, number, amount, date}) => {
  let displayName = name
    .match(/\b(\w)/g)
    .join('')
    .toString()
    .toUpperCase()
    .slice(0, 2);
  return (
    <View style={styles.contact}>
      <View style={styles.contactInfo}>
        <Text style={styles.contactIcon}>{displayName}</Text>
        <View>
          <Text style={styles.contactName}>{name}</Text>
          <Text style={styles.contactNumber}>No: {number}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.contactPayment}>₹{amount}</Text>
        <Text style={styles.contactDate}>{date}</Text>
      </View>
    </View>
  );
};

const Home = ({navigation}) => {
  const renerGroups = ({item}) => <Groups name={item.name} />;
  const renderRecentReceipts = ({item}) => (
    <RecentReceipts
      name={item.name}
      number={item.number}
      amount={item.amount}
      date={item.date}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={AppColor.f1} barStyle={'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.screenContainer}>
          <View style={styles.headerGreeting}>
            <View>
              <Text style={styles.textGreet}>Good morning,</Text>
              <Text style={styles.userName}>Parkash Dev</Text>
            </View>
            <View>
              <OnlineStatus />
            </View>
          </View>
          <View style={styles.cardView}>
            <View style={styles.cardLeft}>
              <Text style={styles.cardText}>Collected Amount</Text>
              <View style={styles.InsideCardView}>
                <MaterialCommunityIcons
                  name="arrow-top-right-bold-box"
                  size={20}
                  color={'green'}
                />
                <Text style={styles.boxText}>₹4,500</Text>
              </View>
            </View>
            <View style={styles.cardRight}>
              <Text style={styles.cardText}>Outstanding Amoount</Text>
              <View style={styles.InsideCardView}>
                <MaterialCommunityIcons
                  name="arrow-bottom-right-bold-box"
                  size={20}
                  color={'green'}
                />
                <Text style={styles.boxText}>₹1,691</Text>
              </View>
            </View>
          </View>
          <View style={styles.groupContainer}>
            <Text style={styles.groupHeading}>Allocated Groups</Text>
            <FlatList
              data={AllocatedGroupsData}
              renderItem={renerGroups}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.checkInCard}>
            <Text style={styles.checkInText}>Your not Checked-In</Text>
            <TouchableOpacity
              style={styles.checkInButton}
              onPress={() => {
                navigation.navigate('checkoutScreen');
              }}>
              <Text style={styles.checkInButtonText}>Check In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.recentReceipts}>
            <Text style={styles.recentText}>Recent Receipts</Text>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Coming Soon');
              }}>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={RecentReceiptsData}
          renderItem={renderRecentReceipts}
          keyExtractor={item => item.id}
        />
      </ScrollView>
      <View style={styles.twoButtons}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Coming Soon');
          }}>
          <MaterialCommunityIcons
            name="tray-arrow-up"
            size={30}
            color={'white'}
            style={styles.homeIcons}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Coming Soon');
          }}>
          <MaterialCommunityIcons
            name="plus"
            size={30}
            color={'white'}
            style={styles.homeIcons}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeIcons: {
    backgroundColor: AppColor.f4,
    padding: horizScale(10),
    borderRadius: horizScale(50),
    marginHorizontal: horizScale(7),
  },
  twoButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: horizScale(10),
    alignSelf: 'center',
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
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: horizScale(15),
  },
  cardLeft: {
    height: horizScale(96),
    width: horizScale(170),
    borderRadius: horizScale(16),
    backgroundColor: AppColor.f8,
  },
  cardRight: {
    height: horizScale(96),
    width: horizScale(170),
    borderRadius: horizScale(16),
    backgroundColor: AppColor.f8,
    alignItems: 'center',
  },
  cardText: {
    fontWeight: fontWeight.w6,
    fontSize: fontSize.cardText,
    alignSelf: 'center',
    margin: horizScale(10),
    fontWeight: fontWeight.w6,
  },
  InsideCardView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: fontSize.userName,
    fontWeight: fontWeight.w8,
    color: AppColor.f9,
    marginLeft: 10,
  },
  groupContainer: {
    marginTop: horizScale(20),
  },
  groupHeading: {
    fontSize: fontSize.regular,
    color: AppColor.f11,
  },
  groupStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: horizScale(20),
    marginHorizontal: horizScale(10),
    paddingHorizontal: horizScale(16),
    width: horizScale(100),
    height: horizScale(40),
    backgroundColor: AppColor.f10,
    borderRadius: fontSize.regular,
  },
  groupText: {
    fontSize: fontSize.groupText,
  },
  checkInCard: {
    backgroundColor: AppColor.f8,
    marginTop: horizScale(20),
    height: horizScale(100),
    width: '100%',
    borderRadius: fontSize.regular,
    flexDirection: 'row',
    paddingHorizontal: horizScale(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkInText: {
    fontWeight: fontWeight.w7,
  },
  checkInButton: {
    backgroundColor: AppColor.f4,
    fontSize: fontSize.tiny,
    padding: horizScale(10),
    borderRadius: horizScale(10),
  },
  checkInButtonText: {
    color: AppColor.f1,
    fontWeight: fontWeight.w7,
  },
  recentReceipts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: horizScale(20),
  },
  recentText: {
    fontSize: fontSize.input,
    fontWeight: fontWeight.w8,
    color: AppColor.f9,
  },
  seeAll: {
    fontSize: fontSize.regular,
    fontWeight: fontWeight.w5,
    color: AppColor.f4,
  },
  contact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: horizScale(15),
    marginHorizontal: horizScale(20),
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactIcon: {
    height: horizScale(50),
    width: horizScale(50),
    backgroundColor: AppColor.f6,
    textAlign: 'center',
    paddingTop: horizScale(14),
    borderRadius: horizScale(25),
    marginRight: vertScale(20),
  },
  contactName: {
    fontSize: fontSize.medium,
    fontWeight: fontWeight.w7,
    color: AppColor.f9,
  },
  contactPayment: {
    fontSize: fontSize.medium,
    fontWeight: fontWeight.w7,
    color: AppColor.f9,
    textAlign: 'right',
  },
  contactDate: {
    fontSize: fontSize.small,
    fontWeight: fontWeight.w4,
    color: AppColor.f12,
  },
});
