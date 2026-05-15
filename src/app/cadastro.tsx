import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/buttons";
import { THEMES } from "../styles/constants";
import { Input } from "../components/Input";
import { ButtonGroupColors } from "../components/ButtonGroupColors";

export default function PreviewScreen(){
    return(
       <SafeAreaView>
            <KeyboardAvoidingView>
                <View style={styles.container}>
                <View style={styles.Headercontainer}>
                    <Text style={styles.title}>Cadastro</Text>

                    <Text style={styles.subtitle}>Prencha seus dados de dev</Text>
                </View>   
                
                <View style={{ height: 700}}>
                    <View style = {{ gap: 12, marginBottom: 12 }}>
                    <Input label="Nome completo" placeholder="Felipe Delminio"/>
                    <Input label="Cargo" placeholder="Desenvolvedor Frontend"/>
                    <Input label="Empresa (opcional)" placeholder= "Vilarouca"/>
                    <Input label="Anos de experiência" placeholder="2 anos"/>
                    <Input label="Tecnologia favorita" placeholder="JavaScript"/>
                </View>
               
                    <ButtonGroupColors
                        group= {[
                            {
                                id: "c1",
                                name:"azul",
                                colorCode:"rgb(126, 218, 218)"
                            },
                            {
                                id: "c2",
                                name:"verde",
                                colorCode:"rgb(102, 233, 130)"
                            },
                            {
                                id: "c3",
                                name:"roxo",
                                colorCode:"rgb(220, 145, 255)"
                            },
                        ]}
                    />

                </View>

                <View style={styles.footercontainer}>
                    <Button  label="Gerar cadastro" />
                </View>    
            </View>
            </KeyboardAvoidingView>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "column",
        justifyContent: "center",
        paddingHorizontal: 24,
        gap: 16
    },

    Headercontainer:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 4
    },

    title:{
        color: THEMES.colors.primary,
        fontWeight: "900",
        fontSize: THEMES.text.heading.h3,
        textAlign: "center"
    },

    subtitle:{
        color: THEMES.colors.subtitle,
        fontWeight: "400",
        fontSize: 18,
        textAlign: "center",
    },

    footercontainer:{
        flexDirection: "column",
        gap: 12,
    },
})