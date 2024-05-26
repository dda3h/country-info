import { useState } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';

import Home from './pages/Home';
import Country from './pages/Country';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import useFetchCountry from './hooks/useFetchCountry';
import type { TCountry } from './types/country';

import './styles/default.css';

export default function App() {
	const [searchParams] = useSearchParams();
	const name = searchParams.get('name');
	const [searchValue, setSearchValue] = useState(name ?? '');

	const { data, isLoading, error } = useFetchCountry<TCountry>(
		'/all?fields=name,flag,capital,population'
	);
	const filteredData = data.filter(country =>
		country.name.common.toLowerCase().includes(searchValue.toLowerCase())
	);

	return (
		<>
			<Header searchValue={searchValue} setSearchValue={setSearchValue} />

			<div style={{ maxWidth: '1440px', margin: '0 auto 30px' }}>
				<Routes>
					<Route
						path='/'
						element={
							<Home countries={filteredData} isLoading={isLoading} error={error} />
						}
					/>

					<Route
						path='/country/:name'
						element={
							<Country countries={data} isLoading={isLoading} error={error} />
						}
					/>

					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</div>
		</>
	);
}
