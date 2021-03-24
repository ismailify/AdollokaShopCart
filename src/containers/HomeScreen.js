import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import ShoppingCartIcon from './ShoppingCartIcon';

class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
      <ScrollView>
        <View
          style={styles.navbar}
        >
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 15}}>
            Adolloka
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate ('Cart')}
          >
            <ShoppingCartIcon />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, margin: 15}}>
          <View
            style={styles.category}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginLeft: 10,
                borderRadius: 10,
              }}
            >
              Category
            </Text>
          </View>
          <View style={{marginVertical: 20}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate ('Electronics')}
              style={{
                alignItems: 'center',
                backgroundColor: '#fff',
              }}
            >
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Electronics</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate ('Books')}
              style={{
                alignItems: 'center',
                backgroundColor: '#fff',
                marginVertical: 10
              }}
            >
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Books</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate ('Fashion')}
              style={{
                alignItems: 'center',
                backgroundColor: '#fff',
                marginVertical: 10
              }}
            >
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Fashion</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
    backgroundColor: 'lime',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20
  },
  category: {
    height: 30,
    backgroundColor: 'lime',
    justifyContent: 'center',
    marginBottom: 17,
    borderRadius: 10, 
  },
  

});
