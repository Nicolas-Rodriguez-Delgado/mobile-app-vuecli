<template>
    <div>
        <v-container>
            
            
            
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
