import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/buttons";
import { THEMES } from "../styles/constants";

export default function SucessoScreen(){
    return(
       <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.Headercontainer}>
                    <Text style={styles.title}>Cartão criado com sucesso!</Text>
                    <Text style={styles.subtitle}> 
                        Seu cartão de visita digital está pronto.
                        Compartilhe com a galera!  
                    </Text>
                </View>   
                <View style={styles.footercontainer}>
                     <Button label="Criar outro cartão" />
                    <Button  label="Voltar ao início" variant="secondary" />
                </View>    
            </View>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        alignContent:"center",
        paddingHorizontal: 24,
    },

    Headercontainer:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 750,
    },
    title:{
        color: THEMES.colors.title,
        fontWeight: "900",
        fontSize: THEMES.text.heading.h1,
        width: 250,
        textAlign: "center"
    },

    subtitle:{
        color: THEMES.colors.subtitle,
        fontWeight: "600",
        fontSize: 18,
        width: 230,
        textAlign: "center",
    },

    footercontainer:{
        flexDirection: "column",
        gap: 12,
    },
})