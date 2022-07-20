<template>
  <div class="col-10 col-md-8 col-lg-6 mx-auto py-3 py-0 row m-0">
    <ul class="list-group col-9 m-0 p-0">
      <li
        class="list-group-item py-0 display-flex alig-items-center"
        v-for="subject in $store.state.subjects"
        :key="subject.id"
      >
        <table class="p-0">
          <tr>
            <td classs="col-1 px-2 trash">
              <button class="btn">
                <i class="bi bi-trash"></i>
              </button>
            </td>
            <td class="td">{{ subject.name }}</td>
            <td class="td">{{ subject.credits }} kredit</td>
            <td class="td">{{ subject.mark }}-es</td>
          </tr>
        </table>
        <!-- {{ subject.id }} -->
      </li>
    </ul>
    <div class="col-3 average m-0">átlag</div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "all-subject",
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
</style>
