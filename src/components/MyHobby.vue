<template>
  <head>
    <meta charset="UTF-8">
    <title>More About Me</title>


  </head>
  <body>
  <header>

    <div class="header">
      <div class="bu_logo">
        <img src="../assets/images/BU_wordmark.jpg" alt="BU logo" height="50">
      </div>
    </div>
  </header>

  <main>
    <h1>More About Me</h1>
    <p class="p-title">
      In modern music, there are lots of music genre. Some of them are so popular that when people hear this type
      of music they can recognize it precisely. However, some music genre was not so popular such as Reggae,
      New Wave and Acid Jazz. When people hear those type of music, they might feel unfamiliar.
      So, I will be going to briefly introduce several type of music.
    </p>

    <div class="list_container">
      <section class="hobbies">
        <h3>List of My favorite Things: </h3>
        <!--assignment requirement 6: at least one list-->
        <ul>
          <li>Play the guitar</li>
          <li>Watch other people play the guitar or piano</li>
          <li>Listen and analyze the music</li>
        </ul>
      </section>
    </div>


    <section class="video">
      <h3>
        Lisa Ono is a Japanese Jazz or Bossa Nova song writer, singer and composer.
        <!--assignment requirement 2: external hyperlink-->
        <a href="https://en.wikipedia.org/wiki/Lisa_Ono">Lisa Ono Wiki</a>
      </h3>
      <table class="video-box">
        <tr>
          <td>
            <figure>
              <img src="../assets/images/Lisa2.png" alt="Miru"  class="imag_container_Lisa"/>
              <figcaption>
                Lisa Ono, performing mainly BossaNova which is one of my favorite music genre
              </figcaption>
            </figure>

          </td>
          <td>
            <figure>
              <!--assignment requirement 4: one image on every page-->
              <img src="../assets/images/LISA-ONO.jpg" alt="Miru"  class="imag_container_Lisa"/>
              <figcaption>
                Another Lisa!
              </figcaption>
            </figure>
          </td>
          <td>
            <figure>
              <!--assignment requirement 4: one image on every page-->
              <img src="../assets/images/Lisa3.png" alt="Miru"  class="imag_container_Lisa"/>
              <figcaption>
                Lisa Again!
              </figcaption>
            </figure>
          </td>
        </tr>
      </table>

      <h3 class="reminder">If you want to know more about music, please click My Hobby at the top of the navigation bar</h3>
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
export default {
  name: "MyHobby"
}
</script>

<style scoped>
  @import "../css/shared.css";
</style>