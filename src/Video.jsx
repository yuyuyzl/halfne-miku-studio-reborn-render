import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';

import data from './HMSR-Render-Data (6).json'
// Each <Composition> is an entry in the sidebar!

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				width={800*data.scale}
				height={600*data.scale}
				fps={60}
				durationInFrames={data.renderStates.length}
				defaultProps={data}
			/>
		</>
	);
};
