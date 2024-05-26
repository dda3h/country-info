import { Link } from 'react-router-dom';

import styles from './LinkButton.module.scss';

const LinkButton = ({ to, title }: { to: string; title: string }) => (
	<Link to={to} className={styles.LinkButton}>
		{title}
	</Link>
);

export default LinkButton;
