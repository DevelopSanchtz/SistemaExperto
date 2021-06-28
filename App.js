import React, { useState } from 'react';
import {Picker} from '@react-native-community/picker'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import Preguntas from "./src/components/Preguntas"

const App = () => {

  const [fiebre, setFiebre] = useState("")
  const [tosSeca, setTosSeca] = useState("")
  const [cansancio, setCansancio] = useState("")
  const [molestiasDolores, setMolestiasDolores] = useState("")
  const [dolorGarganta, setDolorGarganta] = useState("")
  const [perdida, setPerdida] = useState("")
  const [erupciones, setErupciones] = useState("")
  const [dificultad, setDificultad] = useState("")
  const [presionPecho, setPresionPecho] = useState("")
  const [incapacidad, setIncapacidad] = useState("")

  const [respuesta, setRespuesta] = useState("")

  const Evaluacion = () => {
    if (dificultad === "Si" && presionPecho === "Si" && dificultad === "Si" && perdida == "Si" && erupciones == "Si" && fiebre === "Si" && tosSeca === "Si" && cansancio === "Si"){
      Alert.alert("¡CUIDADO!", "Tienes SINTOMAS DE COVID, acude a tu doctor, y toma tu sana distancia", [
        {text: 'De acuerdo', onPress: () => console.log("Understood")}
      ])
  }

    else if (dificultad === "Si" && presionPecho === "Si" && dificultad === "Si" && perdida == "Si" && erupciones == "Si"){
        Alert.alert("¡CUIDADO!", "Tienes SINTOMAS DE COVID, acude a tu doctor, y toma tu sana distancia", [
          {text: 'De acuerdo', onPress: () => console.log("Understood")}
        ])
    }
    
    else if ( perdida === "Si" && dificultad === "Si" && incapacidad === "Si" && presionPecho === "Si") {
      Alert.alert("¡CUIDADO!", "Tienes SINTOMAS DE COVID, acude a tu doctor, y toma tu sana distancia", [
        {text: 'De acuerdo', onPress: () => console.log("Understood")}
      ])
    }

    else if ( perdida === "Si" && dificultad === "Si" && incapacidad === "Si") {
      Alert.alert("¡CUIDADO!", "Tienes SINTOMAS DE COVID, acude a tu doctor, y toma tu sana distancia", [
        {text: 'De acuerdo', onPress: () => console.log("Understood")}
      ])
    }

    else if ( perdida === "Si" && dificultad === "Si") {
      Alert.alert("¡CUIDADO!", "Tienes SINTOMAS DE COVID, acude a tu doctor, y toma tu sana distancia", [
        {text: 'De acuerdo', onPress: () => console.log("Understood")}
      ])
    }

    else if ( perdida === "Si") {
      Alert.alert("¡CUIDADO!", "Tienes SINTOMAS DE COVID, acude a tu doctor, y toma tu sana distancia", [
        {text: 'De acuerdo', onPress: () => console.log("Understood")}
      ])
    }

    else if ( dificultad === "No" && presionPecho === "No" && dificultad === "No" && perdida == "No" && erupciones == "No" && fiebre === "No" && tosSeca === "No" && cansancio === "No" && molestiasDolores === "No" && dolorGarganta === "No"){
      Alert.alert("En hora buena!", "NO tienes sintomas de COVID, pero de igual manera toma tu sana distancia", [
        {text: 'De acuerdo', onPress: () => console.log("Understood")}
      ])
    }

    else {
      Alert.alert("¡Toma tus precauciones!", "Si estuviste cerca de alguien con covid, acude a tu doctor, y toma tu sana distancia", [
        {text: 'De acuerdo', onPress: () => console.log("Understood")}
      ])
    }
  }

  return (
    <View style = {styles.container}>
      
      <View style = {styles.header}>
          <Image
            style = {{height: 180, width: 200}} 
            source = {require("./src/assets/doctor.png")}
          />
      </View>

      <ScrollView style = {styles.body}>

        {/* FIEBRE */}
         
          <Text style = {styles.pregunta}>¿Tienes Fiebre?</Text>
            <Picker style = {styles.picker}
                selectedValue = {fiebre}
                onValueChange = { respuesta => setFiebre(respuesta) }
            >
                <Picker.Item label = "- Seleccione -" value = "" />
                <Picker.Item label = "Si" value= "Si" />
                <Picker.Item label = "No" value = "No"/>
            </Picker>


        {/* TOS SECA */}
         
          <Text style = {styles.pregunta}>¿Tienes Fiebre?</Text>
            <Picker style = {styles.picker}
                selectedValue = {tosSeca}
                onValueChange = { respuesta => setTosSeca(respuesta) }
            >
                <Picker.Item label = "- Seleccione -" value = "" />
                <Picker.Item label = "Si" value= "Si" />
                <Picker.Item label = "No" value = "No"/>
            </Picker>

        {/* CANSANCIO */}
         
          <Text style = {styles.pregunta}>¿Tienes Cansancio?</Text>
            <Picker style = {styles.picker}
                selectedValue = {cansancio}
                onValueChange = { respuesta => setCansancio(respuesta) }
            >
                <Picker.Item label = "- Seleccione -" value = "" />
                <Picker.Item label = "Si" value= "Si" />
                <Picker.Item label = "No" value = "No"/>
            </Picker>

        {/* Molestias y Dolores */}
         
          <Text style = {styles.pregunta}>¿Tienes Molestias y Dolores?</Text>
            <Picker style = {styles.picker}
                selectedValue = {molestiasDolores}
                onValueChange = { respuesta => setMolestiasDolores(respuesta) }
            >
                <Picker.Item label = "- Seleccione -" value = "" />
                <Picker.Item label = "Si" value= "Si" />
                <Picker.Item label = "No" value = "No"/>
            </Picker>

        {/* Dolor de Garganta */}
         
          <Text style = {styles.pregunta}>¿Tienes Dolor de garganta?</Text>
            <Picker style = {styles.picker}
                selectedValue = {dolorGarganta}
                onValueChange = { respuesta => setDolorGarganta(respuesta) }
            >
                <Picker.Item label = "- Seleccione -" value = "" />
                <Picker.Item label = "Si" value= "Si" />
                <Picker.Item label = "No" value = "No"/>
            </Picker>

        {/* Pérdida del sentido del olfato o del gusto */}
         
          <Text style = {styles.pregunta}>¿Tienes Pérdida del sentido del olfato o del gusto?</Text>
            <Picker style = {styles.picker}
                selectedValue = {perdida}
                onValueChange = { respuesta => setPerdida(respuesta) }
            >
                <Picker.Item label = "- Seleccione -" value = "" />
                <Picker.Item label = "Si" value= "Si" />
                <Picker.Item label = "No" value = "No"/>
            </Picker>

        {/* Erupciones cutáneas o pérdida del color en los dedos  */}
         
          <Text style = {styles.pregunta}>¿Tienes Erupciones cutáneas o pérdida del color en los dedos?</Text>
            <Picker style = {styles.picker}
                selectedValue = {erupciones}
                onValueChange = { respuesta => setErupciones(respuesta) }
            >
                <Picker.Item label = "- Seleccione -" value = "" />
                <Picker.Item label = "Si" value= "Si" />
                <Picker.Item label = "No" value = "No"/>
            </Picker>

        {/* Dificultad para respirar o sensación de falta de aire  */}
         
          <Text style = {styles.pregunta}>¿Tienes Dificultad para respirar o sensación de falta de aire?</Text>
            <Picker style = {styles.picker}
                selectedValue = {dificultad}
                onValueChange = { respuesta => setDificultad(respuesta) }
            >
                <Picker.Item label = "- Seleccione -" value = "" />
                <Picker.Item label = "Si" value= "Si" />
                <Picker.Item label = "No" value = "No"/>
            </Picker>

        {/* Dolor o presión en el pecho  */}
         
        <Text style = {styles.pregunta}>¿Tienes Dolor o presión en el pecho?</Text>
            <Picker style = {styles.picker}
                selectedValue = {presionPecho}
                onValueChange = { respuesta => setPresionPecho(respuesta) }
            >
                <Picker.Item label = "- Seleccione -" value = "" />
                <Picker.Item label = "Si" value= "Si" />
                <Picker.Item label = "No" value = "No"/>
            </Picker>

        {/* Incapacidad Para hablar o moverse  */}
         
        <Text style = {styles.pregunta}>¿Tienes Incapacidad para hablar o moverte?</Text>
            <Picker style = {styles.picker}
                selectedValue = {incapacidad}
                onValueChange = { respuesta => setIncapacidad(respuesta) }
            >
                <Picker.Item label = "- Seleccione -" value = "" />
                <Picker.Item label = "Si" value= "Si" />
                <Picker.Item label = "No" value = "No"/>
            </Picker>

      </ScrollView>

        <View style  = {styles.end}>
            <TouchableOpacity 
              onPress = {Evaluacion}
              style = { styles.botonGeneral }
            >
              <Text style = { styles.botonTexto }>Validar</Text>
            </TouchableOpacity>
        </View>

    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c2732",
    flex: 1
  },
  header :{ 
    height: 250,
    backgroundColor: "white",
    borderBottomStartRadius: 350,
    borderBottomEndRadius: 350,
    justifyContent: "center",
    alignItems: "center"
  },
  body:{
    marginTop: 50,
    height: 10
  },
  end: {
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  picker: {
    color: "#FFF"
  },
  pregunta: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold"
  },
  botonTexto: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold"
  },
  botonGeneral: {
    height: 50,
    width: 200,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#FFF"
  }
});

export default App;
