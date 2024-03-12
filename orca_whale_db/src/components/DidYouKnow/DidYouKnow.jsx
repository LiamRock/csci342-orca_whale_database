/* eslint-disable react/prop-types */
import "./DidYouKnow.css"

function DidYouKnow(props) {
    return (
        <div className={props.className}>
            <div className='did-you-know-container'>
                {props.img && <img src={props.img} alt='Did You Know?' className='did-you-know-image' />}
                <div className='dyk-text-container'>
                    <div className='dyk-text-box'>
                        <h2 className='did-you-know-title'>Did You Know?</h2>
                        <hr/>
                        <p className='did-you-know-text'>{props.fact}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DidYouKnow;