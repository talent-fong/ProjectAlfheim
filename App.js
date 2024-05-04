import { StyleSheet, ScrollView} from 'react-native';
import CharacterCard from './components/CharacterCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const naofumiData = {
    name: "Naofumi: Shield Hero",
    image: require("./assets/naofumi.png"),
    type: "speed",
    hp: 93000,
    skills: ["Shooting Star Shield", "Dark Curse Burning", "Iron Maiden"],
    weakness: ["Healer", "Waves"]
  };

  const filoData = {
    name: "Filo: Filolial Successor",
    image: require("./assets/filo.png"),
    type: "health",
    hp: 91000,
    skills: ["Drifa Tornado, Spiral Strike, Filolial Smash"],
    weakness: ["Motoyasu", "Dragons"]
  };

  const raphtaliaData = {
    name: "Raphtalia: Naofumi's Sword",
    image: require("./assets/raphtalia.png"),
    type: "speed",
    hp: 79000,
    skills: ["Blade of Destiny, Illusion Sword, Ying-yang Blade"],
    weakness: ["Food", "Trader"]
  };

  const kizunaData = {
    name: "Kizuna: Hunting Hero",
    image: require("./assets/kizuna.png"),
    type: "strength",
    hp: 65000,
    skills: ["Hook Sink", "Sensitive Instinct", "Hunting Master"],
    weakness: ["Island", "Traps"]
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CharacterCard {...naofumiData}></CharacterCard>
        <CharacterCard {...filoData}></CharacterCard>
        <CharacterCard {...raphtaliaData}></CharacterCard>
        <CharacterCard {...kizunaData}></CharacterCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
