
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default function TaskItem({
  task,
  onToggle,
  onEdit,
  onDelete,
}) {
  return (
    <View style={styles.taskCard}>
      <TouchableOpacity
        style={[
          styles.checkbox,
          task.completed && styles.checkedBox,
        ]}
        onPress={() => onToggle(task.id)}
      >
        <Text style={styles.checkmark}>
          {task.completed ? '✓' : ''}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.taskDetails}
        onPress={() => onToggle(task.id)}
      >
        <Text
          style={[
            styles.taskTitle,
            task.completed && styles.completedTask,
          ]}
        >
          {task.title}
        </Text>

        <Text style={styles.taskStatus}>
          {task.completed ? 'Completed' : 'Pending'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.editButton}
        onPress={() => onEdit(task)}
      >
        <Text style={styles.actionText}>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(task.id)}
      >
        <Text style={styles.actionText}>×</Text>
      </TouchableOpacity>
    </View>
  );
}
