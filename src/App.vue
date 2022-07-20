<template>
  <div>
    <new-subject></new-subject>
    <all-subject></all-subject>
  </div>
</template>

<script>
import NewSubject from "./components/NewSubject.vue";
import AllSubject from "./components/AllSubject.vue";
export default {
  name: "app",
  components: { NewSubject, AllSubject },
};
</script>

<style></style>
