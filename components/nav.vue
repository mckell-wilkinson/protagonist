<template>
  <nav>
    <div class="nav-container">
      <div class="logo-container">
        <img
          class="logo"
          src="/img/assets/logo.png"
          alt="The Protagonist logo"
        />
      </div>
      <div class="mobile-menu">
        <img class="mobile-icon" src="/img/assets/menu.svg" alt="Menu icon" />
      </div>
      <div class="menu-container hide">
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
      </div>
    </div>
  </nav>
</template>

<style scoped>
.hide {
  display: none;
}

.logo {
  width: 50px;
}

.mobile-icon {

  position: fixed;
  right: 12px;
  top: 10px;
  width: 30px;
}

nav {
  margin-bottom: 3em;
}
</style>
