import { Text, TouchableOpacity } from "react-native";

function Button({titulo, onPress}){
    return <TouchableOpacity style={{
        backgroundColor: "#39CEC9",
        padding: 5,
        margin: 10,        
        borderRadius: 10,
    }}
    onPress={onPress}
    >
        <Text style={{
            color: "#ffffff",
            textAlign: "center",
        }}>{titulo}</Text>
    </TouchableOpacity>
}

export default Button;