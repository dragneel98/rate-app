import React from 'react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, TextInput, View, StyleSheet, Text } from 'react-native';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
    .object().shape({
        email: yup.string().email("introduce un email valido").required("hola"),
        password: yup.string().required("hola")
    })
// .required()

const style = StyleSheet.create({
    container: {
        margin: 10,
        justifyContent: "center",
        gap: 10,
    },
    input: {
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 5,
    },
    inputFocused: {
        backgroundColor: "#bfbfbf",
    }
});

const RenderInput = ({ name, placeholder, password, control, register }) => {
    const [isFocused, setIsFocused] = useState(false);
    // const { control } = useForm();

    return (
        <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={[
                        style.input,
                        isFocused ? style.inputFocused : null
                    ]}
                    onChangeText={onChange}
                    onBlur={() => {
                        onBlur();
                        setIsFocused(false);
                    }}
                    onFocus={() => setIsFocused(true)}
                    value={value}
                    placeholder={placeholder}
                    secureTextEntry={password}
                />
            )}
            name={name}
            {...register(name)}
            // rules={{ required: 'Este campo es obligatorio' }}
            defaultValue=""
        />
    );
};

export default function Login2() {
    const { register, control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <View style={style.container}>
            <RenderInput name="email" placeholder="introduce tu email" control={control} register={register} />
            {errors.email && <Text>{errors.email.message}</Text>}
            <RenderInput name="password" placeholder="introduce tu contraseña" password={true} control={control} register={register} />
            {errors.password && <Text>{errors.password.message}</Text>}
            <Button title="Iniciar Sesión" onPress={handleSubmit(onSubmit)} />
        </View>
    )
}