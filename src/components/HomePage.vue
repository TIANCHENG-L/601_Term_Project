<template>

<head>
  <meta charset="UTF-8">
  <title>Tiancheng Biography</title>
</head>

  <body>
  <!--HTML5 structure-->
  <header>
    <div class="header">
      <div class="bu_logo">
        <img src="../assets/images/BU_wordmark.jpg" alt="BU logo" height="50">
      </div>
    </div>
  </header>

  <main>

    <section class="bio">
      <h1>My Biography</h1>
      <!--Assignment requirement1: two paragraph-->
      <div class="text_container">
        <p>
          My name is Tiancheng Liang, I am a full time master student at BU GRS college major in Computer Science.
          This summer semester will be my last semester at BU, and it should be my last year at the US as well.
          I spent 5 years in the US finished my undergraduate degree in Computer Science
          at the state of new hampshire where you probably cannot imagine how crazy of the snow in the winter,
          and it brought me lots of fun, and I really missed there. During the undergraduate periods I learned a
          lot of core stuff of Computer Science such as computer architecture, Database and Operating System which
          I think it would be the foundation of my future learning.
        </p>
      </div>



      <figure>
        <!--assignment requirement 4: one image on every page-->
        <img src="../assets/images/t1.jpg" alt="Tommy Emmanuel, the greatest finger style player in Australia" class="imag_container">
        <figcaption class="fig_subtitle">
          Kotaro Oshio, my favorite finger style guitar artist
        </figcaption>
      </figure>


      <div class="text_container">
        <p>
          I am planning to get a full time job related to software engineer in my hometown China Beijing, so I am
          planning to practice my coding ability on LeetCode during the summer. Actually, before coming to BU,
          I started my first internship with a high-technology corporation in China where I learned how to use
          the framework such as SpringBoot and SpringMVC, which was my first time getting touch with the framework.
          I was shocked by the people who developed this because it really makes developer life way easier.
          This is also the reason that why I choose this course, because I also want to learn some front end framework
          such as Node.js, Vue.js and React.js.
        </p>
      </div>

    </section>
  </main>

  <footer>
    <section>
      <h3>Contact Information &colon;</h3>
      Email &colon;
      <nav>
        <a href="mailto:tl1071@bu.edu">tl1071@bu.edu</a>
      </nav>
    </section>
  </footer>

  </body>

</template>

<script>
import {collapsed, toggleSidebar} from "@/components/sidebar/state";

export default {
  name: "HomePage",
  setup(){
    return {collapsed, toggleSidebar}
  }
}
</script>

<style scoped>

 @import "../css/shared.css";

</style>