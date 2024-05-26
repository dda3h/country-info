import { FC, SVGProps } from 'react';

const Close: FC<SVGProps<SVGSVGElement>> = props => (
	<svg
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='M7 17L16.8995 7.10051'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7 7.00001L16.8995 16.8995'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export default Close;
