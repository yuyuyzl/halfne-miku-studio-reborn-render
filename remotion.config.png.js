// All configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli
// ! The configuration file does only apply if you render via the CLI !

import {Config} from 'remotion';

Config.Rendering.setImageFormat('png');
Config.Output.setImageSequence(true);
Config.Output.setOverwriteOutput(true);
Config.Rendering.setConcurrentMode('browser');
Config.Rendering.setParallelEncoding(true);
Config.Bundling.setCachingEnabled(false);


// Config.Rendering.setConcurrency(12);