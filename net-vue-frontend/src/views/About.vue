<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Global number is {{someNumber}}</p>
    <ul v-if="users.length > 0">
      <li v-for="u in users" :key="u.id">{{u}}</li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "net-vue-test",
  computed: {
    ...mapState({
      users: state => state.users,
      someNumber: state => state.globalNumber
    }),
  },
  methods: {
    ...mapActions(["LoadUsers"])
  },
  mounted () {
    this.LoadUsers();
  },
  props: {
    msg: String
  }
}
</script>
