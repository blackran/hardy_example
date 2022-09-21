import React from 'react';
import {
  Dimensions,
  Platform,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Alert,
} from 'react-native';
import * as Redux from 'react-redux';
import {
  HeaderStackDeux,
  Colors as ColorsF,
  Spacings,
  GestionsImage,
  TextInput,
  Select,
  Button,
} from '../../components';
import {apiCalalogue, apiCategorieCatalogue} from '../../api';
import {dispatchAddOne} from '../../../reducers/actions/typesCatalogue';
import {dispatchInitCategorieCatalogue} from '../../../reducers/actions/typesCategorieCatalogue';
const {width: widthW} = Dimensions.get('window');

function NewCatalogue(props) {
  const dispatch = Redux.useDispatch();
  const isDark = Redux.useSelector(state => state.global.isDark);
  const datasCategorie = Redux.useSelector(
    state => state?.categorieCatalogue?.datasCategorie,
  );
  const Colors = ColorsF(isDark);
  const [state, setState] = React.useState({
    nom: 'test1',
    description: 'desc',
    motif: 'rien',
    prix: 10000,
    surface: 200,
    monthly: 'mois',
    client: '6165c305ebba4179bfe5579d',
    categorieCatalogue: '61b55f39db8fb4a31006d16a',
    descriptionL: 'ambalavao Fianarantsoa',
    typeL: 'Point',
    latitudeL: 0.1,
    logitudeL: 0.4,
    addressL: 'ambalavao',
  });
  const [datasImage, setDatasImage] = React.useState([]);
  const [isPrincipal, setIsPrincipal] = React.useState('');

  const onChange = e => {
    setState({...state, [e.name]: e.value});
  };

  const onChangeSelectMonthly = e => {
    setState({...state, monthly: e});
  };

  const onChangeSelectCategorie = e => {
    setState({...state, categorieCatalogue: e});
  };

  const onSubmit = () => {
    if (isPrincipal) {
      const images = {
        principal: {},
        other: [],
      };

      datasImage.find(dataImage => {
        const uri =
          Platform.OS === 'android'
            ? dataImage.photo.uri
            : dataImage.photo.uri.replace('file://', '');
        const stock = {
          name: dataImage.photo.fileName,
          type: dataImage.photo.type,
          uri,
        };
        if (dataImage._id === isPrincipal) {
          images.principal = stock;
        } else {
          images.other = [...images.other, stock];
        }
      });

      dispatch(
        apiCalalogue.addCatalogue(
          '',
          null,
          {datas: state, images},
          dispatchAddOne,
          resetData,
        ),
      );
    }
  };

  const resetData = () => {
    Alert.alert('Information', 'Votre catalogue a été créer', [
      {
        text: 'Fermer',
        onPress: () => {
          setDatasImage([]);
          setState({
            nom: '',
            description: '',
            location: '',
            motif: '',
            prix: 0,
            surface: 0,
            monthly: '',
            client: '6165c305ebba4179bfe5579d',
            categorieCatalogue: '',
          });
          setIsPrincipal('');
        },
      },
    ]);
  };

  React.useEffect(() => {
    dispatch(
      apiCategorieCatalogue.getAllCategorieCatalogue(
        '',
        null,
        null,
        dispatchInitCategorieCatalogue,
        null,
      ),
    );
  }, [dispatch]);

  const formatData = datas => {
    return datas.map(data => {
      return {label: data.nom, value: data._id};
    });
  };

  return (
    <View style={styles(props, Colors).principal}>
      <HeaderStackDeux
        navigation={props.navigation}
        {...{isDark}}
        locate={'Nouveau'}
      />
      <ScrollView>
        <GestionsImage
          {...{datasImage, setDatasImage, isPrincipal, setIsPrincipal}}
        />
        <View>
          <Text>Nom: </Text>
          <TextInput value={state.nom} onChangeInput={onChange} name="nom" />
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1}}>
            <Text>Prix: </Text>
            <TextInput
              keyboardType="numeric"
              value={state.prix}
              onChangeInput={onChange}
              name="prix"
              iconRight="ariary"
            />
          </View>
          <View>
            <Text />
            <Select
              value={state.monthly}
              onChangeInput={onChangeSelectMonthly}
              name="monthly"
              datas={[
                {label: '/jour', value: 'jour'},
                {label: '/mois', value: 'mois'},
                {label: '/annee', value: 'annee'},
              ]}
              placeholder="Périodicité"
            />
          </View>
        </View>
        <View>
          <Text>Location: </Text>
          <TextInput
            value={state.location}
            onChangeInput={onChange}
            name="location"
          />
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View>
            <Text>Categorie: </Text>
            <Select
              value={state.categorieCatalogue}
              onChangeInput={onChangeSelectCategorie}
              styleSelect={{
                width: (widthW - Spacings.small) * 0.6,
              }}
              style={{
                marginBottom: Spacings.tiny,
                marginLeft: Spacings.tiny / 2,
              }}
              name="categorieCatalogue"
              datas={formatData(datasCategorie)}
            />
          </View>
          <View style={{flex: 1}}>
            <Text>Surface: </Text>
            <TextInput
              keyboardType="numeric"
              value={state.surface}
              onChangeInput={onChange}
              name="surface"
              iconRight="mcaree"
            />
          </View>
        </View>
        <View>
          <Text>Motif: </Text>
          <TextInput
            multiline={true}
            numberOfline={3}
            stylesInput={{
              ...styles(props, Colors).textArea,
            }}
            value={state.motif}
            onChangeInput={onChange}
            name="motif"
          />
        </View>
        <View>
          <Text>Description: </Text>
          <TextInput
            multiline={true}
            numberOfline={4}
            stylesInput={{
              ...styles(props, Colors).textArea,
            }}
            style={{
              minHeight: Spacings.xlarge * 2,
            }}
            value={state.description}
            onChangeInput={onChange}
            name="description"
          />
        </View>
        <Button {...props} onPress={onSubmit} disable={datasImage.length === 0}>
          Nouveau
        </Button>
      </ScrollView>
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
    textArea: {
      height: 'auto',
      minHeight: Spacings.xlarge * 2,
    },
  });

export default NewCatalogue;
