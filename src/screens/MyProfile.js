import React, { Components } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../constants/GlobalStyles';

function MyProfile() {
  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity>
            <Image source={require('../../assets/black.jpeg')} style={{ width:30, height:30}} />
            <View></View>
            <View></View>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', marginBottom:20}}>
          <Image source={require('../../assets/astrologo.png')} style={{ width:140, height:140, borderRadius:100, marginTop:-70}} />
          <Text style={{ fontSize:25, fibtWeight:'bold', padding:10}}>John Smith</Text>
          <Text style={{ fontSize:15, fibtWeight:'bold', color:'grey'}}>Atlanta, GA USA</Text>
        </View>
        <View style={{ alignSelf:'center', flexDirection: 'row', justifyContent: 'center', alignItems:'center', backgroundColor: '#fff', width: '90%', padding:20, paddingBottom: 22, borderRadius: 10, shadowOpacity:80, elevation:15, marginTop:20}}>
          <Image source={require('../../assets/portfolio.png')} style={{ width:20, height:20, marginRight:15}} />
          <Text>Role</Text>
        </View>
        <View style={{ alignSelf:'center', flexDirection: 'row', justifyContent: 'center', alignItems:'center', backgroundColor: '#fff', width: '90%', padding:20, paddingBottom: 22, borderRadius: 10, shadowOpacity:80, elevation:15, marginTop:20}}>
          <Image source={require('../../assets/location.png')} style={{ width:20, height:20, marginRight:15}} />
          <Text>Location</Text>
        </View>
        <View style={{ alignSelf:'center', flexDirection: 'row', justifyContent: 'center', alignItems:'center', backgroundColor: '#fff', width: '90%', padding:20, paddingBottom: 22, borderRadius: 10, shadowOpacity:80, elevation:15, marginTop:20}}>
          <Image source={require('../../assets/email.png')} style={{ width:20, height:20, marginRight:15}} />
          <Text>Message</Text>
        </View>
        <View style={{alignItems: 'center', marginTop:80}}>
          <Text style={{ fontSize:22, color:'grey'}}>Logout</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
});

export default MyProfile;