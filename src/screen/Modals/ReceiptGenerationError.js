import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppColor} from '../utils/AppColor';
import {fontSize, fontWeight} from '../utils/fonts';
import {horizScale, vertScale} from '../utils/Layouts';

function ReceiptGenerationError() {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Modal
        style={styles.view}
        animationIn="slideInUp"
        onBackdropPress={() => setModalVisible(false)}
        isVisible={isModalVisible}>
        <View style={styles.modalView}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={100}
            color={AppColor.f19}
          />
          <Text style={styles.ModalText}>
            Your need to enter the cash denomination to submit
          </Text>
          <TouchableOpacity style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Ok</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default ReceiptGenerationError;
const styles = StyleSheet.create({
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
    fontSize: fontSize.input,
    fontWeight: fontWeight.w5,
    color: AppColor.f11,
    textAlign: 'center',
    marginHorizontal: horizScale(10),
  },
  modalView: {
    flex: 0.4,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 16,
    padding: horizScale(20),
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
