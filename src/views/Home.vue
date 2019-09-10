<template>
  <div class="home container">
  <div class="row">
    <Search />
  </div>
    <div class="row">
      <Apod />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Apod from "@/components/Apod.vue";
import Search from "@/components/Search.vue"

export default {
  name: "home",
  components: {
    Apod,
    Search
  }
};
</script>
