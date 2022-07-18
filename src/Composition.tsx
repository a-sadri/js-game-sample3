import {AbsoluteFill, Audio, Sequence, staticFile, Video} from 'remotion';

import {FirstSequence} from './first_sequence/FirstSequence';
import {SecondSequense} from './second_sequence/SecondSequence';

// Get config data from constants
import {DATA} from './constants';
import {motion} from 'framer-motion';
import styled from 'styled-components';

import audio from '../public/assets/Background.wav';
import './Composition.css';

// This composition has 4 sections as sequences ordered based on total frame numbers
export const MyComposition = () => {
	return (
		<>
			<AbsoluteFill
				style={{color: 'red', fontSize: '7rem', fontFamily: 'Ibarra Real Nova'}}
			>
				<Sequence from={0} durationInFrames={110}>
					<FirstSequence />
				</Sequence>

				<Sequence from={100} durationInFrames={140}>
					<SecondSequense />
				</Sequence>

				<Sequence from={230} durationInFrames={100}>
					<ThiredSequence
						initial={{x: '-150px'}}
						animate={{x: 0}}
						transition={{duration: 0.6}}
					>
						<Video
							muted
							src={staticFile(`input_data/footage/${DATA.footage[3]}`)}
							style={{height: 1080, width: 1920}}
						/>
					</ThiredSequence>
				</Sequence>
				<Sequence from={320} durationInFrames={100}>
					<ForthSequence>
						<Video
							muted
							src={staticFile(`input_data/footage/${DATA.footage[4]}`)}
							style={{height: 1080, width: 1920}}
						/>
					</ForthSequence>
				</Sequence>
			</AbsoluteFill>
			<Audio
				src={staticFile('assets/Background.wav')}
				// StartFrom={59} // If composition is 30fps, then it will start at 2s
				// endAt={120} // If composition is 30fps, then it will end at 4s
			/>
		</>
	);
};

const ThiredSequence = styled(motion.div)``;
const ForthSequence = styled(motion.div)``;
