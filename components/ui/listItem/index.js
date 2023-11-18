import {View, Text, Image} from 'react-native';
import {styles} from './styles';

const ListItem = ({source, title}) => {
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.iconContainer}>
        <Image style={styles.iconImage} source={source} />
      </View>
      <View style={styles.listTextContainer}>
        <Text style={styles.listText}>{title}</Text>
      </View>
    </View>
  );
};

export default ListItem;
