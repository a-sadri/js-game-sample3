import {Sequence} from 'remotion';
import {staticFile, Video} from 'remotion';

import {Upload} from './Upload';
import {Campaign} from './Campaign';
import {DATA} from '../constants';

export const SecondSequense: React.FC = () => {
	return (
		<>
			<Sequence from={0} durationInFrames={60}>
				<Upload />
			</Sequence>

			<Sequence from={60} durationInFrames={80}>
				<Campaign />
			</Sequence>

			<Video
				muted
				src={staticFile(`input_data/footage/${DATA.footage[1]}`)}
				style={{height: 1080, width: 1920}}
			/>
		</>
	);
};
