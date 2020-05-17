import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './LandingStyle';

export class Landing extends React.Component {
  render() {
    return (
      <>
        <View style={styles.parent}>
          <View style={styles.skewContainer} />
          <View style={styles.skewContainerTwo} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Covid 19</Text>
            <Text style={styles.subTitle}>Estás a sentir-te doente?</Text>
            <Text style={styles.subtext}>
              Se sentes algum dos sintomas da COVID-19, liga para o 111.
            </Text>
          </View>
          <View style={styles.prevContainer}>
            <Text style={styles.prevTitle}>Como fico seguro?</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >
              <View style={styles.prevIconContainer}>
                <LottieView
                  style={styles.icons}
                  source={require('./01.json')}
                  autoPlay
                  loop
                />
                <Text style={styles.prevIconText}>
                  Lavar regularmente as mãos
                </Text>
              </View>
              <View style={styles.prevIconContainer}>
                <LottieView
                  style={styles.icons}
                  source={require('./02.json')}
                  autoPlay
                  loop
                />
                <Text style={styles.prevIconText}>Usar máscara</Text>
              </View>
              <View style={styles.prevIconContainer}>
                <LottieView
                  style={styles.icons}
                  source={require('./03.json')}
                  autoPlay
                  loop
                />
                <Text style={styles.prevIconText}>Higienizar as mãos</Text>
              </View>
              <View style={styles.prevIconContainer}>
                <LottieView
                  style={styles.icons}
                  source={require('./05.json')}
                  autoPlay
                  loop
                />
                <Text style={styles.prevIconText}>Distanciamento Social</Text>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default Landing;
