import {View, Text, Button} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';
import BigRoundButton from '../../ui/bigRoundButton/index';
import DocumentPicker from 'react-native-document-picker';
import {MODAL_ICONS} from '../../../constants/assets';

const ImagePickerModal = ({
  isModalVisible,
  setModalVisible,
  setAvatarImage,
}) => {
  async function openCamera() {
    try {
      const result = await launchCamera({
        quality: 1,
        maxHeight: 1000,
        maxWidth: 1000,
        mediaType: 'photo',
        cameraType: 'back',
      });
      setAvatarImage(result.assets[0].uri);
    } catch (error) {
      console.log(error)
    }
    setModalVisible(false);
  }
  
  async function openGallery() {
    try {
      const result = await launchImageLibrary({
        quality: 1,
        maxHeight: 1000,
        maxWidth: 1000,
        mediaType: 'photo',
        cameraType: 'back',
      });
      setAvatarImage(result.assets[0].uri);
    } catch (error) {
      console.log(error)

    }
    setModalVisible(false);
  }

  async function openFilePicker() {
    try {
      const result = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      setAvatarImage(result.uri);
    } catch (error) {
      console.log(error)
      
    }
    setModalVisible(false);
  }
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={() => setModalVisible(false)}
      onSwipeComplete={() => setModalVisible(false)}
      onBackButtonPress={() => setModalVisible(false)}
      useNativeDriver={true}
      backdropOpacity={0.5}
      style={{marginHorizontal: 0, marginTop: 300}}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <BigRoundButton
          source={MODAL_ICONS.CAMERA}
          onPress={openCamera}
          size={50}
          label={'Camera'}
        />
        <BigRoundButton
          source={MODAL_ICONS.GALLERY}
          onPress={openGallery}
          size={50}
          label={'Gallery'}
        />
        <BigRoundButton
          source={MODAL_ICONS.FILE_MANAGER}
          onPress={openFilePicker}
          size={50}
          label={'File Manager'}
        />
      </View>
    </Modal>
  );
};

export default ImagePickerModal;
