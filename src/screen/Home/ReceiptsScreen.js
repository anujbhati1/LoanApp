import {
  View,
  Text,
  Alert,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {AppColor} from '../utils/AppColor';
import {horizScale, vertScale} from '../utils/Layouts';
import {fontSize, fontWeight} from '../utils/fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OnlineStatus from '../Components/OnlineStatus';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="All Receipts"
      screenOptions={{
        tabBarActiveTintColor: AppColor.f9,
        tabBarLabelStyle: {fontSize: fontSize.groupText},
        tabBarIndicatorStyle: {backgroundColor: AppColor.f16, height: 3},
      }}>
      <Tab.Screen
        name="All Receipts"
        component={ReceiptsDetails}
        options={{tabBarLabel: 'All Receipts'}}
      />
      <Tab.Screen
        name="Pending Receipts"
        component={PendingReceiptsDetails}
        options={{tabBarLabel: 'Pending Receipts'}}
      />
    </Tab.Navigator>
  );
}

const ReceiptsData = [
  {
    id: 1,
    name: 'Arun maheswari',
    number: 1234,
    amount: '4,500',
    submitted: false,
  },
  {
    id: 2,
    name: 'Ilya Vasil',
    number: 45678,
    amount: '4,500',
    submitted: true,
  },
  {
    id: 3,
    name: 'Shamsil s s',
    number: 67677,
    amount: '4,500',
    submitted: false,
  },
  {
    id: 4,
    name: 'radhika Singh',
    number: 3432,
    amount: '4,500',
    submitted: true,
  },
  {
    id: 5,
    name: 'Arun maheswari',
    number: 1234,
    amount: '4,500',
    submitted: false,
  },
  {
    id: 6,
    name: 'Ilya Vasil',
    number: 45678,
    amount: '4,500',
    submitted: true,
  },
  {
    id: 7,
    name: 'Shamsil s',
    number: 67677,
    amount: '4,500',
    submitted: false,
  },
  {
    id: 8,
    name: 'radhika Singh',
    number: 3432,
    amount: '4,500',
    submitted: true,
  },
];

const ReceiptsDetails = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: AppColor.f1,
        flex: 1,
      }}>
      <FlatList
        data={ReceiptsData}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          let displayName = item.name
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
                  <Text style={styles.contactName}>{item.name}</Text>
                  <Text style={styles.contactNumber}>No: {item.number}</Text>
                </View>
              </View>
              <View>
                <Text style={styles.contactPayment}>₹{item.amount}</Text>
                <Text
                  style={{
                    ...styles.contactDate,
                    color: item.submitted ? AppColor.f16 : AppColor.f17,
                  }}>
                  {item.submitted ? 'Submitted' : 'Pending'}
                </Text>
                <View style={styles.shareView}>
                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert('Coming Soon');
                    }}
                    style={styles.shareView}>
                    <MaterialCommunityIcons
                      name="share-variant-outline"
                      size={12}
                      color={AppColor.f16}
                    />
                    <Text style={styles.textGreen}>Share</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert('Coming Soon');
                    }}
                    style={styles.shareView}>
                    <MaterialCommunityIcons
                      name="chevron-right"
                      size={20}
                      color={AppColor.f16}
                    />
                    <Text style={styles.textGreen}>View</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
      <View style={styles.createButton}>
        <TouchableOpacity
          style={styles.modalButton}
          onPress={() => {
            navigation.navigate('newReceiptScreen');
          }}>
          <Text style={styles.modalButtonText}>Create Receipt</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const PendingReceiptsDetails = () => {
  return (
    <SafeAreaView style={{backgroundColor: AppColor.f1, flex: 1}}>
      <View style={styles.amountView}>
        <Text style={styles.totalText}>Total Amount</Text>
        <Text style={styles.totalAmount}>₹4,500</Text>
      </View>
      <FlatList
        data={ReceiptsData}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          if (item.submitted == 0) {
            let displayName = item.name
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
                    <Text style={styles.contactName}>{item.name}</Text>
                    <Text style={styles.contactNumber}>No: {item.number}</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.contactPayment}>₹{item.amount}</Text>
                  <Text
                    style={{
                      ...styles.contactDate,
                      color: item.submitted ? AppColor.f16 : AppColor.f17,
                    }}>
                    {item.submitted ? 'Submitted' : 'Pending'}
                  </Text>
                  <View style={styles.shareView}>
                    <TouchableOpacity
                      onPress={() => {
                        Alert.alert('Coming Soon');
                      }}
                      style={styles.shareView}>
                      <MaterialCommunityIcons
                        name="share-variant-outline"
                        size={12}
                        color={AppColor.f16}
                      />
                      <Text style={styles.textGreen}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        Alert.alert('Coming Soon');
                      }}
                      style={styles.shareView}>
                      <MaterialCommunityIcons
                        name="chevron-right"
                        size={20}
                        color={AppColor.f16}
                      />
                      <Text style={styles.textGreen}>View</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }
        }}
      />
      <View style={styles.createButton}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Coming Soon');
          }}
          style={styles.modalButton}>
          <MaterialCommunityIcons
            name="tray-arrow-up"
            size={20}
            color={AppColor.f1}
          />
          <Text style={styles.modalButtonText}>Upload</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const ReceiptsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <View style={styles.headerGreeting}>
          <View>
            <Text style={styles.userName}>Receipts</Text>
          </View>
          <View>
            <OnlineStatus />
          </View>
        </View>
      </View>
      <MyTabs />
    </SafeAreaView>
  );
};

export default ReceiptsScreen;

const styles = StyleSheet.create({
  totalAmount: {
    fontSize: fontSize.userName,
    fontWeight: fontWeight.w8,
    color: AppColor.f11,
  },
  totalText: {
    fontSize: fontSize.regular,
    fontWeight: fontWeight.w6,
    color: AppColor.f21,
  },
  amountView: {
    backgroundColor: AppColor.f8,
    // width: '100%',
    marginHorizontal: horizScale(30),
    marginVertical: horizScale(30),
    height: horizScale(89),
    borderRadius: fontSize.regular,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButton: {
    margin: horizScale(20),
  },
  modalButton: {
    flexDirection: 'row',
    backgroundColor: AppColor.f4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: vertScale(56),
    borderRadius: horizScale(16),
  },
  modalButtonText: {
    color: AppColor.f1,
    fontWeight: fontWeight.w7,
    fontSize: fontSize.medium,
    marginLeft: horizScale(10),
  },
  textGreen: {
    color: AppColor.f16,
    fontSize: fontSize.tiny,
    fontWeight: fontWeight.w4,
  },
  shareView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: horizScale(10),
    top: 1,
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
    // marginVertical: horizScale(15),
  },
  userName: {
    fontSize: fontSize.userName,
    fontWeight: fontWeight.w7,
    color: AppColor.f5,
  },
  contactNumber: {
    fontWeight: fontWeight.w4,
    fontSize: fontSize.medium,
    color: AppColor.f12,
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
    fontWeight: fontWeight.w8,
    color: AppColor.f9,
    textAlign: 'right',
  },
  contactDate: {
    fontSize: fontSize.tiny,
    fontWeight: fontWeight.w7,
    color: AppColor.f12,
    textAlign: 'right',
  },
});
