import {View, Text, StyleSheet} from 'react-native';
import {styles} from './styles';
const Error = ({message}) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.errorText}>{message}</Text>
    </View>
  );
};

export default Error;
