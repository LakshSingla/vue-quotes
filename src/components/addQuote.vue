<template>
    <div id="wrapper">
    <form class="s12">
     <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea2" class="materialize-textarea" data-length="120"
                      v-model = " quote "
                      @keypress=" isEnter"></textarea>
            <label for="textarea2">Quote Text</label>
          </div>
        </div>
      </form>
      <a class="waves-effect waves-light btn" @click=" addQuote">Add Quote</a>
    </div>
</template>

<script>

import {eventBus} from '../main'
import {eventBus as eventBusApp} from '../App.vue'

export default {
    data() {
        return {
            quote : null
        }
    },
    methods: {
        addQuote() {
            let trimmedQuote = this.quote.trim();
            if(trimmedQuote.length != 0) {
                this.$emit('newQuote', trimmedQuote);
                this.quote = '';
                eventBus.$emit('newQuote', trimmedQuote);
            }
        }, 
        isEnter(ev) {
            if(ev.keyCode === 13){ 
                ev.preventDefault();
                this.addQuote();
            }
        }
    }
}
</script>

<style scoped>
#wrapper {
    width: 80%;
}
textarea {
    color : #333333;
    font-family: lucida;
    font-size: 28px;
}

a {
    font-size: 20px;
}

</style>
