# sm-country-info

A React component package for retrieving country information.

## Installation

You can install the package via npm:

```bash
npm install sm-country-info

## Usage

Example usage in a React component:

import React, { useEffect, useState } from 'react';
import { getCountryInfo } from 'sm-country-info';

const App = () => {
    const [countryInfo, setCountryInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCountryInfo('India');
                setCountryInfo(data[0]); // Assuming the API returns an array of countries and we want the first one
            } catch (error) {
                console.error('Error fetching country data:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Country Information</h1>
            {countryInfo && (
                <div>
                    <p>Country Name: {countryInfo.name.common}</p>
                    <p>Country Capital: {countryInfo.capital}</p>
                    {/* Add more details as needed */}
                </div>
            )}
        </div>
    );
};

export default App;


```

## NPM Version Badge:

[![npm version](https://badge.fury.io/js/sm-country-info.svg)](https://www.npmjs.com/package/sm-country-info)
