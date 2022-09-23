import React, {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {AppColor} from '../utils/AppColor';
import {fontSize, fontWeight} from '../utils/fonts';
import {horizScale, vertScale} from '../utils/Layouts';
import CashDenomination from './CashDenomination';

function CashDenominationModal(props) {
  return (
    <View style={{flex: 1}}>
      <Modal
        style={styles.view}
        animationIn="slideInUp"
        onBackButtonPress={() => props.callbackModel(false)}
        onBackdropPress={() => props.callbackModel(false)}
        isVisible={props.visible}>
        <View style={styles.modalView}>
          <Text style={styles.ModalText}>Received Denomination</Text>
          <CashDenomination />
          <View style={styles.viewRow}>
            <Text style={styles.rowText}>Total Amount</Text>
            <Text style={styles.rowText}>₹5400</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.callbackModel(false);
              props.callbackDenomination(true);
            }}
            style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default CashDenominationModal;
const styles = StyleSheet.create({
  rowText: {
    color: AppColor.f9,
    padding: horizScale(10),
    fontSize: fontSize.medium,
    fontWeight: fontWeight.w7,
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: horizScale(10),
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
  ModalText: {
    fontSize: fontSize.modal,
    fontWeight: fontWeight.w7,
    color: AppColor.f11,
    textAlign: 'center',
    marginHorizontal: horizScale(10),
    marginVertical: horizScale(10),
  },
  modalView: {
    flex: 0.9,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 16,
    padding: horizScale(20),
  },
  view: {
    justifyContent: 'center',
    margin: horizScale(20),
  },
});
