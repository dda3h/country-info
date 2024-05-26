import { useEffect, useState } from 'react';

const BASE_URL = 'https://restcountries.com/v3.1';

interface Result<T> {
	data: T[];
	isLoading: boolean;
	error: null;
}

const useFetchCountry = <T,>(params: string): Result<T> => {
	const [data, setData] = useState<T[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${BASE_URL}${params}`);
				const data = await response.json();
				if (data.message) throw new Error();
				setData(data);
			} catch (e: any) {
				setError(e);
			}

			setIsLoading(false);
		};

		fetchData();
	}, []);

	return { data, isLoading, error };
};

export default useFetchCountry;
