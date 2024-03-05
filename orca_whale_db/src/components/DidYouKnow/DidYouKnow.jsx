/* eslint-disable react/prop-types */
import "./DidYouKnow.css"

function DidYouKnow(props) {
    return (
        <div className='did-you-know-container'>
            <h2 className='did-you-know-title'>Did You Know?</h2>
            <hr/>
            <p className='did-you-know-text'>{props.fact}</p>
            {props.img && <img src={props.img} alt='Did You Know?' className='did-you-know-image' />}
        </div>
    );
}

export default DidYouKnow;