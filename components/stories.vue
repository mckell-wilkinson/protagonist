<template>
  <div class="stories-container">
    <h5 class="black">Protagonist</h5>
    <h1 class="light-grey"><span>Celebrating the diversity of women one story at a time</span></h1>
  </div>
</template>

<style scoped>

.stories-container {
    margin-bottom: 2em;
}
h1 {
  font-size: 1em;
  margin: 0;
  padding: 0;
  text-align: left;
  position: relative;
  color: #555;

}

h5 {
  font-size: 3.5em;
  margin: 0;
  padding: 0;
  text-align: left;

}

@media only screen and (min-width: 1024px) {

h1 > span {
    background-color: white;
    padding-right: 10px;
}


h1:after {
    content:"";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.5em;
    border-top: 1px solid #555;
    z-index: -1;
}

}


</style>
