
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  header: {
    backgroundColor: '#172554',
    paddingHorizontal: 22,
    paddingTop: 30,
    paddingBottom: 28,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  appName: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#BFDBFE',
    fontSize: 14,
    marginTop: 6,
  },
  content: {
    padding: 18,
    paddingBottom: 35,
  },
  sectionTitle: {
    color: '#172554',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 15,
    elevation: 2,
    marginBottom: 22,
  },
  input: {
    backgroundColor: '#F1F5F9',
    padding: 14,
    borderRadius: 10,
    fontSize: 15,
    color: '#172554',
  },
  addButton: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    padding: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    backgroundColor: '#2563EB',
  },
  checkmark: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  taskDetails: {
    flex: 1,
    marginLeft: 12,
  },
  taskTitle: {
    color: '#172554',
    fontSize: 15,
    fontWeight: '600',
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#94A3B8',
  },
  taskStatus: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 4,
  },
  editButton: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 7,
    marginLeft: 6,
  },
  deleteButton: {
    backgroundColor: '#FEE2E2',
    width: 32,
    height: 32,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },
  actionText: {
    color: '#2563EB',
    fontWeight: 'bold',
  },
  emptyContainer: {
    alignItems: 'center',
    padding: 30,
  },
  emptyEmoji: {
    fontSize: 50,
  },
  emptyText: {
    color: '#64748B',
    marginTop: 12,
    textAlign: 'center',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  summaryText: {
    color: '#64748B',
    fontSize: 13,
  },
  loadingText: {
    color: '#2563EB',
    textAlign: 'center',
    marginTop: 30,
  },
});

export default styles;
