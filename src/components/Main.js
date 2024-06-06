import React from 'react';
import './Main.css';
import Img1 from '../IMG_20240511_221507_668.jpg'
import Img2 from '../46.jpg'
import Img3 from '../47.jpg'
import Img4 from '../48.jpg'
import Mic from '../mute.jpg';
import Mic1 from '../mic.jpg'   

const Main = () => {
    return (
        <main className="main">
            <div className="video-grid">
                {/* Example video tiles */}
                <div className="video-tile">
                <img className='mic' src={Mic} alt="" />
                <img className='student-photo' src={Img1} alt="" />
                <h3 className='student-name'>VISHNU</h3>
                     </div>

                <div className="video-tile">
                <img className='mic' src={Mic1} alt="" />
                <img className='student-photo' src={Img2} alt="" />
                <h3 className='student-name'>LEENA</h3>

                     </div>
                     <div className="video-tile">
                     <img className='mic' src={Mic} alt="" />     
                <img className='student-photo' src={Img3} alt="" />
                <h3 className='student-name'>JON</h3>

                     </div>
                     <div className="video-tile">
                     <img className='mic' src={Mic} alt="" />
                <img className='student-photo' src={Img4} alt="" />
                <h3 className='student-name'>EMMA</h3>

                     </div>
            </div>
        </main>
    );
};

export default Main;
