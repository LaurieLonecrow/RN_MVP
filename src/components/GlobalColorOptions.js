import { StyleSheet, FlatList, Text, View } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';

function colorsArray(obj) {
  var array = Object.keys(obj).map((key) => ({name:key, code:obj[key]}));
  return array
}

function renderColors(itemData){
  return <View style={[styles.block, {backgroundColor: itemData.item.code}] }>
  <Text stlye={{color: '#000'}}>{itemData.item.name}</Text> 
  </View>;
}

function GlobalColorOptions() {
  return (
    <View style={styles.container}>
      <FlatList
        data={colorsArray(globalStyles.colors)}
        renderItem={renderColors}
        keyExtractor={(item) => item.code}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  block: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default GlobalColorOptions;