import {staticFile, Video} from 'remotion';
import {Ads} from './Ads';

import {DATA} from '../constants';

export const ForthSequence: React.FC = () => {
	return (
		<>
			<Ads />

			<Video
				muted
				src={staticFile(`input_data/footage/${DATA.footage[4]}`)}
				style={{height: 1080, width: 1920}}
			/>
		</>
	);
};
