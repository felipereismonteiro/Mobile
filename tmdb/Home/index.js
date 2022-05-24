import React, { useEffect, useState } from "react"
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'
import key from "../Components/key/key"


function Index () {

    const [movies, setMovie] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'



    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
            setMovie(data.results)})
    }, [movies])

    
    return(

        <View style={style.View}>
            <View style={style.containerPrincipal}>
                <Text style={style.textoPrincipal}>Lançamentos</Text>
            </View>
            <ScrollView>
            {movies.map(movie => {
                return(
                    <>
                        <View style={style.container}>
                            <Text style={style.text}>{movie.title}</Text>
                            <Image style={style.poster} source={{uri: `${image_path}${movie.poster_path}`}}/>
                        </View>      
                    </>
                )
            })}
            
            </ScrollView> 
            
        </View>
    )
}
export default Index

const style = StyleSheet.create({
    View: {
        backgroundColor: 'black',
        marginBottom: 110,
    },
    textoPrincipal: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 10,
        color: 'white',
    },
    containerPrincipal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 100,
        marginBottom: 10,
        textAlign: "center",
    },
    poster: {
        width:200,
        height: 300,
        bakgroundColor: 'red',
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        padding: 10,
        color: 'white',
        textAlign: "center",
        marginTop: -70,
    },
    final: {
        height: 200,
    }
})
