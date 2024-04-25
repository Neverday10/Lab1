import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
const Bt2 = ()=>{
    return(
        <View style={myStyle.container}>
            <TouchableOpacity style={{...myStyle.button,backgroundColor: "red"}}>
                <Text style={{color: "White"}}>Say Hello</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...myStyle.button,backgroundColor:"blue"}}>
                <Text style={myStyle.Text}>Say Goodbute</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Bt2
const myStyle = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    button:{
        height: 60,
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        margin: 20
    },
    Text:{
        color:"White",
        fontSize: 20,
    }
})