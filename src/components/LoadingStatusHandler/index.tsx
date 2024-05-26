import { ReactNode } from 'react';

import styles from './LoadingStatusHandler.module.scss';

interface Props {
	isLoading: boolean;
	error: Error | null;
	children: ReactNode;
}

const LoadingStatusHandler = ({ isLoading, error, children }: Props) => {
	if (error) {
		return (
			<h1 className={styles.header}>
				Something went wrong :( <br /> Please try again
			</h1>
		);
	}

	if (isLoading) return <h1 className={styles.header}>Loading...</h1>;

	return children;
};

export default LoadingStatusHandler;
