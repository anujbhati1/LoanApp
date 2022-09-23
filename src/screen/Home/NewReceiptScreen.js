import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {AppColor} from '../utils/AppColor';
import {horizScale, vertScale} from '../utils/Layouts';
import {fontSize, fontWeight} from '../utils/fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CashDenominationModal from '../Components/CashDenominationModal';

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

const GroupItem = ({id, name, mobile, outstandingAmount, emi}) => {
  let displayName = name
    .match(/\b(\w)/g)
    .join('')
    .toString()
    .toUpperCase()
    .slice(0, 2);
  const [enteredAmount, setEnteredAmount] = useState('');
  return (
    <View style={styles.containerView}>
      <View style={styles.receiptsCards}>
        <View style={styles.iconName}>
          <Text style={styles.contactIconN}>{displayName}</Text>
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
        <TextInput
          placeholder="Enter Amount"
          style={styles.inputAmount}
          onChangeText={e => setEnteredAmount(e)}
          value={enteredAmount}
        />
        <TouchableOpacity>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const NewReceiptScreen = ({navigation}) => {
  const [modalCase, setmodalCase] = useState(false);
  const [caseDenominationDone, setcaseDenominationDone] = useState(false);
  const renderGroupItem = ({item}) => (
    <GroupItem
      name={item.name}
      mobile={item.mobile}
      serialNumber={item.serialNumber}
      outstandingAmount={item.outstandingAmount}
      emi={item.emi}
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
      <ScrollView>
        <FlatList
          data={groupData}
          renderItem={renderGroupItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.checkInCard}>
          <Text style={styles.checkInText}>Cash Denomination</Text>
          <TouchableOpacity
            onPress={() => {
              setmodalCase(true);
            }}
            style={styles.checkInButton}>
            <Text style={styles.checkInButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.createButton}>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              if (caseDenominationDone) {
                navigation.navigate('ReceiptReviewScreen');
              } else {
                setmodalCase(true);
              }
            }}>
            <Text style={styles.modalButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <CashDenominationModal
        visible={modalCase}
        callbackModel={value => {
          setmodalCase(value);
        }}
        callbackDenomination={value => {
          setcaseDenominationDone(value);
        }}
      />
    </SafeAreaView>
  );
};

export default NewReceiptScreen;

const styles = StyleSheet.create({
  contactIconN: {
    height: horizScale(50),
    width: horizScale(50),
    backgroundColor: AppColor.f24,
    color: AppColor.f1,
    textAlign: 'center',
    paddingTop: horizScale(14),
    borderRadius: horizScale(25),
    marginRight: vertScale(20),
  },
  checkInCard: {
    marginTop: horizScale(10),
    height: horizScale(80),
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: horizScale(30),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: AppColor.f23,
  },
  checkInText: {
    fontWeight: fontWeight.w7,
    color: AppColor.f22,
  },
  checkInButton: {
    backgroundColor: AppColor.f4,
    paddingHorizontal: horizScale(30),
    paddingVertical: horizScale(10),
    borderRadius: horizScale(10),
  },
  checkInButtonText: {
    color: AppColor.f1,
    fontWeight: fontWeight.w4,
    fontSize: fontSize.cardText,
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
    justifyContent: 'space-around',
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
