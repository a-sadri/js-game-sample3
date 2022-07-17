import {spring} from 'remotion';
import {useVideoConfig} from 'remotion';
import {
	AbsoluteFill,
	Audio,
	staticFile,
	Series,
	Video,
	Sequence,
	interpolate,
	useCurrentFrame,
} from 'remotion';
import data from '../public/input_data/config.json';
import {VideoLogo} from './VideoLogo';

const titleStyle = {
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

const stitleStyle = {
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
	const progress = spring({
		frame,
		fps,
	});
	const words = text.split(' ');
	const firstWord = words.slice(0, 4);
	const secondWord = words.slice(-2);

	return (
		<>
			<Sequence from={0} durationInFrames={50}>
				<h1 style={{...titleStyle}}>
					{firstWord.map((word) => (
						<span
							key={word}
							style={{marginRight: '35px', fontFamily: 'Ibarra Real Nova'}}
						>
							{word}
						</span>
					))}
				</h1>
			</Sequence>

			<Sequence
				from={51}
				durationInFrames={50}
				style={{display: 'flex', flexDirection: 'column', opacity: progress}}
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

				<h1 style={{...stitleStyle, opacity: progress}}>
					{secondWord.map((word) => (
						<span
							key={word}
							style={{
								marginRight: '35px',
								fontFamily: 'Ibarra Real Nova',
								opacity: progress,
							}}
						>
							{word}
						</span>
					))}
				</h1>
			</Sequence>
		</>
	);
};
