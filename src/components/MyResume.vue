<template>

  <div class="contrlall">
    <div class="top">
      <div class="left">
        <div class="rec">
          <div class="downdown">
            <div class="Lleft">
              <p><i class="fas fa-mobile-alt"/>
              </p><p>
              <i class="far fa-envelope"/>
            </p><p>
              <i class="fas fa-map-marker-alt"/></p>
            </div>
            <div class="Lright wordup"><p>666-666-6666</p><p>ltctl1071@gmail.com</p><p>181 Washington St</p></div>
          </div>
        </div>
        <div class="circle">
          <img src="../assets/images/self.jpg" alt="" class="ctrlImg">
        </div>
        <h3 class="rname">Tiancheng Liang</h3>
      </div>

      <div class="right"><br>
        <h2>About Me</h2>
        <p class="ctrw ctrw2">
          I am a Computer Science major students for both my bachelor degree and master degree,
          I obtained my bachelor degree in University of New Hampshire and master degree in Boston University,
          I mainly focused on back-end software development, and I am still learning the skills about the front-end.

        </p>
        <h2>Education</h2>
      <div class="Lleft">
        <div class="linen2"/>
        <div class="dot dot3"/></div>
        <div class="Lright">
          <h4>2016-2020</h4><h3>University of New Hampshire</h3><p class="ctrw">Computer Science</p>
          <h4>2021-2022</h4><h3>Boston University</h3><p class="ctrw">Computer Science</p>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="left">
        <div class="boxs">
          <h2>Skill</h2>
          <div class="Lleft"> <ul>
            <li class="icons"><p class="iword">Java</p></li>
            <li class="icons"><p class="iword">Go</p></li>
            <li class="icons"><p class="iword">C++</p></li>
            <li class="icons"><p class="iword">HTML</p></li>
            <li class="icons"><p class="iword">JavaScript</p></li></ul></div><div class="Lright">
          <div class="nagajo">
            <div class="linefull"></div><div class="linefull"></div><div class="linefull"></div>
          </div>

          <div class="nagajo">
            <div class="nagajo2"></div><div class="linefull"></div><div class="linefull"></div><div class="linefull"></div>
          </div>

          <div class="nagajo">
            <div class="linefull"></div><div class="linefull"></div><div class="linen"></div>
          </div>

          <div class="nagajo">
            <div class="linefull"></div><div class="linen"></div><div class="linen"></div>
          </div>

          <div class="nagajo">
            <div class="linefull"/><div class="linen"/><div class="linen"/><div/>
          </div></div>
        </div>
        <div class="boxs">
          <h2>Language</h2>
          <div class="bleft">
            <div class="pie">
              <div class="pct"></div>
              <div class="pctctrl">
                <div class="pct2"><div class="pct1"></div></div>
              </div>
            </div><div class="pie2"></div>
          </div><div class="bright">
          <div class="pie">
            <div class="pct"></div>
            <div class="pct"></div>
            <div class="pctctr2">
              <div class="pct2"><div class="pct1"></div>
              </div>
            </div></div><div class="pie2">
        </div>
        </div>
          <div class="bleft bleft1">
            <h3 class="iword3">60%</h3>
            <p class="iword2">Chinese</p>
          </div>
          <div class="bright bleft1">
            <h3 class="iword3">40%</h3>
            <p class="iword2">English</p>
          </div>
        </div></div><div class="right">
      <div class="boxs"><h2>Experience</h2>
        <div class="Lleft">
          <div class="linen1"></div><div class="dot  dot1"></div><div class="dot dot2"></div>
        </div><div class="Lright">
          <div class="rh">
            <h4>2020/5-2020/9</h4>
            <h3>NextStep HealthTech</h3>
            <p class="ctrw">Software Engineer Intern</p></div>
          <div class="rh">
            <h4>2020/10-2020/12</h4>
            <h3>China Life Insure</h3>
            <p class="ctrw">Software Engineer Intern</p></div></div></div><div class="boxs">
      <h2>Interest</h2>
      <i class="fas fa-music icon2"/>
      <i class="fas fa-laptop-code icon2"/>
      <i class="fas fa-person-skiing icon2"/>
      <i class="fas fa-headphones-simple icon2"/>
      <i class="fa-solid fa-microphone icon2"/>
    </div>
    </div>

      <div class="footer">
      </div>
    </div>
  </div>

  <footer>
    <section>
      <h3>Contact Information &colon;</h3>
      Email &colon;
      <nav>
        <a href="mailto:tl1071@bu.edu">tl1071@bu.edu</a>
      </nav>
    </section>
  </footer>

</template>

<script>
export default {
  name: "MyResume"
}
</script>

<style scoped>

*{
  position:relative;
  vertical-align:top;
  /*   border:solid 1px black; */
  font-family:Arial,serif;
}
body{
  background-color:#548EA6;
  margin:0px;
  padding:0px;
}
.contrlall{
  margin-top:50px;
  margin-right: auto;
  margin-left: auto;
  height:1000px;width:1000px;
  box-shadow:0px 0px 10px 10px rgba(0,0,20,0.12);
}
h2{
  font-size:30px;color:#548EA6;
  padding-left:20px;font-weight:600;

}
h3{
  margin-bottom:-4px;
  font-weight:600;
}
h4{
  margin-bottom:-5px;
  color:#548EA6;font-size:14px;
  font-weight:700;
}
p{
  font-size:14px;
}
.top{
  background-color:#FFF;
  height:500px;
}
.bottom{
  background-color:#FFF;
  height:600px;

}
.wordup{
  top:-2.5px;
}
.left,.right{
  height:100%;
  width:50%;
  box-sizing:border-box;
  display:inline-block;
}
.Lleft,.Lright{
  display:inline-block;
  box-sizing:border-box;
  height:90%;
}
.Lleft{
  width:20%;
  text-align:center;
  padding-right:10px;
}
.Lright{
  width:80%;
}
.bleft,.bright{
  text-align:center;
  padding-left:40px;
  margin-top:-5px;
  box-sizing:border-box;
  display:inline-block;
  width:40%;
  height:30%;
}
.bleft1{
  top:-65px;left:-2px;
}
li{
  text-align:center;
  list-style-type:none;
}
.icons{
  left:-10px;top:-15px;
  color:#fff;background-color:#548EA6;
  width:80px;height:40px;
  border-radius:5px;
}
.iword{
  font-size:10px;font-weight:600;
  top:13px;
}
.linen1{
  left:32px;
  border-radius:10px;
  height:240px;width:8px;
  background-color:#F3D2B3;
}
.linen2{
  left:32px;height:100px;width:8px;
  border-radius:10px;
  background-color:#F3D2B3;
}
.rh{
  display:block;width:100%;
  height:110px;padding-top:8px;
}
.dot{
  height:10px;width:10px;
  border-radius:10px;
  background-color:#548EA6;
}
.dot1{
  top:-215px;left:31px;
}
.dot2{
  top:-100px;left:31px;
}
.dot3{
  top:-80px;left:31px;
}
.linen{
  display:inline-block;
  box-sizing:border-box;
  right:-1px;
  border-right:dashed 1px #548EA6;
  height:100%;width:25%;
}
.linefull{
  display:inline-block;
  box-sizing:border-box;
  border-right:dashed 1px #548EA6;
  height:100%;width:25%;
  background-color:#F3D2B3;
}
.nagajo{
  left:15px;top:-15px;
  margin:26px 0px 26px 5px;
  width:190px;height:20px;
  border-radius:5px;
  border:solid 1.5px #548EA6;
  background-color:#eee;
  overflow:hidden;
}
.circle{
  margin-top:-350px; margin-left:100px;
  height:220px;width:220px;
  border-radius:100%;
  background-color:#fff;
  overflow:hidden;
  box-shadow:4px 4px 10px 5px rgba(50,10,0,0.15)
}
.rec{
  height:370px;width:230px;
  margin-left:50px;
  background-color:#F3D2B3;
  border-right:solid 25px #F2B8A2;
}
.rname{
  position:absolute;
  color:#548EA6;font-size:40px;
  top:95px;left:-85px;
  transform:rotate(-90deg);
}
i{
  font-size:15px;
}
.downdown{
  position:absolute;
  width:200px;  top:260px;
  left:30px; color:#666;
}
.ctrlImg{
  top:-190px; left:-110px;
  width: 500px;
  height: 500px;
}
.pct{
  background-color:#F3D2B3;
  height:40px;width:40px;
  left:40px;
}
.pctctrl{
  transform-origin:50% 50%;
  transform:rotate(180deg);
}
.pctctr2{
  transform-origin:0% 0%;
  transform:rotate(-90deg);
}
.pct1{
  transform-origin: left top;
  height:60px;width:60px;
  transform:rotate(45deg);
  background-color:#F3D2B3;

}
.pct2{
  height:40px;width:40px;
  overflow:hidden;
}
.pie{
  overflow:hidden;
  height:80px;width:80px;
  margin:10px;
  border:solid 1.5px #548EA6;
  border-radius:50px;
  background-color:#eee;
}
.pie2{
  background-color:#FFF;
  border:solid 1.5px #548EA6;
  border-radius:50px;
  top:-78px;left:25px;
  height:50px;width:50px;
}
.ctrw{
  color:#666;
}
.ctrw2{
  width:80%;
  left:20px;
}
.boxs{
  height:53%;
}
.iword2{
  top:22px;left:2px;color:#666;
}
.icon2{
  color:#548EA6;font-size:35px;
  left:40px;top:10px;
  margin:10px;padding:13px;
  border:solid 1.5px;
  background-color:#F3D2B3;border-radius:50px;
}
.iword3{
  color:#548EA6;left:3px;top:-3px;
}
.footer{
  top:-40px;height:40px;
  background-color:#F2B8A2;
}

</style>