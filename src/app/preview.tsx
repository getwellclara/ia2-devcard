import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/buttons";
import { THEMES } from "../styles/constants";
import { DevCard } from "../components/DevCard";

export default function PreviewScreen(){
    return(
       <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.Headercontainer}>
                    <Text style={styles.title}>Seu cartão</Text>
                </View>   

                <DevCard/>
                
                <View style={styles.footercontainer}>
                     <Button label="Editar dados" variant="outline" />
                    <Button  label="Finalizar" />
                </View>    
            </View>
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
        gap: 16
    },

    title:{
        color: THEMES.colors.primary,
        fontWeight: "900",
        fontSize: THEMES.text.heading.h3,
        textAlign: "center"
    },

    footercontainer:{
        flexDirection: "column",
        gap: 12,
    },
})