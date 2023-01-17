import { StyleSheet, View, Text, Image, Pressable } from "react-native"

function ListTile({source, title, categories, distance, onPress}) {
  function convertMetersToMiles(meters) {
    return (meters*0.00062137).toFixed(2);
  }
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
        <Text style={styles.title}>{title}</Text>
          <View style={styles.categoriesContainer}>
          {categories.map(cat => <Text style={styles.categories}>{cat} </Text>)}
          </View>
        <Text style={styles.distance}>{convertMetersToMiles(distance)} miles away</Text>
      </View>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  productItem: {
    flex: 1,
    flexDirection: 'row',
    margin: 4,
    height: 150,
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
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'start',
    paddingTop: 20,
    paddingLeft: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categories: {
    fontWeight: '200',
    fontSize: 14,
  },
  distance: {
    fontWeight: '500',
    fontSize: 14,
  },
  pressed: {
    opacity: 0.7,
  },
});

export default ListTile;