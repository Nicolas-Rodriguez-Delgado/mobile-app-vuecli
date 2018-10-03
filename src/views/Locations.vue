<template>
<div>
    <div v-for="(field,i) in myLoc" :key="i">
            <div v-on:click=" loca = true" class="row text-center rowes">
                <div class="col">
                    <p>{{field.hostTeam}}</p>
                    <a v-bind:href= "field.url" ><p>{{field.url}}</p></a>
                </div>
                <div v-show="loca"  class="row text-center rowes">
                <div v-on:click= "loca= false" class="col">
                    <a :href= " 'http://maps.google.com/?q=' + field.direction">{{field.direction}}</a>
                    <img class="stadio" :src= "field.image">
                </div>
               
            </div>
            </div>
    </div>


</div>
</template>
<style>
.stadio {
    width: 90%;
}
</style>


<script>
export default {
  name: "locations",
  data() {
    return {
      myLoc: null,
      loca: false
    };
  },
  created() {
    this.myLoc = this.$route.params.dataToPass;
    console.log(this.myLoc);
  }
};
</script>
