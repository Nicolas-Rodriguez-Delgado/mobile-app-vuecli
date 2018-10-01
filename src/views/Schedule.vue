<template>
<div>
    <div v-for="(match,i) in myInfo" :key="i">
            <div class="row text-center rowes">
                <div class="col">
                    <img class="sched" :src="match.teams.t1logo">
                    <p>{{match.teams.t1name}}</p>
                </div>
                <div class="col">
                   <p class="in">VS.</p> 
                   <p class="in">{{match.teams.date}}</p>
                   <p class="in">{{match.teams.time}}</p>
                </div>
                <div class="col">
                    <img class="sched" :src="match.teams.t2logo">
                    <p>{{match.teams.t2name}}</p>
                </div>   
            </div>
     
    </div>


</div>
</template>
<style>
.sched {
  width: 40%;
  margin: 5px;
}
.in {
    margin: 0px;
}
.rowes {
    margin: 20px;
    border-width: 3px;
    border-style: inset;
    border-color: gray;
}
</style>

<script>
export default {
  name: "schedule",
  data() {
    return {
      myInfo: null
    };
  },
  created() {
    this.myInfo = this.$route.params.dataToPass;
    console.log(this.myInfo);
  }
};
</script>

