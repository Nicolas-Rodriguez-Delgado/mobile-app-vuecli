<template>
    <div>
        <v-container>
            <div v-for="(item, index) in matchesInHome" :key = "index">

                <h3>{{item.teams.t1name}}</h3>
            </div>
            
            
        </v-container>

    </div>
</template>

<script>
export default {
    name: "teams",
    data() {
        return {
            matchesInHome: null,
        };
    },
    created() {
        this.matchesInHome = this.$route.params.dataToPass;
    }
}
</script>
