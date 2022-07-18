import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const VideoLogo: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const progress = spring({
		frame,
		fps,
	});

	// Set range of value for scale transform property to animate
	const scale = interpolate(progress, [0, 1], [4, 1]);

	return (
		<svg
			width="480px"
			height="480px"
			viewBox="0 0 24 24"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			aria-labelledby="videoIconTitle"
			stroke="#ffffff"
			strokeWidth="1"
			strokeLinecap="square"
			strokeLinejoin="miter"
			fill="none"
			color="#ffffff"
			style={{opacity: progress, transform: `scale(${scale})`}}
		>
			<polygon points="18 12 9 16.9 9 7" />
			<circle cx="12" cy="12" r="10" />
		</svg>
	);
};
