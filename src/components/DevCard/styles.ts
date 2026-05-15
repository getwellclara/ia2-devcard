import { StyleSheet } from "react-native";
import { THEMES } from "../../styles/constants";

export const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:"rgb(126, 218, 218)",
        borderRadius: THEMES.border.radius.md,
        padding: 32,
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
    },

    cardAvatarContainer:{
        backgroundColor:"rgb(170, 221, 221)",
        padding: 4,
        borderRadius: "100%",
    },

    cardAvatarSubContainer:{
        backgroundColor:"rgb(255, 255, 255)",
        borderRadius: "100%",
        width: 120,
        height: 120,
        justifyContent: "center",
        alignItems: "center",
    },

    cardAvatarLetter:{
        color: THEMES.colors.primary,
        fontSize: THEMES.text.heading.h4,
        fontWeight: "bold",
    },

    cardTitle:{
        color: THEMES.colors.primary_foreground,
        fontSize: THEMES.text.heading.h1,
        fontWeight: "bold",
        textShadowColor: THEMES.colors.text_shadow,
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 5,
    },

    cardText:{
        color: THEMES.colors.primary_foreground,
        fontSize: THEMES.text.heading.h5,
        padding: 9,
        textAlign: "center"
    },

    cardSubtitle:{
        color: THEMES.colors.primary_foreground,
        fontSize: THEMES.text.heading.h2,
    },

    cardSeparator:{
         backgroundColor:"rgb(255, 255, 255)",
         width: 300,
         height: 1,
         marginVertical: 16
    },

    cardBadgeContainer:{
        backgroundColor: "#ffa631",
        padding: 15,
        borderRadius: 100,
        elevation: 3,
        shadowOffset: {width: 2, height: 2},
    },

    cardBadgeText:{
        color: "#995e12",
        fontWeight: "bold",
        letterSpacing: 1
    },

    cardTextGroup:{
        justifyContent: "center",
        alignItems: "center",
        gap: 8
    }
})