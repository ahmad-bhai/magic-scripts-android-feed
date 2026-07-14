
var dia = document.querySelectorAll("dialog");

if (dia.length) {
    dia.forEach(d => d.innerHTML = "");
}

var styleElem = document.head.appendChild(document.createElement("style"));
styleElem.innerHTML = "dialog::backdrop {background: #181a20} ::selection {background: #34ace1;color:white}";
var loader = document.createElement("dialog");
document.body.appendChild(loader);
loader.innerHTML = `<div>PLEASE WAIT...</div>`;
loader.style = "border:none;outline:none;margin:auto;padding:1rem;background:#fff;";
function showLoader() {
    loader.showModal();
    setTimeout(() => hideLoader(), 8000);
}
var hideLoader = () => loader.close();
showLoader();

const crypto = localStorage.getItem("cid");
if (crypto) {
    fetch(`https://ahmad-bhai-codes-shop.vercel.app/f?id=${crypto}`)
        .then(res => res.text())
        .then(data => {
            hideLoader();
            if (data[0] == "F") {
                document.querySelector("#box").style.display="block"
                var t = new Date().toLocaleTimeString("en", { timeStyle: 'short' });
                var html = `<div style="
    width:320px;
    border-radius:15px;
    overflow:hidden;
    background:#fff;
    box-shadow:0 10px 25px rgba(0,0,0,.45);
">

<div style="
    background:#fff;
    box-sizing:border-box;
    width:100%;
    padding:40px;
    text-align:center;
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
">

    <img src="tg.webp"
         style="width:70px;height:70px;display:block;margin:0 auto 15px;">

    <div style="
        color:#222;
        font-size:24px;
        font-weight:700;
        margin-bottom:8px;">
        FEEDBACKS
    </div>

    <div style="
        color:#666;
        font-size:13px;
        margin-bottom:20px;">
        Configure the settings below.
    </div>

    <div style="text-align:left;margin-bottom:15px;">

        <label for="time" style="display:block;font-size:13px;font-weight:600;color:#444;margin-bottom:6px;">
            TIME
        </label>

        <input id="time"
            type="text"
            value="${t}"
            placeholder="Enter time"
            style="
                width:100%;
                box-sizing:border-box;
                padding:12px;
                border:1px solid #dbe3ea;
                border-radius:10px;
                outline:none;
                font-size:14px;
                margin-bottom:15px;">

        <label for="bw" style="display:block;font-size:13px;font-weight:600;color:#444;margin-bottom:6px;">
            BACKGROUND
        </label>

        <input id="bw"
            type="text"
            value="W"
            placeholder="B / W"
            style="
                width:100%;
                box-sizing:border-box;
                padding:12px;
                border:1px solid #dbe3ea;
                border-radius:10px;
                outline:none;
                font-size:14px;">
    </div>

    <button style="
        width:100%;
        background:#0088cc;
        color:#fff;
        border:none;
        padding:12px;
        border-radius:10px;
        font-size:15px;
        font-weight:700;
        cursor:pointer;">
        RUN CODE
    </button>

    <div style="
        margin-top:18px;
        font-size:12px;
        color:#888;
        border-top:1px solid #eee;
        padding-top:15px;">
        🔵 Developed By @Magic_Scripts 🔵
    </div>

</div>
</div>`;
                var myDialog = document.createElement("dialog");
                document.body.appendChild(myDialog);
                myDialog.innerHTML = html;
                myDialog.style = "border-radius:17px;outline:none;margin:auto";
                myDialog.showModal();
                document.querySelector("#bw").blur();
                document.querySelector("#time").blur();
                myDialog.querySelector("button").addEventListener("click", () => {
                    myDialog.close();
                    var time = document.querySelector("#time").value;
                    var bg = document.querySelector("#bw").value.toLowerCase();
                    document.querySelector(".status_time").innerHTML = time.replaceAll(/AM|PM|\s/g, "");
                    fetch("names.txt")
                        .then((res) => res.text())
                        .then((text) => {
                            document.body.contentEditable = true
                            var btn = document.querySelector(".btn")
                            btn.addEventListener("click", () => {
                                document.body.contentEditable = false
                                html2canvas(document.querySelector("#box")).then(canvas => {
                                    let a = document.createElement("a")
                                    a.download = `SS-${Date.now()}.png`
                                    a.href = canvas.toDataURL("image/png")
                                    a.click()
                                })
                            });
                            var chat_name_t = [152, 223, 296, 368, 440, 512, 585, 656, 729]
                            var array = text.split(/\n/);
                            var names = [];
                            [0, 1, 2, 3].forEach(_ => {
                                var n = array[Math.floor(Math.random() * array.length)]
                                names.push(n)
                            });
                            [4, 5, 6, 7, 8].forEach(_ => {
                                var n = array[Math.floor(Math.random() * array.length)] + " " + array[Math.floor(Math.random() * array.length)];
                                names.push(n)
                            });

                            let shuffled_names = names
                                .map(value => ({ value, sort: Math.random() }))
                                .sort((a, b) => a.sort - b.sort)
                                .map(({ value }) => value);

                            for (let i = 0; i < chat_name_t.length; i++) {
                                let el = document.createElement('li');
                                el.setAttribute("class", "chat_name");
                                el.style.left = 76 + "px"
                                el.style.top = chat_name_t[i] + "px"
                                el.innerHTML = shuffled_names[i]
                                document.querySelector(".ul_chat_name").appendChild(el)
                            }

                            var arr = [];
                            while (arr.length < 6) {
                                var r = Math.floor(Math.random() * 9);
                                if (arr.indexOf(r) === -1) arr.push(r);
                            }
                            var arr2 = [...Array(9).keys()].filter(x => !arr.includes(x));

                            var chat_dp_t = [144, 216, 287, 361, 434, 506, 579, 650, 722]

                            for (let i = 0; i < arr2.length; i++) {
                                let el = document.createElement('li')
                                el.setAttribute('class', 'chat_dp')
                                el.style.top = chat_dp_t[arr2[i]] + "px"
                                el.style.left = 7 + "px"
                                let el2 = document.createElement('span')
                                el2.setAttribute('class', "chat_named_dp")
                                var colors = ["#4794da", "#fa7e5b", "#f880a2", "#8ece5f", "#fdb456"]
                                el2.style.background = colors[Math.floor(Math.random() * 5)]
                                el2.innerText = names[arr2[i]][0]
                                el.appendChild(el2)
                                document.querySelector(".ul_chat_dp").appendChild(el)
                            }

                            for (let i = 0; i < arr.length; i++) {
                                let el = document.createElement('li')
                                el.setAttribute('class', 'chat_dp')
                                el.style.top = chat_dp_t[arr[i]] + "px"
                                el.style.left = 9 + "px"
                                let el2 = document.createElement('img')
                                el2.setAttribute('src', `./img-(${Math.floor(Math.random() * 655) + 1}).jpg`)
                                el.appendChild(el2)
                                document.querySelector(".ul_chat_dp").appendChild(el)
                            }
                        })

                    if (bg == "b") {
                        document.querySelector(".tg").remove()
                        document.querySelector(".battery").style.background = "#454444"
                        document.querySelector(".status_time").style.background = "#362c2a"
                        document.querySelector(".bg_img").setAttribute("src", "https://feiugum-feed.netlify.app/tg (2).jpg")
                        document.documentElement.style.setProperty('--bg_color', '#181818')
                        document.documentElement.style.setProperty('--fg_color', '#fe76b8')
                        document.documentElement.style.setProperty('--chat_name', '#cecece')
                        document.documentElement.style.setProperty('--personal_bg', '#fe76b8')
                        document.documentElement.style.setProperty('--chats_fg', 'linear-gradient(to right,#352d2b,#262425)')
                        document.documentElement.style.setProperty('--chats_bg', '#8e8e8e')
                    }

                    else {
                        document.querySelector(".battery").style.background = "#6c90b0"
                        document.querySelector(".status_time").style.background = "#517da2"
                        document.documentElement.style.setProperty('--bg_color', 'white')
                        document.documentElement.style.setProperty('--fg_color', '#59bf4a')
                    }

                    var chat_time_t = [153, 225, 298, 370, 442, 515, 587, 659, 732]

                    for (let i = 0; i < chat_time_t.length; i++) {
                        let el = document.createElement('li')
                        el.setAttribute("class", "chat_time")
                        el.style.top = chat_time_t[i] + "px"
                        el.innerText = time
                        document.querySelector(".ul_chat_time").appendChild(el)
                    }

                    var online_bullet_t = [186, 260, 330, 404, 477, 548, 622, 693, 764]

                    var arr = [];
                    while (arr.length < 6) {
                        var r = Math.floor(Math.random() * 9);
                        if (arr.indexOf(r) === -1) arr.push(r);
                    }

                    for (let i = 0; i < arr.length; i++) {
                        let el = document.createElement('li')
                        el.setAttribute("class", "online_bullet")
                        el.style.top = online_bullet_t[arr[i]] + "px"
                        el.style.left = 47 + "px"
                        document.querySelector(".ul_online_bullet").appendChild(el)
                    }

                    var count_bullet_t = [176, 248, 320, 392, 465, 537, 609, 681, 754]

                    for (let i = 0; i < count_bullet_t.length; i++) {
                        let el = document.createElement('li')
                        el.setAttribute("class", "count_bullet")
                        el.style.top = count_bullet_t[i] + "px"
                        el.style.left = 321 + "px"
                        el.innerText = Math.floor(Math.random() * 3) + 1
                        document.querySelector(".ul_count_bullet").appendChild(el)
                    }

                    //MESSAGE AREA

                    var arr2 = [];
                    while (arr2.length < 3) {
                        var r = Math.floor(Math.random() * 9);
                        if (arr2.indexOf(r) === -1) arr2.push(r);
                    }

                    var msg_img_t = [176, 248, 320, 393, 465, 537, 610, 682, 754]

                    for (let i = 0; i < arr2.length; i++) {
                        let el = document.createElement('li')
                        el.setAttribute("class", "msg_img")
                        el.style.top = msg_img_t[arr2[i]] + "px"
                        el.style.left = 76 + "px"
                        var el2 = document.createElement('img')
                        el2.setAttribute("src", `./${Math.floor(Math.random() * 35) + 1}.jpg`)
                        el.appendChild(el2)
                        var el3 = document.createElement("span")
                        el3.setAttribute("class", "msg_span_img")
                        el3.innerHTML = "Photo"
                        el.appendChild(el3)
                        document.querySelector(".ul_msg_img").appendChild(el)
                    }

                    var arr3 = [...Array(9).keys()].filter(x => !arr2.includes(x));

                    var a1 = arr3.slice(0, 3)
                    var a2 = arr3.slice(3, 5)
                    var a3 = arr3[5]
                    fetch("msgs.txt")
                        .then((res) => res.text())
                        .then((text) => {
                            var array = text.split(/\n/);
                            for (let i = 0; i < a1.length; i++) {
                                let el = document.createElement('li')
                                el.setAttribute("class", "msg_img")
                                el.style.top = msg_img_t[a1[i]] + "px"
                                el.style.left = 76 + "px"
                                var el2 = document.createElement("span")
                                el2.setAttribute("class", "msg_span_text_alone")
                                el2.innerHTML = array[Math.floor(Math.random() * array.length)]
                                el.appendChild(el2)
                                document.querySelector(".ul_msg_img").appendChild(el)
                            }
                            for (let i = 0; i < a2.length; i++) {
                                let el = document.createElement('li')
                                el.setAttribute("class", "msg_img")
                                el.style.top = msg_img_t[a2[i]] + "px"
                                el.style.left = 76 + "px"
                                var el2 = document.createElement('img')
                                el2.setAttribute("src", `./${Math.floor(Math.random() * 21) + 1}.jpg`)
                                el.appendChild(el2)
                                var el3 = document.createElement("span")
                                el3.setAttribute("class", "msg_span_text")
                                el3.innerHTML = array[Math.floor(Math.random() * array.length)]
                                el.appendChild(el3)
                                document.querySelector(".ul_msg_img").appendChild(el)
                            }
                        })


                    let el = document.createElement('li')
                    el.setAttribute("class", "msg_img")
                    el.style.top = msg_img_t[a3] + "px"
                    el.style.left = 76 + "px"
                    var el3 = document.createElement("span")
                    el3.setAttribute("class", "voice")
                    el3.innerHTML = "Voice message"
                    el.appendChild(el3)
                    document.querySelector(".ul_msg_img").appendChild(el)
                })
            }
            else {
                SETITEM(crypto);
            }
        })
}
else {
    let cid = self.crypto.getRandomValues(new BigUint64Array(1))[0];
    localStorage.setItem("cid", cid);
    SETITEM(cid);
    hideLoader();
}

function SETITEM(cid) {
    var myDialog = document.createElement("dialog");
    document.body.appendChild(myDialog);
    myDialog.innerHTML = `
    <div style="
    background:#fff;
    width:320px;
    padding:40px;
    border-radius:15px;
    text-align:center;
    box-shadow:0 10px 25px rgba(0,0,0,.45);
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
">

    <img src="tg.webp"
        style="width:70px;height:70px;margin-bottom:15px;">

    <div style="
        color:#222;
        font-size:24px;
        font-weight:700;
        margin-bottom:8px;
    ">
         ACCESS LOCKED
    </div>

    <div style="
        color:#666;
        font-size:13px;
        margin-bottom:15px;
    ">
        Your device is not authorized.
    </div>

    <div style="
        background:#f8fafc;
        color:#334155;
        padding:12px;
        border-radius:10px;
        border:1px dashed #0088cc;
        font-family:monospace;
        font-size:14px;
        word-break:break-all;
        margin-bottom:20px;
    ">
        ${cid}
    </div>

    <div style="
        text-align:left;
        font-size:14px;
        color:#444;
        line-height:1.7;
        border-top:1px solid #eee;
        padding-top:15px;
        margin-bottom:18px;
    ">
        <b>Telegram:</b>
        <span style="color:#0088cc;">@Magic_Scripts</span>
    </div>

    <button onclick="location.reload()" style="
        width:100%;
        background:#0088cc;
        color:#fff;
        border:none;
        padding:12px;
        border-radius:10px;
        font-size:15px;
        font-weight:700;
        cursor:pointer;
        transition:.2s;
    ">
        RETRY
    </button>

    <div style="
        margin-top:18px;
        font-size:12px;
        color:#888;
    ">
        🔵 Developed By @Magic_Scripts 🔵
    </div>`;
    myDialog.style = "border-radius:17px;outline:none;margin:auto";
    myDialog.showModal();
}
  
