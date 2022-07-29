# Aplicação em React Native - MySkills

## Desenvolvimento
* Estilização e componentização.
* Aplicação de useState e useEffect.
* FlatList, props.
* Adicionando Typescript
## Anotações

<details>
<summary markdonw="span">Estilo em React Native</summary>
Usamos o StyleSheet.create({...}) para estilizar o componente

~~~~reactjs
....
<Text style={styles.title}>Welcome, Lázaro</Text>

<Text style={[styles.title, {marginTop: 40}]}>
  My Skills
</Text>
....

 const styles = StyleSheet.create({
....
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },  
.... 
~~~~

Um elemento pode reaproveitar o estilo de outro.
`<Text style={[styles.title, {marginTop: 40}]}>`

O React Native por padrão usa o **Display Flex**

Também é possível dar um estilo diferente entre as plataformas IOs e Android.

~~~~reactjs
...
    padding: Platform.OS === 'ios' ? 15 : 10,
...
~~~~
</details>
<details>
<summary markdonw="span">Imutabilidade - UseState</summary>

O React e o React Native usam o principio da imutabilidade, que diz que não podemos mudar uma variável diretamente.

</details>
<details>
<summary markdonw="span">ScrollView X Flatlist</summary>

A diferença está na perfomance, ambos renderizam uma lista, mas o ScrollView renderiza toda a lista de uma vez enquando a Flatlist renderiza apenas que vai se mostrado na tela.


Na Flatlist precisa ter algumas propriedades que são obrigatória, a data, o  keyExtractor e o renderItem

Antes do Flatlist para renderizar o elemento pra cada item, usavamos o map.
~~~~reactjs
        mySkills.map(skill => (
            <SkillCard key={skill} skill={skill}/>
        ))
~~~~

Com o Flatlist o código fica mais sucinto
~~~~reactjs
      <FlatList 
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => (
            <SkillCard skill={item}/>
        )}
      >
      </FlatList>
~~~~
</details>

