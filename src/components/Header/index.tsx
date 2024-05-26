import { useEffect, useRef } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import Search from '../icons/Search';
import Close from '../icons/Close';

import styles from './Header.module.scss';

interface Props {
	searchValue: string;
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ searchValue, setSearchValue }: Props) => {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const location = useLocation();
	const inputRef = useRef<HTMLInputElement>(null);

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
		searchParams.set('name', e.target.value);
		setSearchParams(searchParams);
		navigate(`/?${searchParams.toString()}`);
	};

	const clearInput = () => {
		setSearchValue('');
		searchParams.delete('name');
		setSearchParams(searchParams);
		inputRef.current?.focus();
	};

	useEffect(() => {
		if (location.pathname !== '/') setSearchValue('');
	}, [location.pathname]);

	return (
		<header className={styles.header}>
			<search className={styles.search}>
				<div
					style={{ visibility: searchValue ? 'hidden' : 'unset' }}
					className={styles.search__placeholder}
				>
					<Search width={16} />
					<p>Search...</p>
				</div>
				<input
					type='text'
					ref={inputRef}
					value={searchValue}
					onChange={onChangeInput}
					className={styles.search__input}
				/>
				<Close
					onClick={clearInput}
					style={{ visibility: searchValue ? 'unset' : 'hidden' }}
					className={styles.search__clear}
				/>
			</search>
		</header>
	);
};

export default Header;
