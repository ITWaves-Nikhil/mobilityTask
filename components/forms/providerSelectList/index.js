import {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from './styles';
import {PROVIDER_VALUES} from '../../../constants/enums';

const ProviderSelectList = ({providerType, onSelectItem}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(providerType);
  const [items, setItems] = useState([
    {label: 'SNF/ALF', value: PROVIDER_VALUES.SNF_ALF},
    {
      label: 'Medical Centers / OP Centers',
      value: PROVIDER_VALUES.Medical_Centers_OP_Centers,
    },
    {label: 'HMO', value: PROVIDER_VALUES.HMO},
    {label: 'Workers Comp', value: PROVIDER_VALUES.Workers_Comp},
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      disableBorderRadius={true}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={styles.buttonStyle}
      labelStyle={styles.fontStyle}
      listItemLabelStyle={styles.fontStyle}
      onSelectItem={onSelectItem}
      dropDownContainerStyle={styles.dropDownBoxStyle}
    />
  );
};

export default ProviderSelectList;
