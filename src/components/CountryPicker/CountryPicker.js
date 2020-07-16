import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl, InputLabel } from '@material-ui/core';
import { fetchCountries } from '../../api/index';

import styles from './CountryPicker.module.css';
const CountryPicker = ({ handleCountryChange }) => {
	const [ fetchedCountries, setFetchedCountries ] = useState([]);

	useEffect(
		() => {
			const fetchAPI = async () => {
				setFetchedCountries(await fetchCountries());
			};
			fetchAPI();
		},
		[ setFetchedCountries ]
	);

	return (
		<FormControl className={styles.formControl}>
			<InputLabel shrink htmlFor="age-native-label-placeholder">
				Country
			</InputLabel>
			<NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
				<option value="">Global</option>
				{fetchedCountries.map((country, i) => (
					<option value={country} key={i}>
						{country}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};

export default CountryPicker;
