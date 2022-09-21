import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Icons,
  Types,
  Button,
  Colors as colF,
  Spacings,
} from '../../../components';

function Loading(props) {
  const { isEmpty, isSearch } = props;
  const Colors = colF(props.isDark);
  return (
    <View style={{ ...styles(props).principal }}>
      {isEmpty ? (
        isSearch ? (
          <View style={{ ...styles(props).body }}>
            <Icons
              name="search"
              size="xlarge"
              contained
              style={styles(props).icon}
            />
            <Types.Title>Aucun résultat trouvé</Types.Title>
            <Types.Paragraph>
              Essayer de faire une autre recherche
            </Types.Paragraph>
          </View>
        ) : (
          <View style={{ ...styles(props).body }}>
            <Icons
              name="empty"
              size="xxlarge"
              contained
              style={styles(props).icon}
            />
            <Types.Title>Un probleme est survenue</Types.Title>
            <Types.Paragraph style={{ textAlign: 'center' }}>
              Nous ne trouvons pas de catalogue veille créer un nouveau
            </Types.Paragraph>
            <Button
              theme="outlined"
              stylePrincipal={{ borderColor: Colors.Black }}
              styleText={{ color: Colors.Black }}
            >
              Créer un nouveau
            </Button>
          </View>
        )
      ) : (
        <Text>Loading ...</Text>
      )}
    </View>
  );
}

const styles = props =>
  StyleSheet.create({
    principal: {
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    body: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: Spacings.large,
    },
    icon: {
      marginBottom: Spacings.base,
    },
  });

export default Loading;
