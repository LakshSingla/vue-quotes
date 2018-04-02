<template >
    <section class="col z-depth-3"  @click="removeQuote" @mouseover="isHovering = true" @mouseout="isHovering = false"
    :class=" { red : isHovering, 'lighten-4' : isHovering }"
    >
        {{ quoteText }}
    </section>
</template>

<script>

import {eventBus} from '../main.js'

export default {
    props: {
        quoteOrder : Number,
        quoteText: String
    },
    methods: {
        removeQuote(ev) {
            eventBus.$emit('deleteQuote', this.quoteOrder, 'someRandomShit');
        },

    } ,
    data() {
        return {
            isHovering : false
        }
    }
}
</script>

<style scoped>

section{
    min-height: 150px !important;
    width: 22.5%;
    margin: 5px;
    font-size: 28px;
    overflow: auto;
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
