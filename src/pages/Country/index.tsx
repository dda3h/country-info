import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import NotFoundPage from '../NotFoundPage';
import LoadingStatusHandler from '../../components/LoadingStatusHandler';
import LinkButton from '../../components/LinkButton';
import type { TCountry } from '../../types/country';

import styles from './Country.module.scss';

interface Props {
	countries: TCountry[];
	isLoading: boolean;
	error: null;
}

export default function Country({ countries, isLoading, error }: Props) {
	const { name } = useParams();
	const country = countries.find(country => country.name.common === name);

	useEffect(() => {
		document.title = `Country Info — ${name}`;

		return () => {
			document.title = 'Country Info';
		};
	}, []);

	if (!isLoading && !error && !country?.name) {
		return <NotFoundPage message={`Country "${name}" not found.`} />;
	}

	return (
		<main className={styles.container}>
			<LoadingStatusHandler isLoading={isLoading} error={error}>
				<h1 className={styles.name}>{country?.name.common}</h1>
				<div className={styles.flag}>{country?.flag}</div>

				<div className={styles.info}>
					<p>
						<span>Official name:</span> {country?.name.official}
					</p>

					<p>
						{country?.capital ? (
							<>
								<span>Capitals:</span> {country?.capital?.join(', ')}
							</>
						) : (
							<span>{country?.name.common} has no capitals.</span>
						)}
					</p>

					<p>
						<span>Population:</span> {country?.population.toLocaleString()}
					</p>
				</div>
			</LoadingStatusHandler>

			<div className={styles.home_button}>
				<LinkButton to='/' title='Back to home page' />
			</div>
		</main>
	);
}
