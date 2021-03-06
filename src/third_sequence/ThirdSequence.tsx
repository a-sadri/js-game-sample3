import {staticFile, Video} from 'remotion';

import {Variations} from './Variations';
import {DATA} from '../constants';

export const ThirdSequense: React.FC = () => {
	return (
		<>
			<Variations />

			<Video
				muted
				src={staticFile(`input_data/footage/${DATA.footage[2]}`)}
				style={{height: 1080, width: 1920}}
			/>
		</>
	);
};
