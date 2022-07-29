import { Text, View, StyleSheet, TextInput, Platform, TouchableOpacity, FlatList, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import {useState, useEffect} from 'react' 
import { Button } from '../components/Button';
import SkillCard from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
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

      <Button onPress={handleAddNewSkill}/>

      <Text style={[styles.title, {marginTop: 40}]}>
        My Skills
      </Text>

  
      <FlatList 
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => (
            <SkillCard skill={item}/>
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