
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@taskmate_tasks';

export const getTasks = async () => {
  try {
    const storedTasks = await AsyncStorage.getItem(STORAGE_KEY);

    return storedTasks ? JSON.parse(storedTasks) : [];
  } catch (error) {
    console.log('Error loading tasks:', error);
    throw error;
  }
};

export const saveTasks = async (tasks) => {
  try {
    const jsonValue = JSON.stringify(tasks);

    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (error) {
    console.log('Error saving tasks:', error);
    throw error;
  }
};
