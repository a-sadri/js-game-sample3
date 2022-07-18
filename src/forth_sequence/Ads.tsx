import {useVideoConfig, useCurrentFrame, spring} from 'remotion';

import {AdsIcon} from './AdsIcon';

import {DATA, PRIMARY_COLOR} from '../constants';

export const Ads: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// Splite text to animate them separatly
	const words = DATA.text.end_text[0].split(' ');

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'absolute',
				flexDirection: 'column',
			}}
		>
			<div
				style={{
					textAlign: 'center',
				}}
			>
				<AdsIcon />
			</div>

			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '50px',
					fontSize: '6rem',
					fontWeight: 'bold',
					color: PRIMARY_COLOR,

					backdropFilter: 'blur(10px)',
				}}
			>
				{words.map((t, i) => {
					const delay = i * 7;

					const scale = spring({
						fps,
						frame: frame - delay,
						config: {
							damping: 200,
						},
					});

					return (
						<span
							key={t}
							style={{
								transform: `scale(${scale})`,
							}}
						>
							{t}
						</span>
					);
				})}
			</div>
		</div>
	);
};
