import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import Modal from 'react-native-modal';
import Denomination from '../Components/Denomination';
import PendingReceiptsDetails from '../Components/PendingReceiptsDetails';
import {AppColor} from '../utils/AppColor';
import {fontSize, fontWeight} from '../utils/fonts';
import {horizScale, vertScale} from '../utils/Layouts';

function CheckoutModal(props) {
  return (
    <View style={{flex: 1}}>
      <Modal
        style={styles.view}
        animationIn="slideInUp"
        onBackButtonPress={() => props.callbackModel(false)}
        onBackdropPress={() => props.callbackModel(false)}
        isVisible={props.visible}>
        <View style={styles.modalView}>
          <View style={styles.amountView}>
            <Text style={styles.totalText}>Total Amount</Text>
            <Text style={styles.totalAmount}>₹4,500</Text>
          </View>
          <PendingReceiptsDetails />
          <Denomination />
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Coming Soon');
            }}
            style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Checkout </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default CheckoutModal;
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
    width: '100%',
    height: horizScale(89),
    borderRadius: fontSize.regular,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton: {
    backgroundColor: AppColor.f4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: vertScale(56),
    borderRadius: horizScale(16),
  },
  modalButtonText: {
    color: AppColor.f1,
    fontWeight: fontWeight.w5,
    fontSize: fontSize.medium,
  },
  modalView: {
    flex: 0.8,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 16,
    width: '100%',
    padding: horizScale(20),
  },
  view: {
    justifyContent: 'center',
  },
});
