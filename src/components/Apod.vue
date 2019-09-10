<template>
   <div class="apod col-6">
    <h1>NASA Picture of the Day</h1>
    <h5>{{apod.date}}</h5>
    <img :src="apod.url"/>
    <p>{{apod.explanation}}</p>
  </div>
</template>


<script>
export default {
    name: 'apod',
    data(){
        return {}
    },
    computed: {
    apod() {
      return this.$store.state.apod;
    }
    },
    methods:{},
    components:{}
};
</script>


<style scoped>

</style>