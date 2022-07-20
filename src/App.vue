<template>
  <div class="AVGcontent">
    <div class="content">
      <new-subject></new-subject> <all-subject></all-subject>
    </div>
    <footer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f56f42"
          fill-opacity="1"
          d="M0,256L80,240C160,224,320,192,480,181.3C640,171,800,181,960,176C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <p class="footertext">Déri Eszter Panna 2022</p>
    </footer>
  </div>
</template>

<script>
import NewSubject from "./components/NewSubject.vue";
import AllSubject from "./components/AllSubject.vue";
export default {
  name: "app",
  components: { NewSubject, AllSubject },
  metaInfo: {
    title: "Average",
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Source+Code+Pro&display=swap");

body {
  margin: 0 !important;
  padding: 0 !important;
  background: rgb(157, 203, 224);
  background: linear-gradient(
    302deg,
    rgba(157, 203, 224, 1) 100%,
    rgba(110, 170, 171, 1) 100%
  );
}
body {
  margin: 0 !important;
  padding: 0 !important;
}
.AVGcontent {
  margin: 0 !important;
  padding: 0 !important;
  position: relative;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  color: white;
  overflow-x: hidden;
}

.content {
  padding-bottom: 30vh;
  margin: 0 !important;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.footertext {
  color: white;
  text-align: right;
  font-size: 1 em;
  padding-right: 0.9em;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
