import { StyleSheet } from 'react-native';


export const useStyles = () => {

    const styles = StyleSheet.create({
        container:{
            padding:10,
            flex:1,
            justifyContent:'center',
            marginTop:50,
            paddingLeft:30,
            paddingRight:30,
        }, 
        btn:{
            padding:10,
            marginTop:30
        },
        hr:{
            marginBottom:5,
            marginTop:5,
            height:1,
            backgroundColor:'gray'
        },
        text:{
            fontSize:20,
            fontWeight:'bold'
        },
        textarea:{
            marginTop:7,
            marginBottom:7
        }
            
    })
    return styles;
}