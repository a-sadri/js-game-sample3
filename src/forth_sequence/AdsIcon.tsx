import {useVideoConfig, useCurrentFrame, interpolate, spring} from 'remotion';

import {ColorInterPolate} from '../components/ColorInterPolate';

import {BLUE_COLOR} from '../constants';

export const AdsIcon: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// Define scale animation primitive and also it works for opacity animation over time
	const scaleProgress = spring({
		frame,
		fps,
	});

	// Define scale animation primitive and also it works for opacity animation over time
	const opacity = spring({
		frame: frame - 30,
		fps,
		config: {
			damping: 200,
		},
	});

	// Define transform animation primitive
	const moveProgress = spring({
		frame: frame - 10,
		fps,
		config: {
			damping: 200,
		},
	});

	// Set range of value for scale transform property to animate
	const scale = interpolate(scaleProgress, [0, 1], [2, 1]);
	// Set range of value for transform in x axis property to animate
	const pathMove = interpolate(moveProgress, [0, 1], [100, 0]);

	return (
		<svg
			width="300px"
			height="300px"
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
		>
			<path
				style={{opacity}}
				d="M2.78 2L2 2.41v12l.78.42 9-6V8l-9-6zM3 13.48V3.35l7.6 5.07L3 13.48z"
			/>
			<path
				style={{
					transform: `scale(${scale}) translateX(${pathMove}px)`,
					fill: ColorInterPolate('white', BLUE_COLOR),
				}}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6 14.683l8.78-5.853V8L6 2.147V3.35l7.6 5.07L6 13.48v1.203z"
			/>
		</svg>
	);
};
