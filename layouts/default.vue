<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@900&display=swap');

html {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background: #fff;
  color: #222;
  line-height: 1.4;
}

body {
  margin: 0;
  padding: 0;
  font-size: 16px;
}

h1,
h2,
h3,
h4,
h5,
h6,
a,
.submit {
  font-family: 'Fraunces', serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

p {
  margin: 0;
  padding: 0;
  font-family: "Lato", sans-serif;
}
.bold {
  font-weight: 700;
}

.black {
  font-weight: 900;
}

.content {
  margin: 0 auto;
  padding: 0 1em;
}

img {
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.light-grey {
  color: #666;
}


.button-container {
  display: block;
  position: absolute;
  bottom: 0;
}

.button {
    display: block;
    text-decoration: none;
    position: relative;
    margin-top: 0px;
}

.button .bottom {
    position: absolute;
    left: 7px;
    top: 7px;
    width: 100%;
    height: 100%;
    background-color: #FCEE21;
    display: block;
    -webkit-transition: all .15s ease-out;
    -moz-transition: all .15s ease-out;
    -o-transition: all .15s ease-out;
    transition: all .15s ease-out;
}

.button .top {
    position: relative;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 24px 34px 22px 34px;
    border: 2px solid #222;
}

.button-dark .top {
    border: 2px solid #fff;
}

.button .top .label {
  font-weight: 900;
    color: #222;
    font-size: 12px;
    line-height: 110%;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    -webkit-transition: all .15s ease-out;
    -moz-transition: all .15s ease-out;
    -o-transition: all .15s ease-out;
    transition: all .15s ease-out;
}

.button-dark .top .label {
    color: #fff;
}

.button:hover .bottom {
    left: 0;
    top: 0;
    background-color: #fff;
}



.button-border {
    position: absolute;
    background-color: #222;
    -webkit-transition: all .25s ease-out;
    -moz-transition: all .25s ease-out;
    -o-transition: all .25s ease-out;
    transition: all .25s ease-out;
}

.button:hover .top .button-border-left,.button:hover .top .button-border-right {
    height: calc(100% + 2px);
}

.button:hover .top .button-border-top,.button:hover .top .button-border-bottom {
    width: calc(100% + 2px);
}

.button-border-left {
    left: -2px;
    bottom: -2px;
    width: 2px;
    height: 0;
}

.button-border-top {
    left: -2px;
    top: -2px;
    width: 0;
    height: 2px;
}

.button-border-right {
    right: -2px;
    top: -2px;
    width: 2px;
    height: 0;
}

.button-border-bottom {
    right: -2px;
    bottom: -2px;
    width: 0;
    height: 2px;
}

.input-text {
  background: #eee;
  border: none;
  border-bottom: solid 5px #222;
  width: 100%;
  max-width: 100%;
  display: block;
  height: 40px;
  border-radius: 0;
  font-size: 1.2em;
  margin: 1em 0;
  padding: 0;
  padding-left: 10px;
  box-sizing: border-box;
}

@media only screen and (min-width: 400px) {
  body {
    font-size: 20px;
  }
}

@media only screen and (min-width: 500px) {
  body {
    font-size: 22px;
  }
}

@media only screen and (min-width: 600px) {
  body {
    font-size: 24px;
  }
}

@media only screen and (min-width: 600px) {
  body {
    font-size: 26px;
  }
}

@media only screen and (min-width: 800px) {
  body {
    font-size: 28px;
  }
}

@media only screen and (min-width: 900px) {
  body {
    font-size: 30px;
  }
}

@media only screen and (min-width: 1000px) {
  body {
    font-size: 32px;
  }
}

@media only screen and (min-width: 1024px) {
  body {
    font-size: 22px;
  }

  .content {
    width: 90%;
  }
}
</style>
