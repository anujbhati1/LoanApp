import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../utils/AppColor';
import {horizScale, vertScale} from '../utils/Layouts';
import {fontSize, fontWeight} from '../utils/fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CashDenominationModal from '../Components/CashDenominationModal';
import ReceiptGenerationStatus from '../Modals/ReceiptGenerationStatus';

const groupData = [
  {
    id: 1,
    name: 'John Doe',
    mobile: '+9112345678',
    outstandingAmount: '4,500',
    emi: 600,
  },
  {
    id: 2,
    name: 'John Doe',
    mobile: '+9112345678',
    outstandingAmount: '4,500',
    emi: 800,
  },
];

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
];

const GroupItem = ({id, name, mobile, outstandingAmount, emi, navigation}) => (
  <View style={styles.containerView}>
    <View style={styles.receiptsCards}>
      <View style={styles.iconName}>
        <MaterialCommunityIcons
          name="account-multiple-outline"
          size={25}
          color={'white'}
          style={styles.contactIcon}
        />
        <View>
          <Text style={styles.recName}>{name}</Text>
          <Text style={styles.recMobile}>{mobile}</Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.outAmount}>Outstanding amount</Text>
          <Text style={styles.amount}>₹{outstandingAmount}</Text>
        </View>
        <View style={styles.createReceiptsFlex}>
          <Text style={styles.outAmount}>EMI: {emi}</Text>
        </View>
      </View>
    </View>
    <View style={styles.amountContainer}>
      <View>
        <Text style={styles.addAmount}>Added Amount</Text>
        <Text style={styles.amountAdd}>₹5,000</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('newReceiptScreen');
        }}>
        <MaterialCommunityIcons
          name="square-edit-outline"
          size={20}
          color={'white'}
          style={styles.editIcon}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const ReceiptReviewScreen = ({navigation}) => {
  const [modalCase, setmodalCase] = useState(false);
  const [receiptGenStatus, setReceiptGenStatus] = useState(false);
  const [caseDenominationDone, setcaseDenominationDone] = useState(false);
  const renderGroupItem = ({item}) => (
    <GroupItem
      name={item.name}
      mobile={item.mobile}
      serialNumber={item.serialNumber}
      outstandingAmount={item.outstandingAmount}
      emi={item.emi}
      navigation={navigation}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenContainer}>
        <View style={styles.headerGreeting}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <MaterialCommunityIcons
                name="arrow-left"
                size={30}
                color={'black'}
              />
            </TouchableOpacity>

            <Text style={styles.userName}>New Receipts</Text>
          </View>
        </View>
        <View style={styles.searchBox}>
          <MaterialCommunityIcons name="magnify" size={25} color={'black'} />
          <TextInput
            placeholder="Enter group code"
            style={styles.searchInput}
          />
        </View>
      </View>
      <FlatList
        data={groupData}
        renderItem={renderGroupItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      <Text style={styles.denomination}>Denomination</Text>
      <FlatList
        data={DenominationData}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.denoContainer}
        ListFooterComponent={() => {
          return (
            <View style={styles.editCreateButton}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => {
                  setmodalCase(true);
                }}>
                <Text style={styles.modalButtonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        renderItem={({item, index}) => {
          return (
            <View style={styles.detailsRow}>
              <Text style={styles.detailsData}>₹{item.value} </Text>
              <Text style={styles.detailsData}>x{item.number}</Text>
              <Text style={styles.detailsData}>
                ₹{item.value * item.number}
              </Text>
            </View>
          );
        }}
      />
      <View style={styles.createButton}>
        <TouchableOpacity
          style={styles.modalButton}
          onPress={() => {
            setReceiptGenStatus(true);
          }}>
          <Text style={styles.modalButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <CashDenominationModal
        visible={modalCase}
        callbackModel={value => {
          setmodalCase(value);
        }}
        callbackDenomination={value => {
          setcaseDenominationDone(value);
        }}
      />
      <ReceiptGenerationStatus
        visible={receiptGenStatus}
        callBack={value => {
          setReceiptGenStatus(value);
        }}
      />
    </SafeAreaView>
  );
};

export default ReceiptReviewScreen;

const styles = StyleSheet.create({
  editCreateButton: {
    margin: horizScale(20),
  },
  editButton: {
    flexDirection: 'row',
    backgroundColor: AppColor.f4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: vertScale(26),
    borderRadius: horizScale(8),
  },
  denoContainer: {
    backgroundColor: AppColor.f8,
    marginHorizontal: horizScale(17),
    paddingHorizontal: horizScale(17),
    borderRadius: horizScale(16),
    height: '30%',
  },
  denomination: {
    fontSize: fontSize.input,
    fontWeight: fontWeight.w7,
    color: AppColor.f9,
    marginHorizontal: horizScale(20),
    marginVertical: horizScale(10),
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
  },
  editIcon: {
    backgroundColor: AppColor.f4,
    padding: horizScale(5),
    borderRadius: horizScale(7),
  },
  amountAdd: {
    fontSize: fontSize.regular,
    fontWeight: fontWeight.w8,
    color: AppColor.f9,
  },
  addAmount: {
    fontSize: fontSize.tiny,
    fontWeight: fontWeight.w6,
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
  saveButton: {
    backgroundColor: AppColor.f4,
    paddingVertical: horizScale(20),
    paddingHorizontal: horizScale(30),
    borderRadius: horizScale(16),
    marginTop: horizScale(20),
    color: AppColor.f1,
    fontSize: fontSize.tiny,
    fontWeight: fontWeight.w6,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: horizScale(20),
  },
  inputAmount: {
    backgroundColor: AppColor.f1,
    paddingVertical: horizScale(10),
    paddingHorizontal: horizScale(30),
    borderRadius: horizScale(16),
    width: '68%',
    marginTop: horizScale(20),
  },
  containerView: {
    marginHorizontal: horizScale(20),
    backgroundColor: AppColor.f8,
    padding: horizScale(20),
    borderRadius: horizScale(16),
    marginVertical: horizScale(6),
  },
  outAmount: {
    fontSize: fontSize.tiny,
    color: AppColor.f21,
    fontWeight: fontWeight.w6,
  },
  recMobile: {
    color: AppColor.f12,
  },
  recName: {
    fontWeight: fontWeight.w7,
    color: AppColor.f9,
    fontSize: fontSize.medium,
  },
  createReceiptsFlex: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
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
    marginLeft: horizScale(10),
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: horizScale(30),
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
