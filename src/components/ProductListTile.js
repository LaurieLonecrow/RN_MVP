import { StyleSheet, View, Text, Image, Pressable } from "react-native"

function ProductListTile({source, firstName, lastName, address, role, onPress}) {

  return (
    <Pressable
    android_ripple={{ color: '#ccc' }}
    style={({ pressed }) => [
      styles.productItem,
      pressed ? styles.buttonPressed : null,
    ]}
    onPress={onPress}
    >
        <Image style={styles.image} source={source} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{firstName} {lastName}</Text>
            <Text>{address}</Text>
            <Text>{role}</Text>
          </View>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  productItem: {
    flex: 1,
    margin: 4,
    padding: 16,
    height: 220,
    alignItems: 'center',
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  image: {
    borderRadius: 80,
    width: 125,
    height: 125,
  },
  textContainer: {
    flex: 1,
    borderRadius: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});

export default ProductListTile;