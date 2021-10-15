<template>
  <nav class="navbar-nav">
    <div class="container">
      <div class="logo">
        <img
          :src="logo.src"
          :alt="logo.alt"
          style="height: 70px; width: auto"
        />
      </div>
      <div class="navigation">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><a>Top 10</a></li>
        </ul>
      </div>
      <div class="etc">
        <button-outlined text="Discovery Mode" path="/discovery" />
        <div class="user">
          <p>{{ user }}</p>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ButtonOutlined from "../buttons/ButtonOutlined.vue";
export default {
  props: ["user"],
  components: {
    "button-outlined": ButtonOutlined,
  },
  data() {
    return {
      logo: {
        src: "./src/assets/logo.svg",
        alt: "Logotipo Vuesic",
      },
    };
  },
};
</script>

<style>
.header {
  height: 50px;
  width: 100%;
}

.navbar-nav .container {
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 30px 0;
  align-items: center;
}

.navbar-nav .logo,
.navbar-nav .navigation,
.navbar-nav .etc,
.navbar-nav .etc .user {
  height: 100%;
  display: flex;
  align-items: center;
}

.navbar-nav .navigation {
  /* background: rgba(255, 255, 255, 0.05);
  border-radius: 5px; */
  margin-left: 30px;
  color: #fff;
}

.navbar-nav .navigation ul {
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  height: 100%;
}

.navbar-nav .navigation ul li {
}

.navbar-nav .navigation ul li a {
  padding: 0 10px;
  font-size: 14px;
  color: #fff;
  font-weight: 500;
  text-decoration: none;
}

.navbar-nav .navigation ul li a:hover {
  color: #f11515;
  cursor: pointer;
  transition: all 0.3s ease;
}

.navbar-nav .etc {
  margin-left: auto;
}

.navbar-nav .etc .user {
  margin-left: 30px;
  color: #fff;
  font-weight: bold;
}

.navbar-nav .etc .user p {
  margin: 0;
}
</style>