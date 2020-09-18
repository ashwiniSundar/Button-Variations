//Modal component to show the user there device details
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Platform,
} from 'react-native';
import React, {Component} from 'react';

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let loadModal = this.props.loadModal;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={loadModal}
        onRequestClose={() => {}}>
        <View
          style={[
            styles.modalContainer,
            Platform.OS !== 'ios'
              ? styles.editInputBoxAndroid
              : styles.editInputBoxIos,
          ]}>
          <View style={styles.innerContainer}>
            <View style={styles.headingSection}>
              <Text style={styles.headingText}>{this.props.heading}</Text>
              {this.props.subHeader && (
                <Text style={styles.subheadingText}>
                  {this.props.subHeader}
                </Text>
              )}
              {this.props.subHeading && (
                <Text style={styles.subheadingText}>
                  {this.props.subHeading}
                </Text>
              )}
            </View>
            <View style={styles.commentInputSection}>
              <Text style={styles.privacyContent}>{this.props.body}</Text>
            </View>
            <View
              style={[styles.buttonContainer, {backgroundColor: '#4646ff'}]}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => {
                  this.props.onCancelAction('cancel', '');
                }}>
                <Text style={[styles.cancelBtnTxt, {color: '#F8F8F8'}]}>
                  {'Cancel'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  editInputBoxAndroid: {
    paddingTop: 10,
    justifyContent: 'center',
  },
  editInputBoxIos: {
    paddingTop: 30,
  },
  innerContainer: {
    backgroundColor: '#F8F8F8',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  headingSection: {
    marginVertical: 15,
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  headingText: {
    fontSize: 18,
    textAlign: 'center',
  },
  subheadingText: {
    fontSize: 16,
    textAlign: 'center',
  },
  commentInputSection: {
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  privacyContent: {
    padding: 5,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: '#4646ff',
    marginTop: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 5,
  },
  cancelBtn: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 5,
  },
  cancelBtnTxt: {
    color: '#F8F8F8',
    fontSize: 18,
    alignContent: 'center',
    textAlign: 'center',
    paddingVertical: 5,
  },
});
