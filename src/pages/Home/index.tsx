import { Link } from 'react-router-dom';

import LoadingStatusHandler from '../../components/LoadingStatusHandler';
import NotFound from '../../components/NotFound';
import type { TCountry } from '../../types/country';

import styles from './Home.module.scss';

interface Props {
	countries: TCountry[];
	isLoading: boolean;
	error: null;
}

export default function Home({ countries, isLoading, error }: Props) {
	return (
		<LoadingStatusHandler isLoading={isLoading} error={error}>
			{!countries.length && <NotFound message='No countries found.' />}

			<main className={styles.container}>
				{countries.map(country => (
					<Link
						to={`/country/${country.name.common}`}
						className={styles.card}
						key={country.name.common}
					>
						<p className={styles.flag}>{country.flag}</p>
						<p className={styles.name}>{country.name.common}</p>
					</Link>
				))}
			</main>
		</LoadingStatusHandler>
	);
}
