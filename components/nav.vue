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
  right: 14px;
  top: 20px;
  width: 30px;
  z-index: 2;
}

nav {
  margin-bottom: 3em;
}
</style>
