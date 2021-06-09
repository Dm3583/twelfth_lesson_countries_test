// import renderCountry from './renderCountry'
export default function fetchCountries(searchQuery) {

    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
    return fetch(url).then(response => {
        if(response.status != 200){
            throw new Error(response.status)
        }
        return response.json()}).then(json=>json).catch(e=>console.log('this is error from fatch ', e.message));


    // const search = fetch(url).then(response => response.json()).then(json=> renderCountry(json));

}



