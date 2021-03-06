import { StyleSheet } from 'react-native';


export const useStyles = () => {

    const styles = StyleSheet.create({
        container: {
            padding: 10,
            flex: 1,
            justifyContent: 'center',
            marginTop: 50,
            paddingLeft: 30,
            paddingRight: 30,
        },
        btn: {
            padding: 10,
            marginTop: 20,
            marginBottom: 20
        },
        row: {
            borderColor:'gray',
            borderWidth: 1,
            padding: 3,
            borderRadius: 5,
            marginBottom: 5,
            
        },
        heading: {
            fontWeight: 'bold',
            width: '20%',
            color: 'blue',

        },
        subRow: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        text: {
            width: '80%',
        },
        
        day:{
            textAlign:'center',
            fontSize:17,
            fontWeight:'bold',
            color:'blue'
        }



    })
    return styles;
}