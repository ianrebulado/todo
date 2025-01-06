import { FlatList, Text, View } from "react-native";

import mockData from "../../constants/mockData";

export default function HomeScreen() {
  const renderItem = ({ item }) => (
    <View
      style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
    >
      <Text>{item.task_name}</Text>
    </View>
  );
  return <FlatList data={mockData} renderItem={renderItem} />;
}
