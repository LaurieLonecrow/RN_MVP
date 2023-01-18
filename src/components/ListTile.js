import { StyleSheet, View, Text, Image, Pressable, ImageBackground } from "react-native"
import { getStarRating, getDollarSigns } from '../util/helpers/getRatings';

function ListTile({source, title, categories, distance, stars, dollars, onPress}) {
  function convertMetersToWalkingDistance(meters) {
    return ((meters*0.00062137)*25).toFixed(0);
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
      <ImageBackground style={styles.image} source={source}>
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
          <View style={styles.categoriesContainer}>
          {categories.map(cat => <Text style={styles.categories}>{cat} </Text>)}
          </View>
        <Text style={styles.distance}>{convertMetersToWalkingDistance(distance)} minute walk</Text>
        <View style={styles.starsContainer}>{getStarRating(stars)}</View>
        <View style={styles.priceContainer}>{getDollarSigns(dollars)}</View>          
      </View>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  productItem: {
    flex: 1,
    flexDirection: 'row',
    margin: 4,
    height: 160,
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
    flex: .8,
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  textContainer: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 5,
  },
  categories: {
    fontWeight: '200',
    fontSize: 14,
  },
  distance: {
    fontWeight: '500',
    fontSize: 14,
    paddingTop: 5,
  },
  starsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 5,
  },
  priceContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  pressed: {
    opacity: 0.7,
  },
});

export default ListTile;