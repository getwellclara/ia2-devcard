import { StyleSheet } from "react-native";
import { THEMES } from "../../styles/constants";

const stylePrimary = StyleSheet.create({
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
    },
})

const styleSecondary = StyleSheet.create({
    buttonContainer:{
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent: "center",
        alignContent:"center",
        paddingHorizontal: 16,
        paddingVertical: 20,
        borderRadius: THEMES.border.radius.md,
    },

    buttonText:{
        ...stylePrimary.buttonText,
        color: THEMES.colors.primary
    },
})

const styleOutline = StyleSheet.create({
    buttonContainer:{
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent: "center",
        alignContent:"center",
        paddingHorizontal: 16,
        paddingVertical: 20,
        borderRadius: THEMES.border.radius.md,
        borderColor: THEMES.colors.primary,
        borderWidth: 2
    },

    buttonText:{
        ...stylePrimary.buttonText,
        color: THEMES.colors.primary
    },
})

export const styles = {
    primary: stylePrimary,
    secondary: styleSecondary,
    outline: styleOutline
} as const