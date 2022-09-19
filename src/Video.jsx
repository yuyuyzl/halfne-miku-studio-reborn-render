import {Composition,getInputProps} from 'remotion';
import {HelloWorld} from './HelloWorld';

const data = getInputProps();
// Each <Composition> is an entry in the sidebar!

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				width={800*data?.scale||800}
				height={600*data?.scale||600}
				fps={60}
				durationInFrames={data?.renderStates?.length??1}
				defaultProps={data}
			/>
		</>
	);
};
