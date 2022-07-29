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
<details>
<summary markdonw="span">Tipando componentes com Typescript</summary>

No React Native podemos usar as proprias Interface que ela oferece. Como por exemplo o `TouchableOpacityProps` que já vem com as props prontas

~~~~reactjs
//Usando a interface da biblioteca
type ButtonProps = TouchableOpacityProps;
~~~~

Se quer adicionar uma nova props que não vem da biblioteca, podemos usar uma interface ao invês do type, extendendo da interface original.

~~~~reactjs
//Adicionando novas props
interface ButtonProps extends TouchableOpacityProps {
  title: string,
};
~~~~
</details>
<details>
<summary markdonw="span">
Função de Remover
</summary>
Criado uma função que remove pelo ID. Pegamos o oldState e usamos o filter para recuperar somente os IDs diferente daquele que foi escolhido

~~~~reactjs
  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }
~~~~

Como essa função usa um parametro, ela é passada dessa forma. No componente SkillCard

~~~~~reactjs
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
~~~~~
</details>
