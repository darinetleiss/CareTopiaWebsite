import React from 'react'
import ChatOnline from '../chatOnline/ChatOnline';
import './messenger.css';
import Conversation from '../component/Conversation';
import Messages from '../messages/messages';
// import Topbar from '../topbar/Topbar';
import { useState, useRef } from 'react';
import NavHomePage from "../../homePage/NavHomePage";
 

const Messenger1 = () => {
  const [send,setSend]=useState(false);
  const m = useRef();
  const [message,setMessage]=useState();

  const handleSend = (e) => {
    setSend(true);
    setMessage("");
  };

  return (
    <div>
     <NavHomePage/>
     <div>
    <div className="messenger">
    <div className="chatMenu">
      <div className="chatMenuWrapper">
        <input placeholder="Search for friends" className="chatMenuInput" />
        <Conversation />
      </div>
    </div>
    <div className="chatBox">
      <div className="chatBoxWrapper">

        
      <>
                <div className="chatBoxTop">
                   <Messages message="Hello. Please I have a question"/>
                   <Messages own={true} message="Yes. How may we help you?"/>
                   <Messages message="I got an email you accepted my appointment request. What time can I visit?"/>
                   <Messages own={true} message="We are open from seven am till 4pm"/>
                   <Messages own={true} message="You can come anytime during these hours"/>
                   <Messages message="Okay Thank you"/>
                   <Messages message="I'll pass by around 3pm hopefully"/>
                   <Messages own={true} message="You are welcome. Awaiting your visit"/>
                   <Messages message="Sorry I won't be able to make it"/>
                   {send? <Messages own={true} message={m.current.value}/> : <span></span>}

                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    ref={m}
                    value={message}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSend}>
                    Send
                  </button>
                </div>
              </>

      </div>
    </div>
    {/* <div className="chatOnline">
      <div className="chatOnlineWrapper">
        <ChatOnline />
        <ChatOnline />
        <ChatOnline />
        <ChatOnline />
        <ChatOnline />
        <ChatOnline />
      </div>
    </div> */}
  </div>
  </div>
  </div>
  )
}

export default Messenger1