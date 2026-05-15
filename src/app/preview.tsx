import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/buttons";
import { THEMES } from "../styles/constants";
import { DevCard } from "../components/DevCard";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Form } from "./cadastro";

export default function PreviewScreen(){
    const router = useRouter()
    const params = useLocalSearchParams() as unknown as Form

    return(
       <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.Headercontainer}>
                    <Text style={styles.title}>Seu cartão</Text>
                </View>   

                <DevCard data={params}/>
                
                <View style={styles.footercontainer}>
                     <Button label="Editar dados" variant="outline" onPress={() => router.push("/cadastro")} />
                    <Button  label="Finalizar" onPress={() => router.push("/sucesso")} />
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