import React, {useState} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppColor} from '../utils/AppColor';
import {fontSize, fontWeight} from '../utils/fonts';
import {horizScale, vertScale} from '../utils/Layouts';

function ReceiptGenerationStatus(props) {
  const [success, setSuccess] = useState(true);
  return (
    <View style={{flex: 1}}>
      <Modal
        style={styles.view}
        animationIn="slideInUp"
        onBackdropPress={() => {
          props.callBack(false);
        }}
        onBackButtonPress={() => {
          props.callBack(false);
        }}
        isVisible={props.visible}>
        <View style={styles.modalView}>
          <MaterialCommunityIcons
            name={success ? 'check-circle' : 'alert-circle'}
            size={100}
            color={success ? AppColor.f4 : AppColor.f20}
          />
          <Text style={styles.ModalText}>
            {success
              ? 'Receipt was created and uploaded to cloud'
              : 'Receipt has been created but we saved it locally since you are offline'}
          </Text>
          <View style={styles.buttonFlex}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Coming Soon');
              }}
              style={styles.modalButtonFlex}>
              <Text style={styles.modalButtonTextFlex}>Download PDF</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Coming Soon');
              }}
              style={styles.modalButtonFlex}>
              <Text style={styles.modalButtonTextFlex}>Share PDF</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              Alert.alert('Coming Soon');
            }}>
            <Text style={styles.modalButtonText}>Create Another</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

export default ReceiptGenerationStatus;
const styles = StyleSheet.create({
  buttonFlex: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButtonFlex: {
    backgroundColor: AppColor.f1,
    borderWidth: 1,
    borderColor: AppColor.f4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    height: vertScale(56),
    borderRadius: horizScale(16),
  },
  modalButtonTextFlex: {
    color: AppColor.f11,
    fontWeight: fontWeight.w5,
    fontSize: fontSize.medium,
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
    fontSize: fontSize.input,
    fontWeight: fontWeight.w5,
    color: AppColor.f11,
    textAlign: 'center',
    marginHorizontal: horizScale(10),
  },
  modalView: {
    flex: 0.5,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 16,
    padding: horizScale(20),
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
