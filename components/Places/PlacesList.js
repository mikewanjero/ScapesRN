import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";

export default function PlacesList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View style={Styles.fallbackContainer}>
        <Text style={Styles.fallbackText}>No places added yet</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => {
        item.id;
      }}
      renderItem={({ item }) => <PlaceItem place={item} />}
    />
  );
}

const Styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
  },
});
