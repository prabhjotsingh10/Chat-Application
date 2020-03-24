// const click = () => {
//     document.getElementById("stay_cntd").innerHTML = `<h3> Start a conversation </h3>
//     <p> Send Hello to your friend right away!`
// } 


document.querySelector("#details").addEventListener("click", ()=>{
    document.getElementById("stay_cntd").innerHTML = `<h1 class="strt_cnvo"> Start a Conversation </h1>
    <p> Send hello to your friend Pete! </p>
    <div class="msg_div">
    <button class="snd_msg"> <i class="far fa-grin"></i> </button>
    <textarea class="msgbox" placeholder ="Say Hi..."></textarea>
    <button class="snd_msg"> <i class="fas fa-paper-plane"></i> </button>
    </div>`
})