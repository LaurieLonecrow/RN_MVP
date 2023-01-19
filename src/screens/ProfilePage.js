import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';
import Button from '../components/Button';

function ProfilePage({route}) {
  const [profileImages, setProfileImages] = useState([])

  const selectedProfile = route.params.product;
console.log(selectedProfile)
  function presshandler() {
    console.log('pressed');
  }
  
  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <View style={styles.header}>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{uri:selectedProfile.image}} style={styles.image} />
          <Text style={styles.name}>{selectedProfile.firstName} {selectedProfile.lastName}</Text>
          <Text style={styles.location}>{selectedProfile.address.city}, {selectedProfile.address.state} USA</Text>
        </View>
        <View style={styles.button}>
          <Image source={require('../../assets/portfolio.png')} style={styles.icon} />
          <Text>{selectedProfile.role}</Text>
        </View>
        <View style={styles.button}>
          <Image source={require('../../assets/email.png')} style={styles.icon} />
          <Text>Message</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{ 
    flex: 1,
    backgroundColor: 'black',
    width: 400, 
    height: 140,
  },
  image: { 
    width: 140, 
    height: 140, 
    borderRadius: 100, 
    marginTop: -70
  },
  imageContainer: {
    alignItems: 'center', 
    marginBottom:20
  },
  name: { 
    fontSize:25, 
    fibtWeight:'bold', 
    padding:10
  },
  location: { 
    fontSize:15, 
    fibtWeight:'bold', 
    color:'grey'
  },
  button: { 
    alignSelf:'center', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems:'center', 
    backgroundColor: '#fff', 
    width: '90%', 
    padding:20, 
    paddingBottom: 22, 
    borderRadius: 10, 
    shadowOpacity:80, 
    elevation:15, 
    marginTop:20
  },
  icon: {
    width:20, 
    height:20, 
    marginRight:15
  },
});


export default ProfilePage;


