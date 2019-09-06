import "../scss/style.scss";
// require('./../../dist/member.json');
import Vue from "vue"

console.log("test");
var syozoku = ["役員","人事","総務","営業"];
var members = [];
var empImage = "./img/sys/zyunbi.png";

var app = new Vue({
    el: '#app',
    data: {
        display: "all",
        syozoku: syozoku,
        members: members,
        modalContent: ""
    },
    methods: {
        changeShozoku: function (name, event) {
            this.display = name;
            var btn = document.querySelectorAll(".btnSyozoku");
            for (var i = 0; i < btn.length; i++) {
                btn[i].classList.remove("is-cursor");
            }
            event.target.classList.add("is-cursor");
        },
        imgChange: function(image , index, cursor) {
            this.members[index].image = image ? image : empImage;
            this.members[index].imgCursor = cursor ? cursor : 0;
        },
        openModal: function(member) {
            this.modalContent = member.msg == undefined ? "メッセージは設定されていません": member.msg; 
        },
        closeModal: function() {
            this.modalContent = "";
        }
    }
});

document.addEventListener("DOMContentLoaded", (event) => {
    //var xmlhttp = createXMLHttpRequest(); //旧バージョンのIEなどに対応する場合
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
          var data = JSON.parse(xmlhttp.responseText);
          for(let i = 0; i< data.length; i++) {
              data[i]["image"] = data[i].img[0] ? data[i].img[0] : empImage;
              data[i]["imgCursor"] = 0;
          }
          app.members = data;
        }
      }
    }
    xmlhttp.open("GET", "member.json");
    xmlhttp.send();
});