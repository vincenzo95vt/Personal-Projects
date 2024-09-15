const apiKey = "016e2dd0e5b8e8a24a5e254d1d25cbbf"
const md5Hash = "ce06267b66b09f160f5ca8bff859481a"

export const fetchMarvelData = async (section) => {
    try {
        const url = `https://gateway.marvel.com/v1/public/${section}?ts=1&apikey=${apiKey}&hash=${md5Hash}`
        console.log(apiKey)
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
    
}

export const fetchMarvelCharByName = async (charName) => {
    try {
        const url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${charName}&ts=1&apikey=${apiKey}&hash=${md5Hash}`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error.status)
    }
    
}


export const fetchMarvelCharacter = async (section, charId) => {
    try {
        const url = `https://gateway.marvel.com/v1/public/${section}/${charId}?ts=1&apikey=${apiKey}&hash=${md5Hash}`
        const response = await fetch(url)
        const data = await response.json()
        return data.data.results
    } catch (error) {
        console.error(error.message)
    }
}