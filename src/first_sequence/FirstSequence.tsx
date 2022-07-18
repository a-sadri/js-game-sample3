import {staticFile, Video, interpolate, useCurrentFrame} from 'remotion';
import {IntroText} from './IntroText';

import {DATA} from '../constants';

// The first part of the video includes video number 1 and first 2 titles and also video icon
export const FirstSequence = () => {
	const frame = useCurrentFrame();
	// Set range of value for opacity property to animate fading of beginning the video
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
