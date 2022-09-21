import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Dialog from 'react-native-dialog';
import {Spacings, Colors as defColors, Icons} from '../../../components';

export default function App(props) {
  const Colors = defColors(false);
  const {children, title, valider, onAccept, content, btnStyle} = props;
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    setVisible(false);
    if (onAccept) {
      onAccept;
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={showDialog} style={{...btnStyle}}>
        {children}
      </TouchableOpacity>
      <Dialog.Container visible={visible}>
        {title && <Dialog.Title>{title || ''} </Dialog.Title>}
        <Dialog.Description> {content} </Dialog.Description>
        <TouchableOpacity
          onPress={handleCancel}
          style={{
            borderWidth: 1,
            borderColor: Colors.Black + '66',
            position: 'absolute',
            top: Spacings.tiny,
            right: Spacings.tiny,
            borderRadius: Spacings.borderRadius,
          }}
        >
          <Icons
            name={'cross'}
            contained={true}
            color={Colors.Black + 'aa'}
            isDark={false}
            size="small"
          />
        </TouchableOpacity>
        {valider && <Dialog.Button label={valider} onPress={handleDelete} />}
      </Dialog.Container>
    </View>
  );
}
