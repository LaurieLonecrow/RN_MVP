import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { globalStyles } from '../constants/GlobalStyles';
import Map from '../components/Map';
import ProfileListTile from '../components/ProfileListTile';
import LoadingOverlay from "../components/LoadingOverlay";

import { getProfiles } from "../api/profilesApi";

function ProfileListPage({navigation}) {
  const [loading, setLoading] = useState(true);
  const [profilesData, setProfilesData] = useState()

  const fetchProfilesData = async () => {
    const data = await getProfiles();
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
      {profilesData && ( 
        <>
        <Map users={profilesData}/>
        <View style={styles.container}>
          <FlatList 
          data={profilesData}
          renderItem={renderProfileData}
          keyExtractor={(item)=>item.id}
          numColumns={2}
          />
        </View>
        </>
        )}
        </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileListPage;