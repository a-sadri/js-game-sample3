import {useVideoConfig, useCurrentFrame, interpolate, spring} from 'remotion';

import {VariationsIcon} from './VariationsIcon';
import {ColorInterPolate} from '../components/ColorInterPolate';

import {DATA, YELLOW_COLOR, GREEN_COLOR, BLUE_COLOR} from '../constants';

export const Variations: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// Splite text to animate them separatly
	const words = DATA.text.middle_text[2].product_id.split(' ');

	// Define scale animation primitive and also it works for opacity animation over time
	const scaleProgress = spring({
		frame,
		fps,
		config: {
			damping: 200,
		},
	});

	// Define scale animation primitive and also it works for opacity animation over time
	const opacityProgress = spring({
		frame: frame - 30,
		fps,
		config: {
			damping: 200,
		},
	});

	// Define transform animation primitive for all 3 title
	const firstTitleProgress = spring({
		frame: frame - 20,
		fps,
		config: {
			damping: 200,
		},
	});

	// Define transform animation primitive for all 3 title
	const secondTitleProgress = spring({
		frame: frame - 35,
		fps,
		config: {
			damping: 200,
		},
	});

	// Define transform animation primitive for all 3 title
	const thirdTitleProgress = spring({
		frame: frame - 20,
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
	const firstTitleMove = interpolate(firstTitleProgress, [0, 1], [-200, 0]);
	const thirdTitleMove = interpolate(thirdTitleProgress, [0, 1], [200, 0]);

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
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '50px',
					fontSize: '3rem',
				}}
			>
				<h1
					style={{
						opacity,
						color: ColorInterPolate('white', BLUE_COLOR),
						transform: `translateX(${firstTitleMove}px) scale(${scale})`,
					}}
				>
					{words[0]}
				</h1>
				<h1
					style={{
						opacity: opacityProgress,
						color: ColorInterPolate('white', YELLOW_COLOR),
						WebkitTextStroke: '1px darkgrey',
						WebkitTextStrokeColor: 'yellow',
					}}
				>
					{words[1]}
				</h1>
				<h1
					style={{
						opacity,
						color: ColorInterPolate('white', GREEN_COLOR),
						transform: `translateX(${thirdTitleMove}px) scale(${scale})`,
					}}
				>
					{words[2]}
				</h1>
			</div>

			<div
				style={{
					textAlign: 'center',
				}}
			>
				<VariationsIcon />
			</div>
		</div>
	);
};
