import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [like, setLike] = useState(0);
  const data = [
    {
      id: 1,
      like: 0,
      photo: require('./assets/images/dummy.jpg'),
    },
    {
      id: 2,
      like: 0,
      photo: require('./assets/images/dummy.jpg'),
    },
    {
      id: 3,
      like: 0,
      photo: require('./assets/images/dummy.jpg'),
    },
    {
      id: 4,
      like: 0,
      photo: require('./assets/images/dummy.jpg'),
    },
    {
      id: 5,
      like: 0,
      photo: require('./assets/images/dummy.jpg'),
    },
  ];

  const likeHandler = () => {
    if (like === 0 || like > 0) {
      setLike(previousState => previousState + 1);
    }
  };

  const dislikeHandler = () => {
    if (like > 0) {
      setLike(previousState => previousState - 1);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <Image
          source={item.photo}
          resizeMode="cover"
          style={styles.cardPhoto}
        />
        <View style={styles.cardInfoContainer}>
          <View style={styles.likeContainer}>
            <Text style={styles.like}>{like} Like</Text>
          </View>
          <View style={styles.buttonCardContainer}>
            <TouchableOpacity
              style={styles.buttonCardBlue}
              onPress={likeHandler}>
              <Text style={styles.buttonTextWhite}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonCardRed}
              onPress={dislikeHandler}>
              <Text style={styles.buttonTextWhite}>Dislike</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topButtonContainer}>
        <TouchableOpacity style={styles.buttonBlue}>
          <Text style={styles.buttonTextWhite}>Like All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWhite}>
          <Text style={styles.buttonText}>Reset All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRed}>
          <Text style={styles.buttonTextWhite}>Dislike All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: 15,
  },
  topButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  buttonBlue: {
    backgroundColor: '#2c71c6',
    flex: 0.3,
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonRed: {
    backgroundColor: '#d42f33',
    flex: 0.3,
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonWhite: {
    backgroundColor: 'white',
    flex: 0.3,
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonText: {
    color: '#727272',
    fontSize: 14,
  },
  buttonTextWhite: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  card: {
    width: '100%',
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardPhoto: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: '100%',
    height: 200,
  },
  cardInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  likeContainer: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  buttonCardContainer: {
    flexDirection: 'row',
    flex: 0.7,
    justifyContent: 'space-between',
  },
  buttonCardRed: {
    backgroundColor: '#d42f33',
    paddingVertical: 5,
    borderRadius: 5,
    flex: 0.45,
    alignItems: 'center',
  },
  buttonCardBlue: {
    backgroundColor: '#2c71c6',
    paddingVertical: 5,
    borderRadius: 5,
    flex: 0.45,
    alignItems: 'center',
  },
});
