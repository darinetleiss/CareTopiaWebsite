import React from 'react'
import ChatOnline from '../chatOnline/ChatOnline';
import './messenger.css';
import Conversation from '../component/Conversation';
import Messages from '../messages/messages';
import Topbar from '../topbar/Topbar';

const Messenger1 = () => {
  return (
    <div>
     <Topbar/>
     <div>
    <div className="messenger">
    <div className="chatMenu">
      <div className="chatMenuWrapper">
        <input placeholder="Search for friends" className="chatMenuInput" />
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
      </div>
    </div>
    <div className="chatBox">
      <div className="chatBoxWrapper">

        
      <>
                <div className="chatBoxTop">
                   <Messages/>
                   <Messages/>
                   <Messages own={true}/>
                   <Messages/>
                   <Messages/>
                   <Messages/>
                   <Messages/>
                   <Messages/>
                   <Messages/>
                   <Messages/>
                   <Messages/>
                   <Messages/>

                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                  ></textarea>
                  <button className="chatSubmitButton">
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