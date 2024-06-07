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

	if (isLoading) {
		return (
			<svg viewBox='0 0 50 50' className={styles.spinner}>
				<circle
					cx='25'
					cy='25'
					r='20'
					fill='none'
					stroke='currentColor'
					strokeLinecap='round'
					strokeWidth='3'
					className={styles.spinner__path}
				/>
			</svg>
		);
	}

	return children;
};

export default LoadingStatusHandler;
