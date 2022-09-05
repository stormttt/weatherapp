import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";


// 是不是需要{}?
const Search = ({onSearchChange}) => {
    // todo
    const [search, setSearch] = useState(null)

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    const loadOptions = (inputValue) => {
        //api from GeoDB Cities
        return fetch(`${GEO_API_URL}/cities?miniPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name} ${city.countryCode}`,

                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }
    return (<AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
    />);
}
export default Search;