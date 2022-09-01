import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				width={1920}
				height={1080}
				fps={60}
				durationInFrames={60*30}
			/>
		</>
	);
};
