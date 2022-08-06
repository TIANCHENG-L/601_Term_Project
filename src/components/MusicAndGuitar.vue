<template>
  <head>
    <title>Tommy Emmanuel</title>
    <meta charset= "utf-8" />


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

    <h1>Introduction of Music Genre and Guitar</h1>
    <section class="intro">
      <h5>In this page I will introduce more about me such as my hobbies and
        what I would like to do during spare time. my favorite thing during my spare time is playing the guitar,
        and I have been playing guitar since Junior high school.
        I love it, and I have so many things that I can introduce to you about music. But first let me show you
        a list of my favorite things.
      </h5>
    </section>

    <!--assignment requirement 5: at least one table containing tabular data-->
    <table class="musicGenreTable">
      <thead>
      <tr>
        <th colspan="5" >Music Genre</th>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td></td>
        <td>Pop</td>
        <td>Blues</td>
        <td>Jazz</td>
        <td>RnB</td>
      </tr>
      <tr>
        <td>musicians or bands</td>
        <td>1.The Beatles(that is my love); 2.Jay Chou(from China, his music affected a generation in China); 3. Ed Sheeran</td>
        <td>1.B.B. King( The king of blues, fully deserve) <br>2.Eric Clapton( very sad life experience but it is because his experience that can let him create those beautiful songs</td>
        <td>1)Duke Ellington(Wonderful Jazz player)<br> 2)Lisa Ono(Japan)</td>
        <td>David Tao (a famous chinese RnB singer)</td>
      </tr>
      <tr>
        <td>pieces</td>
        <td>1)Hey Jude by The Beatles 2)Sweet by Jay Chou 3)Dive by Ed Sheeran</td>
        <td>1)The thrill is gone by B.B. King <br>2) Wonderful Tonight by Eric Clapton</td>
        <td>Don't mean a thing</td>
        <td>I love you</td>
      </tr>
      </tbody>

    </table>

    <section class="GuitarIntro">
      <h2>The Charm of Acoutic Guitar</h2>
      <p class="info">
        Some people might say acoustic guitar cannot make variable sound effects like electric guitar,
        so it is less powerful than electric guitar.
        However, personally I think acoustic guitar is as powerful as electric guitar.
        It can also can make lots of effect. It even can make a single guitar sounds like a band!
        That is why I am really addicted to acoustic guitar.
        Not only because it's really convenient since I can take it to everywhere even if there is no electricity,
        but also I can be really creative by playing it.
      </p>

      <table class="guitarPic">
        <tr>
          <td>
            <figure>
              <!--assignment requirement 4: one image on every page-->
              <img src="../assets/images/guitar.png" alt="guitar" class="imag_container">
              <figcaption>
                Acoustic and Electric guitar.
              </figcaption>
            </figure>
          </td>
          <td>
            <figure>
              <!--assignment requirement 4: one image on every page-->
              <img src="../assets/images/back.jpg"  alt="a person is playing guitar" class="imag_container">
              <figcaption>
                Kotaro Oshio, my favorite finger style guitar artist
              </figcaption>
            </figure>
          </td>

          <td>
            <figure>
              <!--assignment requirement 4: one image on every page-->
              <img src="../assets/images/K1.jpg"  alt="a person is playing guitar" class="imag_container">
              <figcaption>
                Kotaro Oshio, my favorite finger style guitar artist
              </figcaption>
            </figure>
          </td>
        </tr>
      </table>
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
  name: "MusicAndGuitar"
}
</script>

<style scoped>

  @import "../css/shared.css";

</style>