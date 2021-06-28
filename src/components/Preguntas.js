import React, { useState } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Picker } from "@react-native-community/picker"

const Preguntas = ({nombre = ""}) => {

    const [respuesta, setRespuesta] = useState("")
    console.log(respuesta)

    return (
            <>
            <Text style = {styles.pregunta}>{nombre}</Text>
            <Picker style = {styles.picker}
                selectedValue = {respuesta}
                onValueChange = { respuesta => setRespuesta(respuesta) }
            >
                <Picker.Item label = "- Seleccione -" value = "" />
                <Picker.Item label = "Si" value= "Si" />
                <Picker.Item label = "No" value = "No"/>
            </Picker>
            </>
            
    );
}

const styles = StyleSheet.create({
    picker: {
        color: "#FFF"
      },
      pregunta: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold"
      }
})

export default Preguntas;