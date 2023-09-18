import { Text, TextInput, View } from "react-native";

function Input({
    rotulo,
    placeholder
}){
    return <View style={{
        padding: 10
    }}>
        <Text>{rotulo}</Text>
        <TextInput 
        placeholder={placeholder}
        style={{
            width: '100%',
            height: 40,
            backgroundColor: '#DBE9E9',
            borderRadius: 5,
            marginBottom: 10,
            paddingHorizontal: 10,
        }}  />
    </View>
}


export default Input;