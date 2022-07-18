import {AbsoluteFill, Audio, Sequence, staticFile} from 'remotion';

import {FirstSequence} from './first_sequence/FirstSequence';
import {SecondSequense} from './second_sequence/SecondSequence';
import {ThirdSequense} from './third_sequence/ThirdSequence';
import {ForthSequence} from './forth_sequence/ForthSequence';

import './Composition.css';

// This composition has 4 sections as sequences ordered based on total frame numbers
export const MyComposition = () => {
	return (
		<>
			<AbsoluteFill
				style={{
					color: '#fff',
					fontSize: '7rem',
					fontFamily: 'Ibarra Real Nova',
				}}
			>
				<Sequence from={0} durationInFrames={110}>
					<FirstSequence />
				</Sequence>

				<Sequence from={100} durationInFrames={140}>
					<SecondSequense />
				</Sequence>

				<Sequence from={230} durationInFrames={100}>
					<ThirdSequense />
				</Sequence>

				<Sequence from={320}>
					<ForthSequence />
				</Sequence>
			</AbsoluteFill>
			<Audio src={staticFile('assets/Background.wav')} />
		</>
	);
};
