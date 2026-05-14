import { StyleSheet } from "react-native";
import { THEMES } from "../../styles/constants";

export const styles = StyleSheet.create({
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

    buttonContainer:{
        backgroundColor: THEMES.colors.primary,
        flexDirection: "row",
        justifyContent: "center",
        alignContent:"center",
        paddingHorizontal: 16,
        paddingVertical: 20,
        borderRadius: THEMES.border.radius.md,
        elevation: 5,
        shadowOffset: {width: 0, height: 4},
    },

    buttonText:{
        color: THEMES.colors.primary_foreground,
        fontWeight: "800",
        fontSize: 22,
    }
})