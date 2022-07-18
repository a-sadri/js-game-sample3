import {
	Sequence,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
} from 'remotion';
import {VideoLogo} from './VideoIcon';

import {DATA} from '../constants';

const firstTitleStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontWeight: 'bold',
	fontSize: 110,
	textAlign: 'center',
	color: 'white',
	fontFamily: 'Ibarra Real Nova',
	width: '100%',
	height: '100%',
};

const secondTitleStyle = {
	fontWeight: 'bold',
	fontSize: 120,
	textAlign: 'center',
	color: 'white',
	fontFamily: 'Ibarra Real Nova',
	width: '100%',
	height: '100%',
};

export const IntroText: React.FC = ({text}) => {
	const frame = useCurrentFrame();
	const {width, height, fps} = useVideoConfig();

	const firstTitleScaleProgress = spring({
		frame,
		fps,
		durationInFrames: 240,
	});

	const secondTitleScaleProgress = spring({
		frame: frame - 50,
		fps,
		config: {
			damping: 200,
		},
	});

	const first = interpolate(firstTitleScaleProgress, [0, 1], [1, 1.3]);
	const second = interpolate(secondTitleScaleProgress, [0, 1], [-300, 0]);

	const opacity = interpolate(frame, [0, 1], [0, 1]);

	// Convert main text to array for separate words
	const words = text.split(' ');
	// Get the first 4 words and convert them to string
	const firstWord = words.slice(0, 4).join(' ');
	// Get the last 2 words and convert them to string
	const secondWord = words.slice(-2).join(' ');

	return (
		<>
			<Sequence from={0} durationInFrames={50}>
				<h1 style={{...firstTitleStyle, transform: `scale(${first})`}}>
					{firstWord}
				</h1>
			</Sequence>

			<Sequence
				from={50}
				durationInFrames={50}
				style={{display: 'flex', flexDirection: 'column', opacity}}
			>
				<div
					style={{
						width: '100%',
						height: '100%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: '100px',
					}}
				>
					<VideoLogo />
				</div>

				<h1
					style={{
						...secondTitleStyle,
						opacity,
						transform: `translateY(${second}px)`,
					}}
				>
					{secondWord}
				</h1>
			</Sequence>
		</>
	);
};
