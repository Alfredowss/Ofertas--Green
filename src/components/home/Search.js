import React, { Component } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { palette } from './palette'

export default class Search extends Component {
    render() {


        return (
            <GooglePlacesAutocomplete
                placeholder="Buscar en google places"
                minLength={6}
placeholderTextColor="#333"
                query={{
                    key: 'AIzaSyCshggT2C0jJqK2WJbsYNSUZ9TN7VPyTtM',
                    language: 'es'
                }}
                textInputProps={{
                    autoCapitalize: 'none',
                    autoCorrect: false
                }}
fetchDetails
                enablePoweredByContainer={false}
                styles={{
                    container: {
                        position: 'absolute',
                        top: Platform.select({ ios: 60, android: 40 }),
                        width: '100%'
                    },
                    textInputContainer: {
                        marginHorizontal: 10,
                        flex: 1,
                        backgroundColor: 'transparent',
                        height: 54,
                        borderTopWidth: 0,
                        borderBottomWidth: 0

                    },
textInput: {
                        height: 54,
                        margin: 0,
                        padding: 0,
                        borderRadius: 9,
                        elevation: 5, // Shadow android
shadowColor: palette.dark.main, // Shadow ios
                        shadowOpacity: 0.1, // Shadow ios
                        shadowOffset: { x: 0, y: 0 }, // Shadow ios
                        shadowRadius: 15,  // Shadow ios
                        borderWidth: 1,
                        borderColor: palette.grayScale.gray100,
                        fontSize: 18
},
                    listView: {
                        marginHorizontal: 20,
                        borderWidth: 1,
                        borderColor: palette.grayScale.gray100,
                        backgroundColor: palette.primary.contrastText,
                        elevation: 5,
                        shadowColor: palette.dark.main, // Shadow ios
shadowOpacity: 0.1, // Shadow ios
                        shadowOffset: { x: 0, y: 0 }, // Shadow ios
                        shadowRadius: 15,  // Shadow ios
                        marginTop: 15
                    },
                    description: {fontSize: 15
                    },
                    row: {
                        padding: 18,
                        height: 58
                    }
                }}

            />
        )
    }
}