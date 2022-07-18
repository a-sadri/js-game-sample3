import {staticFile} from 'remotion';
import {Video} from 'remotion';
import React from 'react';

import {DATA} from './constants';
import {Upload} from './Upload';

export const SecondSequense: React.FC = () => {
	const words = DATA.text.middle_text[0].main.split(' ');

	console.log(words);

	return (
		<>
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
					position: 'absolute',
					flexDirection: 'row',
					flexWrap: 'wrap',
				}}
			>
				<div
					style={{
						flex: '50%',
					}}
				>
					<Upload />
				</div>

				<div
					style={{
						flex: '50%',
					}}
				>
					<h1
						style={{
							fontWeight: 'bold',
							fontSize: 120,
							color: 'white',
							fontFamily: 'Ibarra Real Nova',
							flex: '50%',
						}}
					>
						{DATA.text.middle_text[0].main}
					</h1>
				</div>
			</div>

			<Video
				muted
				src={staticFile(`input_data/footage/${DATA.footage[1]}`)}
				style={{height: 1080, width: 1920}}
			/>
		</>
	);
};
