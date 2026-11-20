
import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { AppContext } from './AppContext';

const products = [
  {
    id: '1',
    name: 'KitBeez KF-3 Digital Camera',
    price: '3500',
    emoji: '📷',
    description: 'Is a compact, budget-friendly retro point-and-shoot digital camera marketed with a 64MP resolution rating, 18X zoom, and 4K video support.',
  },
  {
    id: '2',
    name: 'Xiaomi 17 Pro Max',
    price: '59069',
    emoji: '📱',
    description: 'A flagship smartphone featuring a 6.9-inch LTPO AMOLED main display, a 2.9-inch secondary rear display, a Snapdragon 8 Elite Gen 5 processor, a triple 50MP Leica camera system, and a 7500mAh battery.',
  },
  {
    id: '3',
    name: 'Huawei Matebook D16',
    price: '56999',
    emoji: '💻',
    description: 'Is a lightweight 16-inch productivity laptop built for everyday work, study, and multitasking.',
  },
  {
    id: '4',
    name: 'Xiaomi Redmi Watch 5 Active',
    price: '2199',
    emoji: '⌚',
    description: 'Is a budget smartwatch featuring a 2.0-inch square LCD display, Bluetooth calling, and up to 18 days of typical battery life.',
  },
];

export default function ShopTab() {
  const { addToCart, loadingProductId } = useContext(AppContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Discover Products</Text>
        <Text style={styles.subtitle}>
          Find something you will love!
        </Text>
      </View>

      <View style={styles.productList}>
        {products.map((product) => (
          <View key={product.id} style={styles.card}>
            <View style={styles.imageBox}>
              <Text style={styles.emoji}>{product.emoji}</Text>
            </View>

            <Text style={styles.productName}>
              {product.name}
            </Text>

            <Text style={styles.description}>
              {product.description}
            </Text>

            <Text style={styles.price}>
              ₱{product.price.toLocaleString('en-PH')}
            </Text>

            <TouchableOpacity
              style={[
                styles.button,
                loadingProductId !== null && styles.disabledButton,
              ]}
              disabled={loadingProductId !== null}
              onPress={() => addToCart(product)}
            >
              <Text style={styles.buttonText}>
                {loadingProductId === product.id
                  ? 'Adding...'
                  : 'Add to Cart'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  header: {
    padding: 22,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#172554',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 5,
  },
  productList: {
    paddingHorizontal: 16,
    paddingBottom: 25,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 15,
    elevation: 3,
  },
  imageBox: {
    height: 110,
    backgroundColor: '#DBEAFE',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  emoji: {
    fontSize: 55,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#172554',
  },
  description: {
    color: '#64748B',
    marginTop: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563EB',
    marginTop: 12,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 13,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  disabledButton: {
    backgroundColor: '#94A3B8',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
