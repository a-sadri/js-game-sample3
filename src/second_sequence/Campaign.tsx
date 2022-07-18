import {useVideoConfig, useCurrentFrame, interpolate, spring} from 'remotion';

import {CampaignIcon} from './CampaignIcon';
import {DATA} from '../constants';

export const Campaign: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// Splite text to animate them separatly
	const words = DATA.text.middle_text[1].product_id.split(' ');

	// Define scale animation primitive and also it works for opacity animation over time
	const scaleProgress = spring({
		frame,
		fps,
		config: {
			damping: 200,
		},
	});

	// Define transform animation primitive for all 3 title
	const firstTitleProgress = spring({
		frame: frame - 10,
		fps,
		config: {
			damping: 200,
		},
	});

	// Define transform animation primitive for all 3 title
	const secondTitleProgress = spring({
		frame: frame - 20,
		fps,
		config: {
			damping: 200,
		},
	});

	// Define transform animation primitive for all 3 title
	const thirdTitleProgress = spring({
		frame: frame - 30,
		fps,
		config: {
			damping: 200,
		},
	});

	// Set range of value for scale transform property to animate
	const scale = interpolate(scaleProgress, [0, 1], [0, 1]);
	// Set range of value for opacity property to animate
	const opacity = interpolate(scaleProgress, [0, 1], [0, 1]);

	// Set range of value for transform property to animate
	const first = interpolate(firstTitleProgress, [0, 1], [800, 0]);
	const second = interpolate(secondTitleProgress, [0, 1], [800, 0]);
	const third = interpolate(thirdTitleProgress, [0, 1], [800, 0]);

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
				position: 'absolute',
				flexDirection: 'row',
			}}
		>
			<div
				style={{
					flex: '50%',
					textAlign: 'center',
				}}
			>
				<CampaignIcon />
			</div>

			<div
				style={{
					flex: '50%',
				}}
			>
				<span
					style={{
						fontWeight: 'bold',
						fontSize: 55,
						color: 'white',
						fontFamily: 'Ibarra Real Nova',
						flex: '50%',
					}}
				>
					<h1
						style={{
							opacity,
							transform: `translateY(${first}px) scale(${scale})`,
						}}
					>
						{words[0]}
					</h1>
					<h1
						style={{
							opacity,
							transform: `translateY(${second}px) scale(${scale})`,
						}}
					>
						{words[1]}
					</h1>
					<h1
						style={{
							opacity,
							transform: `translateY(${third}px) scale(${scale})`,
						}}
					>
						{words[2]}
					</h1>
				</span>
			</div>
		</div>
	);
};
