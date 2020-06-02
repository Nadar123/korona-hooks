import React, {useState, useEffect, Fragment} from 'react'
import {NativeSelect, formControl, FormControl } from '@material-ui/core';
import {fetchCountries} from '../../api/index';


const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);
    
    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchApi();
    }, [setFetchedCountries]);

    return (
        <Fragment>
            <div className="container">
                <FormControl className="form-wrapper">
                    <NativeSelect 
                        defaultValue="" 
                        onChange={(e) => handleCountryChange(e.target.value)} 
                    >
                        <option value=""> Select country</option>
                        {fetchedCountries.map((country) => 
                        <option value={country} key={country}>{country}</option>)}

                    </NativeSelect>
                </FormControl>
            </div>
        </Fragment>
    )
}

export default CountryPicker
