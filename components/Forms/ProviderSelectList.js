import {useState} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const ProviderSelectList = ({providerType, onSelectItem}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(providerType);
  const [items, setItems] = useState([
    {label: 'SNF/ALF', value: 'snf_alf'},
    {label: 'Medicl Centers / OP Centers', value: 'medical_centers/op_centers'},
    {label: 'HMO', value: 'hmo'},
    {label: 'Workers Comp', value: 'workers_comp'},
  ]);

  return (
    <View style={{zIndex: 100}}>
      <DropDownPicker
        open={open}
        value={value}
        disableBorderRadius={true}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{
          borderRadius: 0,
          marginVertical: 10,
          // backgroundColor: 'red',
          borderWidth: 0,
          borderBottomWidth: 1,
          borderColor: '#ccc',
        }}
        onSelectItem={onSelectItem}
      />
    </View>
  );
};

export default ProviderSelectList;
