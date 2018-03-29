<template>
    <section class="col z-depth-3" @mouseover="changeBgCol($event)" @click="removeQuote">
        {{ quoteOrder + 1 }}
        {{ quoteText }}
    </section>
</template>

<script>
export default {
    props: {
        quoteOrder : Number,
        quoteText: String
    },
    methods: {
        changeBgCol(ev){
            console.log("This is working");
            console.log(ev)
        },
        removeQuote(ev) {
            console.log("Remove quote event handler is working");
        }

    } 
}
</script>

<style scoped>

section{
    min-height: 150px !important;
    width: 22.5%;
    margin: 5px;
}

@media screen and (max-width: 992px){
   section{
       width: 30%;
   } 
}
@media screen and (max-width: 600px){
    section{
        width: 95%;
    }
}

</style>
