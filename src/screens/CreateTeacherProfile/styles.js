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
        
        
        
    })
    return styles;
}