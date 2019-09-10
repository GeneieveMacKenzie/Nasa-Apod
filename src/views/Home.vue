<template>
  <div class="home container">
    <div class="row">
      <Apod />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Apod from "@/components/Apod.vue";

export default {
  name: "home",
  components: {
    Apod
  }
};
</script>
