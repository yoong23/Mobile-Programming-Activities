
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';

import { getTasks, saveTasks } from './StorageService';
import TaskItem from './TaskItem';
import styles from './styles';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSavedTasks();
  }, []);

  const loadSavedTasks = async () => {
    try {
      const savedTasks = await getTasks();
      setTasks(savedTasks);
    } catch (error) {
      Alert.alert('Error', 'Unable to load saved tasks.');
    } finally {
      setIsLoading(false);
    }
  };

  const persistTasks = async (updatedTasks) => {
    try {
      await saveTasks(updatedTasks);
      setTasks(updatedTasks);
    } catch (error) {
      Alert.alert('Error', 'Unable to save your tasks.');
    }
  };

  const handleSaveTask = async () => {
    const trimmedTask = taskInput.trim();

    if (!trimmedTask) {
      Alert.alert('Empty Task', 'Please enter a task first.');
      return;
    }

    let updatedTasks;

    if (editingId) {
      updatedTasks = tasks.map((task) =>
        task.id === editingId
          ? { ...task, title: trimmedTask }
          : task
      );
    } else {
      const newTask = {
        id: Date.now().toString(),
        title: trimmedTask,
        completed: false,
      };

      updatedTasks = [newTask, ...tasks];
    }

    await persistTasks(updatedTasks);

    setTaskInput('');
    setEditingId(null);
  };

  const handleEditTask = (task) => {
    setTaskInput(task.title);
    setEditingId(task.id);
  };

  const handleToggleTask = async (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    await persistTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    Alert.alert(
      'Delete Task',
      'Are you sure you want to delete this task?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            const updatedTasks = tasks.filter(
              (task) => task.id !== id
            );

            await persistTasks(updatedTasks);

            if (editingId === id) {
              setTaskInput('');
              setEditingId(null);
            }
          },
        },
      ]
    );
  };

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingCount = tasks.length - completedCount;

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color="#2563EB"
          style={{ marginTop: 100 }}
        />
        <Text style={styles.loadingText}>
          Loading your saved tasks...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>TaskMate</Text>
        <Text style={styles.subtitle}>
          Organize your day, one task at a time.
        </Text>
      </View>

      <ScrollView
        style={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.sectionTitle}>
          My Daily Tasks
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="What do you need to do?"
            placeholderTextColor="#94A3B8"
            value={taskInput}
            onChangeText={setTaskInput}
            onSubmitEditing={handleSaveTask}
            returnKeyType="done"
          />

          <TouchableOpacity
            style={styles.addButton}
            onPress={handleSaveTask}
          >
            <Text style={styles.addButtonText}>
              {editingId ? 'Update Task' : '+ Add New Task'}
            </Text>
          </TouchableOpacity>

          {editingId && (
            <TouchableOpacity
              onPress={() => {
                setTaskInput('');
                setEditingId(null);
              }}
              style={{ marginTop: 12, alignItems: 'center' }}
            >
              <Text style={{ color: '#DC2626' }}>
                Cancel Editing
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.summary}>
          <Text style={styles.summaryText}>
            Total: {tasks.length}
          </Text>

          <Text style={styles.summaryText}>
            Pending: {pendingCount}
          </Text>

          <Text style={styles.summaryText}>
            Completed: {completedCount}
          </Text>
        </View>

        {tasks.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyEmoji}>📝</Text>
            <Text style={styles.sectionTitle}>
              No tasks yet!
            </Text>
            <Text style={styles.emptyText}>
              Add your first task and start organizing your day.
            </Text>
          </View>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={handleToggleTask}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}
