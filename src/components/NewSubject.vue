<template>
  <div class="row">
    <div class="col-12">
      <h1 class="display-4 text-center my-5">Féléves átlag</h1>
    </div>

    <div class="col-10 col-md-8 col-lg-6 mx-auto px-1 row">
      <div class="col-5 form-floating px-1">
        <input
          ref="name"
          autocomplete="off"
          type="text"
          class="form-control"
          id="nev"
          placeholder="Tantárgy neve"
          v-model="subject.name"
        />
        <label for="nev">Tárgy</label>
      </div>

      <div class="col-2 form-floating px-1">
        <input
          autocomplete="off"
          type="number"
          class="form-control"
          id="kredit"
          placeholder="Kreditérték"
          v-model="subject.credits"
        />
        <label for="kredit">Kredit</label>
      </div>
      <div class="col-2 form-floating px-1">
        <input
          autocomplete="off"
          type="number"
          class="form-control"
          id="jegy"
          placeholder="Érdemjegy"
          v-model="subject.mark"
          v-on:keyup.enter="saveSubject"
        />
        <label for="jegy">Jegy</label>
      </div>
      <button
        @click="saveSubject"
        class="btn btn-primary my-auto h-100 w-90 col-3 my-3"
      >
        <i class="bi bi-arrow-down"></i>
      </button>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "new-subject",
  data() {
    return {
      subject: {
        id: "",
        name: "",
        credits: "",
        mark: "",
      },
    };
  },
  methods: {
    saveSubject() {
      if (
        this.subject.name == "" ||
        this.subject.credits == "" ||
        this.subject.mark < 0 ||
        this.subject.mark > 5 ||
        this.subject.mark == ""
      )
        return;
      store.commit("saveSubject", this.subject);
      this.subject.id = "";
      this.subject.name = "";
      this.subject.credits = "";
      this.subject.mark = "";

      this.$refs.name.focus();
      this.CalculateAverage();
    },

    CalculateAverage() {
      store.commit("CalculateAverage");
    },
  },
};
</script>

<style></style>
