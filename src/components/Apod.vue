<template>
   <div class="apod col-6">
    <h1>NASA Picture of the Day</h1>
    <h5>{{apod.date}}</h5>
    <img :src="apod.url"/>
  </div>
</template>


<script>
export default {
    name: 'component',
    data(){
        return {}
    },
    computed:{},
    methods:{},
    components:{}
}
</script>


<style scoped>

</style>