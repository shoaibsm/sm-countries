const getCountryInfo = async (name) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)

        if (!response.ok) {
            throw new Error('Faild to fetch data')
        }

        const data = await response.json()

        return data

    } catch (error) {
        console.log(error);
    }
}

export {
    getCountryInfo
}