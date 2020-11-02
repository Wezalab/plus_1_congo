import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Row from '../Row';
import { getPlatformElevation } from '../../utils';

class Content extends PureComponent {
  render() {
    const { amount, date, isReceived } = this.props;

    return (
      <Row style={styles.container}>
        <View style={styles.cellContainer}>
          <Text style={styles.titleText}>Total enfants</Text>
          <Text style={styles.amountText}>{amount}</Text>
        </View>
        <View style={styles.cellContainer}>
          <Text style={styles.titleText}>Date mise a jour</Text>
          <Text>{date.format('LL')}</Text>
        </View>
        <View style={styles.cellContainer}>
          <Text style={styles.titleText}>Nbr enregiste</Text>
          <Text>{isReceived == true? '30 enregistres' : '50 en attentes'}</Text>
        </View>
      </Row>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    alignItems: 'center',
  },
  cellContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 10,
    color: 'gray',
  },
  amountText: {
    fontSize: 18,
    fontWeight: '900',
  },
});

export default Content;
