import Part from "./Part";

export default function Miku(props) {
    const {renderState} = props;
    // console.log(renderState);
    return <div className="miku">
        {/*<div className="debug">{JSON.stringify(control)}</div>*/}
        <Part renderState={renderState}/>
    </div>
}
