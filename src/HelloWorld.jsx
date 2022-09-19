import {useCurrentFrame} from 'remotion';
import './index.css';
import Miku from "./Miku/Miku";

const deepPatch=(base,patch)=>{
	if(patch===null)return undefined;
	if(typeof patch!=='object')return patch;
	let obase, opatch;
	if (Array.isArray(base)) {
		obase = Object.fromEntries(base.map((o, i) => [i, o]));
	} else {
		obase = {...base}
	}
	opatch={...patch};
	Object.keys(opatch).forEach(k=>{
		if(obase[k]!==undefined&&opatch[k]!==undefined)obase[k]=deepPatch(obase[k],opatch[k]);
		else obase[k]=opatch[k];
		if(obase[k]===undefined)delete obase[k];
	});
	if(Array.isArray(base))return base.map((o,i)=>obase[i]);else return obase;
}

export const HelloWorld = data => {
	const frame = useCurrentFrame();

	return (
		<div
			id='scene' style={{ 
				backgroundColor:data.background,backgroundImage:'url("'+data.background+'")',
				transform:`translate(-50%,-50%) scale(${data.scale||1})`
			}}
		>
			<Miku renderState={deepPatch(data.renderStates[0], data.renderStates[frame])}/>
		</div>
	);
};
