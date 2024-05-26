import NotFound from '../components/NotFound';
import LinkButton from '../components/LinkButton';

export default function NotFoundPage({ message }: { message?: string }) {
	return (
		<div>
			<NotFound message={message ?? 'Page not found.'} />

			<div style={{ textAlign: 'center' }}>
				<LinkButton to='/' title='Back to home page' />
			</div>
		</div>
	);
}
