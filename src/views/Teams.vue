    
    <!-- <div class="container">
        <div class="row">
            <div class="col">
                <img style="width:90%;" :src="myTeams[4].logo">
            </div>
            <div class="col">
                <img :src="myTeams[0].logo">
            </div>
            <div class="col">
                <img style="width:80%;" :src="myTeams[2].logo">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <img :src="myTeams[6].logo">
            </div>
            <div class="col">
                <img :src="myTeams[1].logo">
            </div>
            <div class="col">
                <img :src="myTeams[9].logo">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <img style="width:120%;" :src="myTeams[7].logo">
            </div>
            <div class="col">
                <img style="width:130%;" :src="myTeams[5].logo">
            </div>
            <div class="col">
                <img style="width:120%; " :src="myTeams[8].logo">
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <img :src="myTeams[3].logo">
            </div>
            
        </div>
        
    </div> -->
<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in myTeams"
      :key="i"
      :src="item.logo"
    ></v-carousel-item>
  </v-carousel>
</template>
<style>
.v-image__image--cover {
    background-size: 270px 320px;
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
