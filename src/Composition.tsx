import {AbsoluteFill, Audio, Sequence, staticFile, Video} from 'remotion';
import {Title} from './Title';
import data from '../public/input_data/config.json';

import {motion} from 'framer-motion';
import styled from 'styled-components';

import audio from '../public/assets/Background.wav';
import './Composition.css';
import {FirstSequence} from './FirstSequence';
import {SecondSequense} from './SecondSequence';

export const MyComposition = () => {
	return (
		<>
			<AbsoluteFill
				style={{color: 'red', fontSize: '7rem', fontFamily: 'Ibarra Real Nova'}}
			>
				<Sequence from={0} durationInFrames={110}>
					<FirstSequence />
				</Sequence>

				<Sequence from={100} durationInFrames={150}>
					<SecondSequense />
				</Sequence>

				<Sequence from={220} durationInFrames={100}>
					<ThiredSequence
						initial={{x: '-150px'}}
						animate={{x: 0}}
						transition={{duration: 0.6}}
					>
						<Video
							muted
							src={staticFile(`input_data/footage/${data.footage[3]}`)}
							style={{height: 1080, width: 1920}}
						/>
					</ThiredSequence>
				</Sequence>
				<Sequence from={300} durationInFrames={100}>
					<ForthSequence>
						<Video
							muted
							src={staticFile(`input_data/footage/${data.footage[4]}`)}
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

const TitleAnim = styled(motion.div)``;
