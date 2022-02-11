import React, {useState} from "react";
import { View, StyleSheet, TextInput, Button, Alert, TextInputComponent } from "react-native";
 export const AddTodo = ({onSubmit}) => {

const [value, setValue] = useState('')

     const pressHandler = () => {
         if (value.trim()){
           onSubmit(value)
           setValue('')
         }else{
            Alert.alert("Введите цель!")

         }
     }
     return (
         <View style = {styles.block}>
         <TextInput style ={styles.input}
         onChangeText={text => setValue(text)}
         value={value}
         placeholder="Введите название дела..."
         autoCorrect={false}
         autoCapitalize='none'
       //  keyboardType="number-pad"
         />
         <Button style ={styles.button} title="Добавить" onPress={pressHandler}/>
         </View>
     )
 }

 const styles = StyleSheet.create({
     block: {
flexDirection: "row",
justifyContent: "space-between",
alignItems: "center",
marginBottom: 15

     },
     input: {
         padding: 10,
         width: "70%",
         borderStyle: "solid",
         borderWidth: 2,
         borderColor: "#3949ab",
         fontSize: 18
     },
     button:{
        
         
         
     }
 }) 