import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  Colors as ColorsF,
  Spacings,
  Header,
  BestProduits,
  Icons,
} from '../../components';
import * as Redux from 'react-redux';
import {PulseIndicator} from 'react-native-indicators';
import {apiCalalogue} from '../../api';
import {
  dispatchInitBest,
  dispatchDeleteOne,
} from '../../../reducers/actions/typesCatalogue';

import {SCLAlert, SCLAlertButton} from 'react-native-scl-alert';

function Principal(props) {
  const dispatch = Redux.useDispatch();
  const isDark = Redux.useSelector(state => state.global.isDark);
  const datasBest = Redux.useSelector(state => state.catalogue.datasBest);
  const Colors = ColorsF(isDark);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    dispatch(
      apiCalalogue.getAllCatalogue(
        '?sort=star',
        null,
        null,
        dispatchInitBest,
        setLoading,
      ),
    );
  }, [dispatch]);

  const [show, setShow] = React.useState();

  const onClickDelete = () => {
    dispatch(
      apiCalalogue.deleteCatalogue('', show, null, dispatchDeleteOne, setShow),
    );
  };

  return (
    <View style={styles(props, Colors).principal}>
      <Header navigation={props.navigation} {...{isDark}} />
      <SCLAlert
        theme="danger"
        show={!!show}
        title="Lorem"
        subtitle="Lorem ipsum dolor"
        headerIconComponent={
          <Icons
            name="bin"
            contained={true}
            color={Colors.White}
            isDark={isDark}
            size="large"
          />
        }
      >
        <SCLAlertButton theme="danger" onPress={() => onClickDelete()}>
          Done
        </SCLAlertButton>
        <SCLAlertButton theme="default" onPress={() => setShow()}>
          Cancel
        </SCLAlertButton>
      </SCLAlert>
      {loading ? (
        <PulseIndicator />
      ) : (
        <BestProduits
          datas={datasBest}
          {...{...props}}
          onClickDelete={setShow}
          isScroll={true}
        />
      )}
    </View>
  );
}

const styles = (props, Colors) =>
  StyleSheet.create({
    principal: {
      backgroundColor: Colors.PrimaryLight,
      flex: 1,
      padding: Spacings.tiny / 2,
    },
  });

export default Principal;
