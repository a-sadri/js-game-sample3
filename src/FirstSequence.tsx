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
import {motion} from 'framer-motion';
import styled from 'styled-components';

import {Upload} from './Upload';

import {Title} from './Title';
import {IntroText} from './IntroText';
export const FirstSequence = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);

	return (
		<>
			<div style={{opacity}}>
				<IntroText text={data.text.start_text[0]} />
				<Video
					muted
					src={staticFile(`input_data/footage/${data.footage[0]}`)}
					style={{height: 1080, width: 1920}}
				/>
			</div>
		</>
	);
};

// Const Sequence = styled(motion.div)`
// 	display: 'flex';
// 	justifycontent: 'center';
// 	alignitems: 'center';
// `;

// const VideoAnim = styled(motion.div)``;

const LogoAnim = styled(motion.div)`
	/* display: flex; */
	justify-content: center;
	align-items: center;
`;
// Const TitleAnim = styled(motion.div)`
// 	display: 'flex';
// 	justifycontent: 'center';
// 	alignitems: 'center';
// `;
