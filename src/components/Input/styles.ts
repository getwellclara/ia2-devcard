import { StyleSheet } from "react-native"
import { THEMES } from "../../styles/constants"

export const styles = StyleSheet.create({
    formGroup:{
        flexDirection: "column",
        gap: 5
    },

    formLabel:{
        color: THEMES.colors.title,
        fontWeight: "bold",
        paddingHorizontal: 16
    },

    formInput:{
        borderRadius: THEMES.border.radius.md,
        borderWidth: 2,
        borderColor: THEMES.colors.text_shadow,
        paddingHorizontal: 16,
        color: THEMES.colors.subtitle,
        fontWeight: "600"
    },

    formError:{
        color: THEMES.colors.error,
        fontWeight: "bold"
    },
})
    