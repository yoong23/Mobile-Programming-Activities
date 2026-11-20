
import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { AppContext } from './AppContext';

export default function CartTab() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    loadingProductId,
  } = useContext(AppContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>My Shopping Cart</Text>
        <Text style={styles.subtitle}>
          Review your selected products.
        </Text>
      </View>

      {loadingProductId !== null && (
        <Text style={styles.loading}>
          Updating your cart...
        </Text>
      )}

      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>🛒</Text>
          <Text style={styles.emptyTitle}>
            Your cart is empty
          </Text>
          <Text style={styles.emptyText}>
            Add some products from the Shop tab!
          </Text>
        </View>
      ) : (
        <>
          {cartItems.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.productInfo}>
                <Text style={styles.emoji}>{item.emoji}</Text>

                <View style={styles.details}>
                  <Text style={styles.productName}>
                    {item.name}
                  </Text>

                  <Text style={styles.price}>
                    ₱{item.price.toLocaleString('en-PH')}
                  </Text>
                </View>
              </View>

              <View style={styles.actions}>
                <View style={styles.quantityControls}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => updateQuantity(item.id, -1)}
                  >
                    <Text style={styles.quantityText}>−</Text>
                  </TouchableOpacity>

                  <Text style={styles.quantity}>
                    {item.quantity}
                  </Text>

                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => updateQuantity(item.id, 1)}
                  >
                    <Text style={styles.quantityText}>+</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  onPress={() => removeFromCart(item.id)}
                >
                  <Text style={styles.remove}>Remove</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.subtotal}>
                Subtotal: ₱
                {(item.price * item.quantity).toLocaleString('en-PH')}
              </Text>
            </View>
          ))}

          <View style={styles.totalCard}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.totalPrice}>
              ₱{totalPrice.toLocaleString('en-PH')}
            </Text>
          </View>
        </>
      )}
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
    color: '#64748B',
    marginTop: 5,
  },
  loading: {
    textAlign: 'center',
    color: '#2563EB',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  emptyContainer: {
    alignItems: 'center',
    padding: 35,
    marginTop: 35,
  },
  emptyEmoji: {
    fontSize: 65,
  },
  emptyTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#172554',
    marginTop: 15,
  },
  emptyText: {
    color: '#64748B',
    marginTop: 8,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 14,
    padding: 16,
    borderRadius: 14,
    elevation: 2,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 40,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#172554',
  },
  price: {
    color: '#2563EB',
    marginTop: 5,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  quantityButton: {
    backgroundColor: '#DBEAFE',
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    color: '#2563EB',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  remove: {
    color: '#DC2626',
    fontWeight: 'bold',
  },
  subtotal: {
    textAlign: 'right',
    marginTop: 12,
    color: '#64748B',
    fontWeight: 'bold',
  },
  totalCard: {
    backgroundColor: '#172554',
    margin: 16,
    padding: 20,
    borderRadius: 14,
    marginBottom: 30,
  },
  totalLabel: {
    color: '#BFDBFE',
    fontSize: 15,
  },
  totalPrice: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
