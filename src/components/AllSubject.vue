<template>
  <div class="col-10 col-md-8 col-lg-6 mx-auto py-3 py-0 row m-0">
    <div class="col-9">
      <table class="col-9 table table-hover p-0">
        <tr v-for="subject in $store.state.subjects" :key="subject.id">
          <td classs="col-1 px-2 trash">
            <button @click="removeSubject(subject)" class="buttonTrash">
              <i class="bi bi-trash"></i>
            </button>
          </td>
          <td class="td col-5">{{ subject.name }}</td>
          <td class="td">{{ subject.credits }} kredit</td>
          <td class="td">{{ subject.mark }}</td>
        </tr>
      </table>
    </div>
    <!-- {{ subject.id }} -->
    <div v-show="$store.state.average > 0" class="col-3 average m-0">
      <div>Átlag:</div>
      <div style="color: #f5764c; font-weight: bold">
        {{ $store.state.average.toFixed(2) }}
      </div>
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
  color: white;
}
.buttonTrash {
  color: #f5764c;
  border: none;
}

.buttonTrash:hover {
  color: rgb(239, 91, 23);
}
.trash {
  text-align: left;
  width: 0;
}
.average {
  padding-top: 1rem;
  align-content: center;
  justify-content: center;
  text-align: center;
  font-size: 1.2em;
  font-weight: 200;
}
</style>
