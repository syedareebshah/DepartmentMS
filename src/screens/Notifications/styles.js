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
            marginTop:20,
            marginBottom:20
        },
        
        text:{
            fontSize:20,
            color:'blue',
            fontWeight:'bold'
        },
        listItem:{
            backgroundColor:'rgba(220,220,220,0.65)',
            borderRadius:10,
            padding:15,
            marginBottom:5
        }
        
        
        
        
    })
    return styles;
}