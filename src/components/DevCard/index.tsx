import { Text, View } from "react-native";
import { styles } from "./styles";

export function DevCard() {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardAvatarContainer}>
                <View style={styles.cardAvatarSubContainer}>
                    <Text style={styles.cardAvatarLetter}>C</Text>
                </View>
            </View>

            <View style={styles.cardTextGroup}>
                <Text style={styles.cardTitle}>Clara Freitas</Text>

                <View style={styles.cardTextGroup}>
                    <Text style={styles.cardText}>Estudante de Engenharia de Software</Text>
                    <Text style={styles.cardSubtitle}>Centro Universitário - UNIVAG</Text>
                </View>
            </View>


            <View style={styles.cardSeparator} />

            <View style={styles.cardTextGroup}>
                <Text style={styles.cardSubtitle}>Sem especialidade</Text>
            </View>

            <View style={[styles.cardBadgeContainer, { marginTop: 8 }]}>
                <Text style={styles.cardBadgeText}>Estudante</Text>
            </View>

            <Text style={styles.cardSubtitle}>1 ano cursando</Text>
        </View>

    )
}
