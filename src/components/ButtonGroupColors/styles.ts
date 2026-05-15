import { StyleSheet } from "react-native"
import { THEMES } from "../../styles/constants"

export const styles = StyleSheet.create({
    buttonGroupContainer:{
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
    },

    buttonGroupButtonContainer: {
        borderWidth: 2,
        borderColor: THEMES.colors.text_shadow,
        borderRadius: THEMES.border.radius.md,
        paddingHorizontal: 12,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        flex: 1
    },

    buttonGroupButtonColorIndicator:{
        width: 24,
        height: 24,
        borderRadius: "100%"
    },

    buttonGroupButtonText:{
        color: THEMES.colors.subtitle,
        fontWeight:"bold"
    },
})
