<template>
  <div class="row">
    <div class="col-12">
      <h1 class="display-4 text-center my-5">Féléves átlag</h1>
    </div>

    <div class="row col-12 col-md-4 mx-auto">
      <div class="row col-10 p-0">
        <div class="col-6 form-floating px-1">
          <input
            ref="name"
            autocomplete="off"
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Tantárgy neve"
            v-model="subject.name"
          />
          <label for="floatingInput">Tárgy</label>
        </div>

        <div class="col-3 form-floating px-1">
          <input
            autocomplete="off"
            type="number"
            class="form-control"
            id="floatingInput"
            placeholder="Kreditérték"
            v-model="subject.credits"
          />
          <label for="floatingInput">Kredit</label>
        </div>
        <div class="col-3 form-floating px-1">
          <input
            autocomplete="off"
            type="number"
            class="form-control"
            id="floatingPassword"
            placeholder="Érdemjegy"
            v-model="subject.mark"
            v-on:keyup.enter="saveSubject"
          />
          <label for="floatingPassword">Jegy</label>
        </div>
      </div>

      <div class="col-2 d-flex justify-content-center">
        <button
          @click="saveSubject"
          class="btn btn-primary my-auto h-100 w-100 mx-1"
        >
          <i class="bi bi-arrow-down"></i>
        </button>
      </div>
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
        name: "",
        credits: "",
        mark: "",
      },
    };
  },
  methods: {
    saveSubject() {
      if (this.subject == "") return;
      store.commit("saveSubject", this.subject);
      this.subject.name = "";
      this.subject.credits = "";
      this.subject.mark = "";
      this.$refs.name.focus();
    },
  },
};
</script>

<style></style>
