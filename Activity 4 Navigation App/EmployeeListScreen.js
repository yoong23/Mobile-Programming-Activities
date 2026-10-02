import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';

const employees = [
  {
    id: '1',
    name: 'Theo Lustico',
    position: 'Software Developer',
    department: 'IT Department',
    email: 'theo.lustico@example.com',
    phone: '0938-036-6504',
    description: 'Develops and maintains company software applications.',
  },
  {
    id: '2',
    name: 'Joselda Cabeling',
    position: 'HR Officer',
    department: 'Human Resources',
    email: 'joselda.cabeling@example.com',
    phone: '0918-234-5678',
    description: 'Handles employee records and recruitment activities.',
  },
  {
    id: '3',
    name: 'Ella Talahiban',
    position: 'Accountant',
    department: 'Finance',
    email: 'ella.talahiban@example.com',
    phone: '0919-345-6789',
    description: 'Manages financial records and company expenses.',
  },
  {
    id: '4',
    name: 'Jenny Prudenciado',
    position: 'Sales',
    department: 'Sales Representative',
    email: 'jenny.prudenciado@example.com',
    phone: '0927-982-7890',
    description: 'Promotes company products and services, assists customers, and develops strong client relationships.',
  },
  {
    id: '5',
    name: 'Van Paulino',
    position: 'Marketing Specialist',
    department: 'Marketing',
    email: 'van.paulino@example.com',
    phone: '0928-567-8901',
    description: 'Develops and implements marketing strategies to promote company products and services.',
  }
];

export default function EmployeeListScreen({ navigation }) {
  const [search, setSearch] = useState('');

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase()) ||
    employee.position.toLowerCase().includes(search.toLowerCase()) ||
    employee.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.intro}>
        <Text style={styles.heading}>Our Team</Text>

        <Text style={styles.subtitle}>
          Browse our employees and view their professional information.
        </Text>
      </View>

      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>⌕</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Search employees..."
          placeholderTextColor="#94A3B8"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View style={styles.countRow}>
        <Text style={styles.countText}>
          {filteredEmployees.length} Employees
        </Text>

        <Text style={styles.directoryText}>DIRECTORY</Text>
      </View>

      {filteredEmployees.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>No employee found</Text>
          <Text style={styles.emptyText}>
            Try searching with a different name or department.
          </Text>
        </View>
      ) : (
        filteredEmployees.map((employee) => {
          const initials = employee.name
            .split(' ')
            .map((word) => word[0])
            .join('');

          return (
            <TouchableOpacity
              key={employee.id}
              style={styles.card}
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('EmployeeDetails', {
                  name: employee.name,
                  position: employee.position,
                  department: employee.department,
                  email: employee.email,
                  phone: employee.phone,
                  description: employee.description,
                })
              }
            >
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{initials}</Text>
              </View>

              <View style={styles.employeeInfo}>
                <Text style={styles.name}>{employee.name}</Text>

                <Text style={styles.position}>
                  {employee.position}
                </Text>

                <View style={styles.departmentBadge}>
                  <Text style={styles.departmentText}>
                    {employee.department}
                  </Text>
                </View>
              </View>

              <View style={styles.arrowContainer}>
                <Text style={styles.arrow}>›</Text>
              </View>
            </TouchableOpacity>
          );
        })
      )}

      <Text style={styles.footer}>
        Employee Management System
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },

  content: {
    padding: 20,
    paddingBottom: 35,
  },

  intro: {
    marginBottom: 20,
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#172554',
    marginBottom: 7,
  },

  subtitle: {
    fontSize: 15,
    color: '#64748B',
    lineHeight: 22,
  },

  searchBox: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 22,
  },

  searchIcon: {
    fontSize: 26,
    color: '#64748B',
    marginRight: 8,
    transform: [{ rotate: '-20deg' }],
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#172554',
  },

  countRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  countText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#172554',
  },

  directoryText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#2563EB',
    letterSpacing: 1,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 17,
    marginBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8EDF5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563EB',
  },

  employeeInfo: {
    flex: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#172554',
    marginBottom: 3,
  },

  position: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 8,
  },

  departmentBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 8,
  },

  departmentText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#475569',
  },

  arrowContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },

  arrow: {
    fontSize: 24,
    color: '#2563EB',
    marginTop: -2,
  },

  emptyState: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 30,
    alignItems: 'center',
    marginTop: 10,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#172554',
    marginBottom: 6,
  },

  emptyText: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 21,
  },

  footer: {
    textAlign: 'center',
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 12,
  },
});