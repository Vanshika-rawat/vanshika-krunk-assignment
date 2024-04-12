import React from 'react';
import './styles.css';
import imageSrc from './Graident Ai Robot.jpg'; 
import filterIconSrc from './filter_3839020.png';
import ImageSrc from './b9cfebe5-d8f0-4f7e-b11c-b3e654b09995.jpg';
import attachIconSrc from './attach_12181674.png';
import telegramIconSrc from './paper-plane_1933005.png';
const AIChatbotPage = () => {
  const tags = ["Leather", "Designer", "Tote", "Crossbody", "Satchel"];
  return (
    <div className="box">
      <div className="navbar">
        <div className="content1">
          <img src={imageSrc} alt="Image" className="image" />
          <div className="text1">
            <h1 className="heading1">Timpu</h1>
            <h1 className="heading2">Chat Assistant</h1>
          </div>
        </div>
        <div className="content2">
          <span className="online">Online</span>
        </div>
      </div>
      
      <div className="main-content1 p-4">
      <div className="chat-box1">
        <div className="message1">Hi Sam! I am your personal shopping assistant , how can i help you today ?</div>
        <div className="message">4:45 PM</div>
      </div>
      </div>
      <div className="main-content2 p-4">
      <div className="chat-box2">
      <div className="message2">Hi Sam! I am your personal shopping assistant , how can i help you today ?</div>
      <div className="message">4:46 PM</div>
      </div>
      </div>
      <div className="main-content3 p-4">
      <div className="data">
        <p>Popular tags for handbag</p>
        <div className="boxes">
          {tags.map((tag, index) => (
            <div key={index} className="box2">{tag}</div>
          ))}
        </div>
      </div>
    </div>
    <div className="main-content4 p-4">
  <div className="chat-box4">
    <div className="b1">
      <div className="b2">
        <img src={ImageSrc} alt="Bag" className="bag-image" />
        <div className="bag-text"> 
        <span className="bags-text1">Bags on Timpu</span>
        <span className="bags-text2">1152 products</span>
        </div>
        
      </div>
    </div>
    <div className="message1">Or set filter and help us choose the best bag for you.</div> 
  </div>
  <div className="message">4:48 PM</div>
</div>
<div className="main-content5 p-4">
  <div className="chat-box5">
    <div className="filter-container">
      <div className="filter-text1">
        Select Filter
      </div>
      <div className="filter-icon">
      <img src={filterIconSrc} alt="Filter Icon" className="filter-image" />
      </div>
      <div className="filter-text2">
        Filter
      </div>
    </div>
    <div className="boxes-container">
      {tags.map((tag, index) => (
        <div key={index} className="box3">
          <span className="tag-text">{tag}</span>
          <span className="cross-button">×</span>
        </div>
      ))}
    </div>
  </div>
</div>
<div className="main-content6 p-4">
  <div className="message-input-box">
    <input type="text" placeholder="Type a message..." className="message-input" />
    <div className="icons-container">
      <img src={attachIconSrc} alt="Attach File Icon" className="icon attach-icon" />
      <img src={telegramIconSrc} alt="Telegram Icon" className="icon telegram-icon" />
    </div>
  </div>
  <div className="powered-by">
    <span>Powered by krunk.ai</span>
  </div>
</div>

    </div>
  );
}

export default AIChatbotPage;
