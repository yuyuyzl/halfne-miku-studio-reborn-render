import {Composition} from 'remotion';
import {MikuRender} from './MikuRender';
import data from './in.json';

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={MikuRender}
				width={800*data?.scale||800}
				height={600*data?.scale||600}
				fps={60}
				durationInFrames={data?.renderStates?.length??1}
				defaultProps={data}
			/>
		</>
	);
};
