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
        heading: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
            color: 'blue',
            marginBottom: 15,
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
        },
        details: {
            backgroundColor: 'white',
            color: 'black',
            padding: 25,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
        },
        regards: {
            fontSize: 18,
            fontWeight: 'bold',
            display: 'flex',
            textAlign: 'right',
            marginTop: 10,
            padding: 10

        }

    })
    return styles;
}