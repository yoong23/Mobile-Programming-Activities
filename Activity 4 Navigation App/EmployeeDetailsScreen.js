import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function EmployeeDetailsScreen({ route, navigation }) {
  const {
    name,
    position,
    department,
    email,
    phone,
    description,
  } = route.params;

  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>

        <Text style={styles.name}>{name}</Text>

        <Text style={styles.position}>{position}</Text>

        <View style={styles.departmentBadge}>
          <Text style={styles.departmentText}>{department}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>CONTACT INFORMATION</Text>

        <View style={styles.infoRow}>
          <View style={styles.iconBox}>
            <Text style={styles.icon}>✉</Text>
          </View>

          <View style={styles.infoContent}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{email}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <View style={styles.iconBox}>
            <Text style={styles.icon}>☎</Text>
          </View>

          <View style={styles.infoContent}>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>{phone}</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>ABOUT EMPLOYEE</Text>

        <Text style={styles.description}>{description}</Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backArrow}>←</Text>
        <Text style={styles.backButtonText}>Back to Employees</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },

  profileSection: {
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },

  name: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#172554',
    textAlign: 'center',
  },

  position: {
    fontSize: 17,
    color: '#64748B',
    marginTop: 5,
  },

  departmentBadge: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 12,
  },

  departmentText: {
    color: '#2563EB',
    fontSize: 13,
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 20,
    borderRadius: 18,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.07,
    shadowRadius: 8,
  },

  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#64748B',
    letterSpacing: 1,
    marginBottom: 18,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  icon: {
    fontSize: 19,
    color: '#2563EB',
  },

  infoContent: {
    flex: 1,
  },

  label: {
    fontSize: 12,
    color: '#94A3B8',
    marginBottom: 3,
  },

  value: {
    fontSize: 15,
    color: '#172554',
    fontWeight: '500',
  },

  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 18,
  },

  description: {
    fontSize: 15,
    color: '#64748B',
    lineHeight: 23,
  },

  backButton: {
    backgroundColor: '#2563EB',
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 30,
    paddingVertical: 16,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backArrow: {
    color: '#FFFFFF',
    fontSize: 21,
    marginRight: 8,
  },

  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});