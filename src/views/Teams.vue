    
<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in myTeams"
      :key="i"
      :src="item.logo"
    ><p class="text-center name">{{item.name}}</p></v-carousel-item>
  </v-carousel>
</template>
<style>
.v-image__image--cover {
    background-size: 270px 320px;
}
.name {
    font-size: 40px;
}
</style>


<script>
export default {
    name: "teams",
    data() {
        return {
            myTeams: null,
            
        };
    },
    created() {
        this.myTeams = this.$route.params.dataToPass;
        console.log(this.myTeams)
    }
}
</script>
