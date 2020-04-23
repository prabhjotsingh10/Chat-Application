// const click = () => {
//     document.getElementById("stay_cntd").innerHTML = `<h3> Start a conversation </h3>
//     <p> Send Hello to your friend right away!`
// } 


// document.querySelector("#details").addEventListener("click", ()=>{
//   document.getElementById("stay_cntd").innerHTML = `<h1 className="strt_cnvo"> Start a Conversation </h1>
//   <p> Send hello to your friend Pete! </p>
//   <div className="msg_div">
//   <button className="snd_msg"> <i className="far fa-grin"></i> </button>
//   <textarea className="msgbox" placeholder ="Say Hi..."></textarea>
//   <button className="snd_msg"> <i className="fas fa-paper-plane"></i> </button>
//   </div>`
// })

let chatDisplay = (event) =>{
  // document.querySelector("#details").addEventListener("click", ()=>{
      document.getElementById("stay_cntd").innerHTML = `<h1 className="strt_cnvo"> Start a Conversation </h1>
      <p> Send hello to your friend Pete! </p>
      <div className="msg_div">
      <button className="snd_msg"> <i className="far fa-grin"></i> </button>
      <textarea className="msgbox" placeholder ="Say Hi..."></textarea>
      <button className="snd_msg"> <i className="fas fa-paper-plane"></i> </button>
      </div>`
    
  }

const Contact = () => {
  
    return (
      <div className="contacts">
        <div>
          <ul>
            <li className="logo_and_usrnme">
              <div className="chatmate">
                <h3 className="logo">ChatMate</h3> <h4 className="username">Prabhjot Singh</h4> <a href="#" className="sgn_out">Sign Out <i className="fas fa-sign-out-alt"></i></a>
              </div>
            </li>
            <li>
              <div className="user_profile">
                <h3>Direct Messages <i className="fas fa-sort-down"></i></h3>
              </div>
            </li>
            <li className="dm">
              <div className="cntc_1"  onClick = {chatDisplay}>
                <img src="img/img.jpg" alt="Pete" width="55em" height="55em" className="img1" />
                <div className="details" id="details">
                  <h3>Pete</h3>
                  <p>Heyy</p>
                </div>
              </div>
              <hr />
            </li>
            <li className="dm">
              <div className="cntc_1">
                <img src="img/Jess.jpg" alt="Pete" width="55em" height="55em" className="img1" />
  
                <div className="details" id="details1">
                  <h3>Jess</h3>
                  <p className="jess_msg">Movie Night tonight?</p>
                </div>
              </div>
              <hr />
            </li>
  
            <li className="dm">
              <div className="cntc_1">
                <img src="img/img.jpg" alt="Pete" width="55em" height="55em" className="img1" />
                <div className="details" id="details2">
                  <h3>Kevin</h3>
                  <p>new message</p>
                </div>
              </div>
              <hr />
            </li>
  
            <li className="dm">
              <div className="cntc_1">
                <img src="img/img.jpg" alt="Pete" width="55em" height="55em" className="img1" />
                <div className="details" id="details3">
                  <h3>Neil</h3>
                  <p>new message</p>
                </div>
              </div>
              <hr />
            </li>
          </ul>
  
          <div className="user_profile" id="grp_cnvo">
            <h3>Group Conversations <i className="fas fa-sort-down"></i></h3>
          </div>
  
          <ul className="grp_chat">
            <li className="dm">
              <div className="cntc_1">
                <img src="img/img.jpg" alt="Pete" width="55em" height="55em" className="img1" />
                <div className="details">
                  <h3>Coders United</h3>
                  <p>What's Up Everybody? </p>
                </div>
              </div>
              <hr />
            </li>
  
            <li className="dm">
              <div className="cntc_1">
                <img src="img/img.jpg" alt="Pete" width="55em" height="55em" className="img1" />
                <div className="details">
                  <h3>F.R.I.E.N.D.S</h3>
                  <p>Wanna catch a movie tonight? </p>
                </div>
              </div>
              <hr />
            </li>
  
            <li className="dm">
              <div className="cntc_1">
                <img src="img/img.jpg" alt="Pete" width="55em" height="55em" className="img1" />
                <div className="details">
                  <h3>Humber Media Pros</h3>
                  <p>Our assignment is due fellas! Let's get to it!</p>
                </div>
              </div>
              <hr />
            </li>
          </ul>
  
        </div>
      </div>
    )
  }
  
  const StayConnected = () => {
    return (
      <div className="stay_connected" id="stay_cntd">
        <h1 className="sty_cntd">Stay Connected for more messages</h1>
        <p>The app connects to your phone to sync messages. To reduce data usage, connect your phone to WiFi.</p>
        <p>Click on a chat to get started.</p>
      </div>
    )
  }
  
  const App = () => {
  
    return (
      <div className="app">
        <Contact />
        <StayConnected />
      </div>
    )
  
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));