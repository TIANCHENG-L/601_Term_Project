<template>
  <head>
    <!-- Meta Info -->
    <meta charset="UTF-8">
    <meta name="description" content="final project">
    <meta name="author" content="Tiancheng Liang">
    <!-- Title -->
    <title>Leave Your Contact Form</title>

  </head>

  <body>

  <div class="background">

    <div class="form-title">Please Leave Your Info for More Information about Me!</div>

    <!--    do not submit form when forValidation return false-->
    <form name="term_project_form"
          onsubmit="return checkValidate()" method="Get">

      <div class="grid-container" id="form-content">

        <div class="question1">
          <!--                bound the label to the id firstName-->
          <label for="firstName">First Name: </label>
        </div>
        <div class="answer1">
          <input type="text" id="firstName" name="firstName"
                 placeholder="First Name" autofocus required>
        </div>

        <div class="question2">
          <label for="lastName">Last name: </label>
        </div>
        <div class="answer2">
          <input type="text" id="lastName" name="lastName"
                 placeholder="Last Name" required>
        </div>

        <div class="question3">
          <label for="facilitator">Phone Number: </label>
        </div>
        <div class="answer3">
          <input type="text" id="facilitator" name="facilitator"
                 placeholder="Your Phone Number" required>
        </div>

        <div class="question4">
          <label >What is you satisfaction of my Website? </label>
        </div>
        <div class="answer4">
          <input type="radio" id="stronglyAgree"  name="opinions" value="Strongly Agree">
          <label for="stronglyAgree">Strongly satisfied</label>

          <input type="radio" id="Agree" name="opinions" value="Agree">
          <label for="Agree">satisfied</label>

          <input type="radio" id="SlightlyAgree" name="opinions" value="Slightly Agree">
          <label for="SlightlyAgree">Neither Satisfied nor Dissatisfied</label><br>

          <input type="radio" id="NotAgree" name="opinions" value="Do not Agree">
          <label for="NotAgree">Dissatisfied</label>
        </div>

        <div class="question5">
          <label>Please Leave Your Concerns or Questions.</label>
        </div>
        <div class="answer5">
          <input type="text" id="questions" name="questions" placeholder="Questions and Concerns"  >
        </div>


        <div class="submit">
          <input type="submit" value="Submit" style="width: 150px; height: 50px">
        </div>

      </div>

    </form>

  </div>

  </body>


</template>

<script>
export default {
  name: "ContactForm",

  methods: {
    checkValidate() {
      return formValidation()
    },
  },
}



function formValidation(){

//  '^'        : asserts position at start of the string.
//  '[a-zA-Z]' : matches characters between a (char 97) and z (char 122),
//               and characters between A (char 65) and Z (char 90).
//  '{2,}      : quantifier; matches between 2 to unlimited times.
  const regexCheck = /^[a-zA-Z]{2,}$/;

  const facilitatorsList = ["josh", "chris", "fazil"];

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const facilitator = document.getElementById("facilitator").value;

  let check = true

  if (!firstName.match(regexCheck) || !lastName.match(regexCheck)
      || !facilitatorsList.includes(facilitator.toLowerCase())) {
    alert("Please check input entered!");
    check = false;
  }

  return check
}

</script>

<style scoped>

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, serif;
  font-size: 30px;
  font-weight: bolder;
}

.background{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  min-width: 575px;
  max-width: 1000px;
  height: auto;
  padding: 20px;
  /*background: rgba(191, 0, 0, 0.7);*/
  color: #1b5e3c;
  line-height: 1.8em;
}

.form-title {
  padding: 35px 15px 15px;
  font-size: 2em;
  text-align: center;
}

.grid-container {
  display: grid;
  width: 600px;
  padding: 30px;
  grid-gap: 20px 10px;
  margin: auto;
}

#form-content div:nth-of-type(11){
  padding-top: 8px;
  margin-left: -10%;

}

#questions{
  height: 200px;
  width: 500px;
  font-size: 20pt;
}

</style>