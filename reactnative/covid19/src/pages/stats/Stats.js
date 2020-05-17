import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';

import styles from './StatsStyle';
import getStatsForCountry from '../../api/api';

export class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: 0,
      recovered: 0,
      fatal: 0,
      active: 0
    };
  }
  componentDidMount() {
    getStatsForCountry('Angola').then(
      ({ confirmed, recovered, fatal, active }) => {
        this.setState({ confirmed, recovered, fatal, active });
      }
    );
  }
  render() {
    return (
      <>
        <View style={styles.parent}>
          <View style={styles.skewContainer} />
          <View style={styles.skewContainerTwo} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Estatísticas</Text>
            <Text style={styles.country}>Angola</Text>
          </View>
          <View style={styles.statContainer}>
            <View style={styles.statRow}>
              <View style={styles.confirmed}>
                <Text style={styles.statTitle}>Confirmados</Text>
                <Text style={styles.statNumber}>{this.state.confirmed}</Text>
              </View>
              <View style={styles.recovered}>
                <Text style={styles.statTitle}>Recuperados</Text>
                <Text style={styles.statNumber}>{this.state.recovered}</Text>
              </View>
            </View>
            <View style={styles.statRow}>
              <View style={styles.active}>
                <Text style={styles.statTitle}>Activos</Text>
                <Text style={styles.statNumber}>{this.state.active}</Text>
              </View>
              <View style={styles.fatal}>
                <Text style={styles.statTitle}>Óbitos</Text>
                <Text style={styles.statNumber}>{this.state.fatal}</Text>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default Stats;
