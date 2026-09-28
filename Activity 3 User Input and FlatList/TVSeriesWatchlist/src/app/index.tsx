import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

type Series = {
  id: string;
  name: string;
  watched: boolean;
};

export default function Index() {
  const [seriesName, setSeriesName] = useState<string>('');
  const [watchlist, setWatchlist] = useState<Series[]>([]);

  const addSeries = () => {
    if (seriesName.trim() === '') {
      return;
    }

    const newSeries: Series = {
      id: Date.now().toString(),
      name: seriesName,
      watched: false,
    };

    setWatchlist([...watchlist, newSeries]);
    setSeriesName('');
  };

  const toggleWatched = (id: string) => {
    setWatchlist(
      watchlist.map((series) =>
        series.id === id
          ? { ...series, watched: !series.watched }
          : series
      )
    );
  };

  const deleteSeries = (id: string) => {
    setWatchlist(
      watchlist.filter((series) => series.id !== id)
    );
  };

  const renderSeries = ({ item }: { item: Series }) => (
    <View style={styles.seriesCard}>
      <TouchableOpacity
        style={styles.seriesInfo}
        onPress={() => toggleWatched(item.id)}
      >
        <View
          style={[
            styles.checkbox,
            item.watched && styles.checkboxWatched,
          ]}
        >
          {item.watched && (
            <Text style={styles.checkmark}>✓</Text>
          )}
        </View>

        <View style={styles.textContainer}>
          <Text
            style={[
              styles.seriesName,
              item.watched && styles.watchedText,
            ]}
          >
            {item.name}
          </Text>

          <Text style={styles.status}>
            {item.watched ? 'Watched' : 'Not Watched'}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteSeries(item.id)}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TV Series Watchlist</Text>

        <Text style={styles.subtitle}>
          Keep track of the series you want to watch
        </Text>
      </View>

      <View style={styles.inputSection}>
        <TextInput
          style={styles.input}
          placeholder="Enter TV series title..."
          placeholderTextColor="#888"
          value={seriesName}
          onChangeText={setSeriesName}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={addSeries}
        >
          <Text style={styles.addButtonText}>
            + Add Series
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>
          My Watchlist
        </Text>

        <Text style={styles.count}>
          {watchlist.length} Series
        </Text>
      </View>

      <FlatList
        data={watchlist}
        keyExtractor={(item) => item.id}
        renderItem={renderSeries}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Your watchlist is empty.
            {'\n'}
            Add a TV series to get started!
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3FF',
    padding: 20,
    paddingTop: 60,
  },

  header: {
    marginBottom: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#312E81',
  },

  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    marginTop: 6,
  },

  inputSection: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 25,
  },

  input: {
    borderWidth: 1,
    borderColor: '#C4B5FD',
    borderRadius: 10,
    padding: 13,
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 12,
  },

  addButton: {
    backgroundColor: '#7C3AED',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  listTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#312E81',
  },

  count: {
    fontSize: 14,
    color: '#6B7280',
  },

  seriesCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  seriesInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  checkbox: {
    width: 27,
    height: 27,
    borderWidth: 2,
    borderColor: '#7C3AED',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  checkboxWatched: {
    backgroundColor: '#7C3AED',
  },

  checkmark: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  textContainer: {
    flex: 1,
  },

  seriesName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1F2937',
  },

  watchedText: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
  },

  status: {
    fontSize: 13,
    color: '#9CA3AF',
    marginTop: 3,
  },

  deleteButton: {
    backgroundColor: '#FEE2E2',
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderRadius: 8,
    marginLeft: 10,
  },

  deleteText: {
    color: '#DC2626',
    fontSize: 13,
    fontWeight: 'bold',
  },

  emptyText: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 15,
    marginTop: 45,
    lineHeight: 23,
  },
});