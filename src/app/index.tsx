import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { THEMES } from "../styles/constants";
import { Button } from "../components/buttons";

export default function HomeScreen(){
    return(
       <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.Headercontainer}>
                    <Text style={styles.logo}>DevCard</Text>
                    <Text style={styles.subtitle}>Seu cartão de visita digital de dev mobile</Text>
                </View>       
                <Button label="Criar meu cartão" variant="primary" />
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

    logo:{
        color: THEMES.colors.primary,
        fontWeight: "bold",
        fontSize: 90,
        textShadowColor: THEMES.colors.text_shadow,
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 5,
    },

    subtitle:{
        color: THEMES.colors.subtitle,
        fontWeight: "400",
        fontSize: 18,
        width: 230,
        textAlign: "center",
    },

})