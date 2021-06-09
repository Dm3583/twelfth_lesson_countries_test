import ListCountries from '../template/ListCountries';
import SearchCountry from '../template/searchCountry';
import fetchCountries from './fetchCountries';

import { alert, notice, info, success, error, defaultModules } from'@pnotify/core';
import"@pnotify/core/dist/PNotify.css";
import"@pnotify/core/dist/BrightTheme.css";


const countryContainerRef = document.querySelector('.country');

const messageAlert = {
    textManyCountries: 'Too many matches found. Please enter a more specific quary!',
    textNotFindCountry: 'Did not find country. Please enter a more specific quary!', 
    
}

export default function renderCountry(query){
    clear();

    fetchCountries(query).then(arr =>{
        if(!arr){
            renderAlert(messageAlert.textNotFindCountry);
            return
        }
        if(arr.length > 10){
            renderAlert(messageAlert.textManyCountries)
        } 
        if( 1 < arr.length && arr.length <= 10) {
            const countryOne = arr.find(element => element.name.toLowerCase() === query.toLowerCase());
            if(countryOne){
                renderSearchCountry([countryOne])
            } else {
            console.log(arr);
            render(arr, ListCountries)
            }
        }
        if(arr.length === 1){
            render(arr,SearchCountry)
            console.log(arr);
        }

    }).catch(e=>console.log(e.message));
    
}  


function clear(){
    countryContainerRef.innerHTML = '';
}

function renderAlert(text){
    const myError = error({
        text: text,
    });
}

function render(arr, template ){
    const markup = template(arr)
    countryContainerRef.insertAdjacentHTML('beforeend', markup);
}

