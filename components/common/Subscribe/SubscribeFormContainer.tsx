import React from 'react';
import SubscribeForm from './SubscribeForm';



const SubscribeFormContainer = () => {
  return (
    <div className="subscribe-area bg-f9f9f9 ptb-100">
      <div className="container">
        <div className="subscribe-content">
          <span className="sub-title">Go At Your Own Pace</span>
          <h2>Subscribe To Our Newsletter</h2>
          <p>If you would like to be notified when your app is live, <br /> Please subscribe to our mailing list.</p>
          <SubscribeForm />
        </div>
      </div>
      <div className="shape4" data-speed="0.06" data-revert="true"><img src="/images/shape4.png" alt="image" /></div>
      <div className="shape13" data-speed="0.06" data-revert="true"><img src="/images/shape12.png" alt="image" /></div>
      <div className="shape14" data-speed="0.06" data-revert="true"><img src="/images/shape13.png" alt="image" /></div>
      <div className="shape15" data-speed="0.06" data-revert="true"><img src="/images/shape14.png" alt="image" /></div>
    </div>
  )
}


export default SubscribeFormContainer;