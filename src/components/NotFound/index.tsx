import styles from './NotFound.module.scss';

const NotFound = ({ message }: { message?: string }) => (
	<div className={styles.container}>
		<p className={styles.status}>404</p>
		<p className={styles.message}>{message ?? 'Not found.'}</p>
	</div>
);

export default NotFound;
