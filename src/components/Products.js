import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class Products extends Component {
  renderProducts = products => {
    console.log (products);
    return products.map ((item, index) => {
      return (
        <View
          key={index}
          style={{
            height: 60,
            width: 120,
            margin: 5,
            shadowColor: '#00000021',
            shadowOffset: {
              width: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 4,
            backgroundColor: 'white',
            flexBasis: '47%',
          }}
        >
          <View
            style={{
              paddingHorizontal: 16,
              borderTopLeftRadius: 1,
              borderTopRightRadius: 1,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                  justifyContent: 'center'
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: 'green',
                  textAlign: 'center',
                  justifyContent: 'center'
                }}
              >
                Rp. {item.price}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => this.props.onPress (item)}
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Image
              style={{
                width: 25,
                height: 25,
              }}
              source={{
                uri: 'https://img.icons8.com/nolan/96/3498db/add-shopping-cart.png',
              }}
            />
            <Text style={{marginLeft: 10}}>
              Beli
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
  };

  render () {
    return (
      <View style={styles.container}>
        {this.renderProducts (this.props.products)}
      </View>
    );
  }
}
export default Products;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
