<template>
   <div class="search col-12">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <button
          class="btn btn-outline-warning"
          type="button"
          id="button-addon1"
          @click="getApod()"
        >Search</button>
      </div>
      <input
        type="text"
        class="form-control"
        placeholder="Enter Date YYYY-MM-DD"
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
        v-model="query"
      />
    </div>
  </div>
</template>


<script>
export default {
    name: 'search',
    data(){
        return {
            query: ""
        }
    },
    computed:{},
    methods:{
        getApod(){
            this.$store.dispatch("getApod", this.query)
        }
    },
    components:{}
}
</script>


<style scoped>

</style>