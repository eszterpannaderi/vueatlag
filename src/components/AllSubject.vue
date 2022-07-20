<template>
  <div class="col-10 col-md-8 col-lg-6 mx-auto py-3 py-0 row m-0">
    <div class="col-9">
      <table class="col-9 table table-hover p-0">
        <tr v-for="subject in $store.state.subjects" :key="subject.id">
          <td classs="col-1 px-2 trash">
            <button @click="removeSubject(subject)" class="btn">
              <i class="bi bi-trash"></i>
            </button>
          </td>
          <td class="td col-5">{{ subject.name }}</td>
          <td class="td">{{ subject.credits }} kredit</td>
          <td class="td">{{ subject.mark }}-es</td>
        </tr>
      </table>
    </div>
    <!-- {{ subject.id }} -->
    <div class="col-3 average m-0">
      Átlag: <br />
      {{ $store.state.average.toFixed(3) }}
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "all-subject",
  methods: {
    removeSubject(subject) {
      store.commit("removeSubject", subject);
      store.commit("CalculateAverage");
    },
  },
  computed: {
    subjects() {
      return store.state.subjects;
    },
  },
};
</script>

<style>
.td {
  text-align: right;
  width: 15rem;
}
.trash {
  text-align: left;
  width: 0;
}
.average {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
}
</style>
