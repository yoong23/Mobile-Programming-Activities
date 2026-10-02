import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <View>
          <Text style={styles.smallTitle}>WELCOME TO</Text>
          <Text style={styles.title}>Employee Directory</Text>
        </View>

        <View style={styles.headerIcon}>
          <Text style={styles.headerIconText}>👥</Text>
        </View>
      </View>

      <View style={styles.heroCard}>
        <View style={styles.heroIcon}>
          <Text style={styles.heroIconText}>👤</Text>
        </View>

        <Text style={styles.heroTitle}>Meet Our Team</Text>

        <Text style={styles.heroDescription}>
          Explore our employee directory and discover information about
          the people who make our organization successful.
        </Text>
      </View>

      <View style={styles.statsCard}>
        <View style={styles.statIcon}>
          <Text style={styles.statIconText}>👥</Text>
        </View>

        <View>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Employees</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Employees')}
      >
        <Text style={styles.buttonText}>View Employees</Text>
        <Text style={styles.arrow}>→</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Employee Management System
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
    padding: 22,
  },

  header: {
    backgroundColor: '#172554',
    marginHorizontal: -22,
    marginTop: -22,
    paddingHorizontal: 22,
    paddingTop: 55,
    paddingBottom: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  smallTitle: {
    color: '#93C5FD',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 5,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
  },

  headerIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerIconText: {
    fontSize: 25,
  },

  heroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 22,
    marginTop: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  heroIcon: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  heroIconText: {
    fontSize: 28,
  },

  heroTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#172554',
    marginBottom: 8,
  },

  heroDescription: {
    fontSize: 15,
    lineHeight: 23,
    color: '#64748B',
  },

  statsCard: {
    backgroundColor: '#E0E7FF',
    borderRadius: 18,
    padding: 18,
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  statIconText: {
    fontSize: 22,
  },

  statNumber: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#172554',
  },

  statLabel: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 2,
  },

  button: {
    backgroundColor: '#2563EB',
    borderRadius: 16,
    paddingVertical: 17,
    paddingHorizontal: 20,
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2563EB',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  arrow: {
    color: '#FFFFFF',
    fontSize: 23,
    marginLeft: 10,
  },

  footerText: {
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 20,
  },
});