<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background: #fff;
  color: #222;
  line-height: 1.4;
}

body {
  margin: 0;
  padding: 10px 0 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
a,
.submit {
  font-family: "Playfair Display", serif;
  margin: 0;
  padding: 0;
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
  width: 90%;
  margin: 0 auto;
  padding: 0;
}

img {
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.light-grey {
  color: #666;
}

.button,
.submit {
  color: #222;
  text-decoration: none;
  text-align: center;
  padding: 1em 3em;
  -webkit-box-shadow: inset 0px 0px 0px 3px #222;
  -moz-box-shadow: inset 0px 0px 0px 3px #222;
  box-shadow: inset 0px 0px 0px 3px #222;
  font-size: 1em;
  margin: 1em auto 0;
}

.button.wide,
.submit.wide {
  display: block;
  width: 100%;
  padding: 1em 0;
}

.button:hover,
.button.submit:hover {
  color: #fff;
  background: #222;
}

.submit {
  background: none;
  border: none;
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
</style>
