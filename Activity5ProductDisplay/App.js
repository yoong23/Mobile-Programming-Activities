import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const API_URL = 'https://dummyjson.com/products?limit=10';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error('Failed to fetch products.');
      }

      const data = await response.json();

      setProducts(data.products);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image
        source={{ uri: item.thumbnail }}
        style={styles.productImage}
        resizeMode="contain"
      />

      <View style={styles.productInfo}>
        <Text style={styles.productCategory}>
          {item.category}
        </Text>

        <Text style={styles.productName}>
          {item.title}
        </Text>

        <Text style={styles.productDescription}>
          {item.description}
        </Text>

        <Text style={styles.productPrice}>
          ${item.price.toFixed(2)}
        </Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.centerContainer}>
        <StatusBar barStyle="dark-content" />
        <ActivityIndicator size="large" color="#0d2967" />

        <Text style={styles.loadingText}>
          Loading products...
        </Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.centerContainer}>
        <Text style={styles.errorTitle}>
          Something went wrong!
        </Text>

        <Text style={styles.errorText}>
          {error}
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Product Display
        </Text>

        <Text style={styles.headerSubtitle}>
          Discover our latest products and explore their features.
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>
          Available Products
        </Text>

        <Text style={styles.productCount}>
          Showing {products.length} products
        </Text>

        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    padding: 20,
  },
  header: {
    backgroundColor: '#5b627a',
    padding: 24,
    paddingTop: 35,
    paddingBottom: 28,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#BFDBFE',
    fontSize: 14,
    marginTop: 6,
  },
  content: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 22,
  },
  sectionTitle: {
    color: '#172554',
    fontSize: 20,
    fontWeight: 'bold',
  },
  productCount: {
    color: '#64748B',
    fontSize: 13,
    marginTop: 5,
    marginBottom: 15,
  },
  listContent: {
    paddingBottom: 25,
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 15,
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  productImage: {
    width: 105,
    height: 115,
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
  },
  productInfo: {
    flex: 1,
    marginLeft: 14,
  },
  productCategory: {
    color: '#2563EB',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  productName: {
    color: '#172554',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },
  productDescription: {
    color: '#64748B',
    fontSize: 11,
    marginTop: 5,
    lineHeight: 16,
  },
  productPrice: {
    color: '#2563EB',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  loadingText: {
    color: '#64748B',
    fontSize: 15,
    marginTop: 15,
  },
  errorTitle: {
    color: '#DC2626',
    fontSize: 20,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#64748B',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
});
