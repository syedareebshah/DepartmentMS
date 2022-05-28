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
        hr: {
            marginBottom: 5,
            marginTop: 5,
            height: 1,
            backgroundColor: 'gray'
        },
        img: {
            width: 120,
            height: 120,
            resizeMode: 'contain',
            alignSelf: 'center'
        },
        name: {
            textAlign: 'center',
            fontWeight: '900',
            fontSize: 20,
            color: 'blue',
            marginBottom: 20
        },
        txt: {
            fontSize: 15,
            color: 'blue',
            fontWeight: 'bold'
        },
        innerTxt: {
            color: 'black',
            fontWeight: 'normal'
        },
        innerContaier: {
            backgroundColor: 'white',
            paddingBottom: 50,
            paddingTop: 20,
            paddingRight: 20,
            paddingLeft: 20,
            marginTop: 20,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
        }




    })
    return styles;
}