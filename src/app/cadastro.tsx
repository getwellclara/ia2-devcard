import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { THEMES } from "../styles/constants";
import { Input } from "../components/Input";
import { useState } from "react";
import { ButtonGroupColors } from "../components/ButtonGroupColors";
import { Button } from "../components/buttons";
import { useRouter } from "expo-router";

const CARD_COLORS = [
    {
        id: "c1",
        name: "azul",
        colorCode: "rgb(126, 218, 218)"
    },
    {
        id: "c2",
        name: "verde",
        colorCode: "rgb(102, 233, 130)"
    },
    {
        id: "c3",
        name: "roxo",
        colorCode: "rgb(220, 145, 255)"
    },
]

export type Form = {
    fullName: string,
    role: string,
    company?: string,
    experience: number,
    cardColor: string,
    favoriteStack: string
}

type Error = {
    fullName?: string,
    role?: string,
    company?: string,
    experience?: string,
    cardColor?: string,
    favoriteStack?: string
}

export default function CadastroScreen() {
    const router = useRouter()

    const [form, setForm] = useState<{ data: Form, errors: Error }>({
        data: {
            fullName: "",
            role: "",
            company: "",
            experience: 0,
            cardColor: "",
            favoriteStack: ""
        },

        errors: {}
    })

    function handleSubmit() {
        router.push({
            pathname: '/preview',
            params: form.data
        })


    }

    function handleInputChange(fieldName: keyof Form, value: string | number) {
        if (!value) return
        setForm((currentForm) => {
            return {
                ...currentForm,
                data: {
                    ...currentForm.data,
                    [fieldName]: value
                }
            }
        })

        handleInputValidation(fieldName)
    }

    function handleSetOrRemoveInputError(fieldName: keyof Form, error: string | undefined) {
        setForm((currentForm) => {
            return {
                ...currentForm,
                errors: {
                    ...currentForm.errors,
                    [fieldName]: error
                }
            }
        })
    }

    function handleInputValidation(field: keyof Form) {

        const { fullName, role, experience, favoriteStack, cardColor } = form.data

        switch (field) {
            case "fullName":
                if (fullName.length === 0) {
                    handleSetOrRemoveInputError("fullName", "Informe o nome completo")
                }
                if (fullName.length < 3) {
                    handleSetOrRemoveInputError("fullName", "O nome deve conter mais que 3 caracteres")
                }
                if (fullName.length >= 3) {
                    handleSetOrRemoveInputError("fullName", undefined)
                }
                break

            case "role":
                if (role.length === 0) {
                    handleSetOrRemoveInputError("role", "Informe o cargo")
                } else {
                    handleSetOrRemoveInputError("role", undefined)
                }
                break

            case "experience":
                if (experience < 1) {
                    handleSetOrRemoveInputError("experience", "o tempo de experiêcia deve ser maior que 0")
                } else {
                    handleSetOrRemoveInputError("experience", undefined)
                }
                break

            case "cardColor":
                if (!!cardColor) {
                    handleSetOrRemoveInputError("cardColor", "Selecione pelo menos uma cor")
                } else {
                    handleSetOrRemoveInputError("cardColor", undefined)
                }
                break

            case "favoriteStack":
                if (favoriteStack.length === 0) {
                    handleSetOrRemoveInputError("experience", "Informe uma especilidade")
                } else {
                    handleSetOrRemoveInputError("favoriteStack", undefined)
                }
                break

            default:
                break
        }
    }

    return (
        <SafeAreaView>
            <KeyboardAvoidingView>
                <View style={styles.container}>
                    <View style={styles.Headercontainer}>
                        <Text style={styles.title}>Cadastro</Text>

                        <Text style={styles.subtitle}>Prencha seus dados de dev</Text>
                    </View>

                    <View style={{ height: 550 }}>
                        <View style={{ gap: 12, marginBottom: 12 }}>
                            <Input
                                onChangeText={(text) => handleInputChange('fullName', text)}
                                label="Nome completo"
                                placeholder="Insira seu nome"
                                defaultValue={form.data.fullName}
                                onChange={() => {
                                    handleInputValidation("fullName")
                                }}
                                onBlur={() => {
                                    handleInputValidation("fullName")
                                }}
                                errorMessage={form.errors["fullName"]}
                            />
                            <Input
                                onChangeText={(text) => handleInputChange('role', text)}
                                label="Cargo"
                                placeholder="Insira seu cargo"
                                defaultValue={form.data.role}
                                onChange={() => {
                                    handleInputValidation("role")
                                }}
                                onBlur={() => {
                                    handleInputValidation("role")
                                }}
                                errorMessage={form.errors["role"]}
                            />
                            <Input
                                onChangeText={(text) => handleInputChange('company', text)}
                                label="Empresa (opcional)"
                                placeholder="Insira a empresa"
                                defaultValue={form.data.company}
                                onChange={() => {
                                    handleInputValidation("company")
                                }}
                                onBlur={() => {
                                    handleInputValidation("company")
                                }}
                                errorMessage={form.errors["company"]}
                            />
                            <Input
                                onChangeText={(text) => handleInputChange('experience', parseInt(text))}
                                label="Anos de experiência"
                                placeholder="Insira o tempo de experiência"
                                defaultValue={form.data.experience.toString()}
                                onChange={() => {
                                    handleInputValidation("experience")
                                }}
                                onBlur={() => {
                                    handleInputValidation("experience")
                                }}
                                errorMessage={form.errors["experience"]}
                            />
                            <Input
                                onChangeText={(text) => handleInputChange('favoriteStack', text)}
                                label="Tecnologia favorita"
                                placeholder="Insira sua tecnologia favorita"
                                defaultValue={form.data.favoriteStack}
                                onChange={() => {
                                    handleInputValidation("favoriteStack")
                                }}
                                onBlur={() => {
                                    handleInputValidation("favoriteStack")
                                }}
                                errorMessage={form.errors["favoriteStack"]}
                            />
                        </View>

                        <View>
                            <Text style={styles.buttonChangeColor}>Cor do cartão: {form.data.cardColor}</Text>
                            <ButtonGroupColors onSelect={(colorCode) => handleInputChange('cardColor', colorCode)} group={CARD_COLORS}
                            />
                        </View>
                    </View>

                    <View style={styles.footercontainer}>
                        <Button onPress={handleSubmit} label="Gerar cadastro" />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        paddingHorizontal: 24,
        gap: 16
    },

    Headercontainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 4
    },

    title: {
        color: THEMES.colors.primary,
        fontWeight: "900",
        fontSize: THEMES.text.heading.h3,
        textAlign: "center"
    },

    subtitle: {
        color: THEMES.colors.subtitle,
        fontWeight: "400",
        fontSize: 18,
        textAlign: "center",
    },

    buttonChangeColor: {
        color: THEMES.colors.title,
        fontWeight: "bold",
        gap: 5,
        paddingVertical: 8,
        paddingHorizontal: 16
    },

    footercontainer: {
        flexDirection: "column",
        gap: 12,
    },
})