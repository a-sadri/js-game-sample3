import {staticFile, Video, interpolate, useCurrentFrame} from 'remotion';
import {IntroText} from './IntroText';

import {DATA} from '../constants';

export const FirstSequence = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);

	return (
		<>
			<div style={{opacity}}>
				<IntroText text={DATA.text.start_text[0]} />
				<Video
					muted
					src={staticFile(`input_data/footage/${DATA.footage[0]}`)}
					style={{height: 1080, width: 1920}}
				/>
			</div>
		</>
	);
};
