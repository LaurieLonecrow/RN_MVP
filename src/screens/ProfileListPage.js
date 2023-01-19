import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';
import ProfileListTile from '../components/ProfileListTile';
import LoadingOverlay from "../components/LoadingOverlay";

import { getProfiles } from "../api/productsApi";
import { getUsers } from "../api/productsApi";

function ProfileListPage({navigation}) {
  const [loading, setLoading] = useState(true);
  const [productsData, setProfilesData] = useState([])

  const fetchProfilesData = async () => {
    const data = await getUsers();
    setProfilesData(data);
    setLoading(false);
  };

  
  function renderProfileData(itemData) {
    function pressHandler() {
      navigation.navigate('ProfilePage', {
        product: itemData.item,
      })
    }
    return (
      <ProfileListTile 
      source={{uri:itemData.item.image}}
      firstName={itemData.item.firstName}
      lastName={itemData.item.lastName}
      address={`${itemData.item.address.city}, ${itemData.item.address.state}`}
      role={itemData.item.role}
      onPress={pressHandler}
      />
    )
  };

  useEffect(() => {
    fetchProfilesData();
  }, []);
  
  return (
    <View style={globalStyles.container}>
      {loading && <LoadingOverlay message="Loading your people..." /> }
      {productsData && ( 
        <FlatList 
        data={productsData}
        renderItem={renderProfileData}
        keyExtractor={(item)=>item.id}
        numColumns={2}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileListPage;