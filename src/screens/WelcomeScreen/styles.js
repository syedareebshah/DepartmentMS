import { StyleSheet } from 'react-native';


export const useStyles = () => {

    const styles = StyleSheet.create({
        container:{
            padding:10,
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            marginTop:50,
        },
        img:{
            width:150,
            height:150,
            resizeMode:'contain',
            marginBottom:40
        },
        btn:{
            width:'80%',
            padding:10,
            margin:15
        },
        
        
        
    })
    return styles;
}