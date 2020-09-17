import {Alert} from 'react-native';

export const CustomAlert = (titleTxt, bodyTxt, buttonTxt = 'OK') => {
  return Alert.alert(
    titleTxt,
    bodyTxt,
    [
      {
        text: buttonTxt,
        onPress: () => {},
      },
    ],
    {cancelable: true},
  );
};
