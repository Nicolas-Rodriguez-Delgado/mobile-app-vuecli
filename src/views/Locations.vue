<template>
<div class="rowes">
    <div  v-for="(field,i) in myLoc" :key="i">
            <div class="row text-center rowes">
                <div class="col">
                    <p>{{field.hostTeam}}</p>
                    <a v-bind:href= "field.url" class="maint" ><p>Main Team Page</p></a>
                    <p v-on:click=" loca = true">MORE INFORMATION</p>
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
.rowes {
    max-width: 100%;
    padding: 5px;
}
.stadio {
    width: 90%;
}
.maint {
    background-color: green;
    width: 30px;
}
.v-content_wrap {
    max-width: 80%;
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
