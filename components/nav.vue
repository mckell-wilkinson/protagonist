<template>
  <nav>
    <ul class="nav-container">
      <li class="logo-container">
        <img
          class="logo"
          src="/img/assets/logo.png"
          alt="The Protagonist logo"
        />
      </li>
      <li class="mobile-menu">
        <img class="mobile-icon" src="/img/assets/menu.svg" alt="Menu icon" />
      </li>
      <li class="menu-container hide">
        <ul>
          <li>
            <img src="/img/assets/facebook.svg" alt="" />
          </li>
          <li>
            <img src="/img/assets/instagram.svg" alt="" />
          </li>
          <li>
            Stories
          </li>
          <li>
            About
          </li>
          <li>
            Contact
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

ul {
  list-style-type: none;
  display: inline-flex;
  padding: 0;
  margin: 0;
  align-items: center;
}

.hide {
  display: none;
}

.logo {
  width: 50px;
}

.mobile-icon {
  position: fixed;
  right: 1em;
  top: 20px;
  width: 30px;
  z-index: 2;
}

nav {
  margin: 1em 0 3em;
}

@media only screen and (min-width: 1024px) {
  .mobile-icon {
    display: none;
  }

  .menu-container {
    display: flex;
  }

ul.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.menu-container > ul, .menu-container > ul > li  {
  display: flex;
  align-items: center;
} 

.menu-container > ul > li {
  margin-left: 5rem;
  font-size: 0.7em;
  color: #555;
}




}
</style>
