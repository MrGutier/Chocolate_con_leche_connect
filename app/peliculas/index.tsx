import { peliculas } from "@/data/peliculas.data";
import { FlatList, Text, View} from "react-native";
import { Link } from "expo-router";


export default function Index() {
  return (
    <FlatList data={peliculas}
       keyExtractor={(item) => item.id}
       renderItem={({item}) => {
        return (
            <View>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
                <Link href={`./peliculas/${item.id}`}>Mas info.</Link>
            </View>
        );
       }}>
            
    </FlatList>
  );
}
