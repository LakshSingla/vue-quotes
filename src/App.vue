<template>
  <div id="app">
    <h1>Wonderful quotes</h1>
    <div id="main">
      <counter-wrapper :length="noOfQuotes"></counter-wrapper>
      <addquote-wrapper></addquote-wrapper>
      <div id="quote-wrapper" class="row">
        <quoteComp v-for="(quote, index) in quotes" :key="index" :quoteText="quote" :quoteOrder="index" @deleteQuote="deleteQuote">
        </quoteComp>
      </div>
    </div>
  </div>
</template>

<script>

import counter from './components/counter.vue'
import addQuote from './components/addQuote.vue'
import quote from './components/quote.vue'

import {eventBus} from './main.js'

/*eventBus.on('newQuote' , function(quote) {
  console.log('Listened to the new quote event outside of the Original vue instance');
});*/

export default {
  name: 'App',
  created() {
    console.log(eventBus);
    eventBus.$on('newQuote', quote =>  {
      console.log('"New Quote" event registered on the eventBus');
      this.newQuote(quote);
    });
    eventBus.$on('deleteQuote', (qn, srt) => this.quotes.splice(qn, 1));
    console.log('Outside the eventBus lifecycle hook');
  },
  components : {
    counterWrapper : counter, 
    addquoteWrapper : addQuote,
    quoteComp : quote,
  }, 
  data() {
    return {
      quotes : new Array()
    }
  }, 
  methods: {
    newQuote(quote){
      if(this.noOfQuotes < 10)  this.quotes.push(quote);
      else{
         M.toast( {html: ' Maximum of 10 quotes allowed at a time. Please delete some before adding other one'});
         M.toast.dismissAll();
      }
    },
    deleteQuote(quoteNumber){
      this.quotes.splice(quoteNumber, 1);
    }
  },
  computed : {
    noOfQuotes() {
      return this.quotes.length;
    }
  }
}
export {eventBus}
</script>

<style>
#app {
  margin: 0px;
  padding: 0px;
  border: 0px;
  outline: 0px;
  box-sizing: border-box;
  /* border: 1px solid yellow; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
#main{
  height: 100%;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 4.2rem;
}

#quote-wrapper{
  width: 100%;
  height: 100%;
  padding: 30px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
