import { Text, View, StyleSheet, TextInput, Platform, TouchableOpacity, FlatList, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import {useState, useEffect} from 'react' 
import { Button } from '../components/Button';
import SkillCard from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
  date?: Date;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState('');

  // Função de adicionar
  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }


    setMySkills(oldState => [...oldState, data]);
  }

  // Função de Remover
  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }
  
  useEffect(() => {
    const currentHour = new Date().getHours();

    if(currentHour < 12){
      setGretting('Good morning');
    }
    else if(currentHour >= 12 && currentHour < 18){
      setGretting('Good afternoon');
    }else {
      setGretting('Good night');
    }
  }, [])
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Lázaro</Text>
      <Text style={styles.greetings}>
        {gretting}
      </Text>

      <TextInput  style={styles.input}
      placeholder="New skill"
      placeholderTextColor="#555"
      onChangeText={setNewSkill}
      />

      <Button title="Add" onPress={handleAddNewSkill}/>

      <Text style={[styles.title, {marginTop: 40}]}>
        My Skills
      </Text>

  
      <FlatList 
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
            <SkillCard skill={item.name}
              onPress={() => handleRemoveSkill(item.id)}
            />
            
        )}
      >
      </FlatList>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:'#171916',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    marginBottom: 15,
    borderRadius: 7
  },
  greetings: {
    color: "#fff"
  }
})