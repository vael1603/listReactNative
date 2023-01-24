import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {

  itemList = [{id: '01', value: '100', color: 'red'}, {id: '02', value: '200', color: 'green'}];

  return (
    <View style={styles.container}>
      <Text>HOLA, CODER!</Text>
      <StatusBar style="auto" />

      <FlatList style={styles.container}
        data={itemList}
          renderItem={data =>(
            <TouchableOpacity>
              <View backgroundColor={data.item.color}>
                <Text>{data.item.value}</Text>
              </View>
            </TouchableOpacity>
          )}
        keyExtractor={(item)=> item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    width: '100%'
  },
});
