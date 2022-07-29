import React from 'react'
import {StyleSheet,TouchableOpacity, Text} from 'react-native'

export default function SkillCard({skill}) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
    <Text style={styles.textSkill}>
        {skill}
    </Text>
  </TouchableOpacity>  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    marginTop: 20,
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  }
})