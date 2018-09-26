<template>
<div>



</div>
</template>

<script>
export default {
    name: 'schedule',
    data() {
        return {
            myInfo: null
        }
    },
    created(){
        this.myInfo = this.$route.params.dataToPass
        console.log(this.myInfo)
    }
}
</script>

