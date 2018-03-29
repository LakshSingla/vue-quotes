<template>
  <div id="app">
    <h1>Wonderful quotes</h1>
    <div id="main">
      <counter-wrapper></counter-wrapper>
      <addquote-wrapper></addquote-wrapper>
      <div id="quote-wrapper" class="row">
        <quoteComp v-for="(quote, index) in quotes" :key="index" :quoteText="quote" :quoteOrder="index">

        </quoteComp>
      </div>
    </div>
  </div>
</template>

<script>

import counter from './components/counter.vue'
import addQuote from './components/addQuote.vue'
import quote from './components/quote.vue'

export default {
  name: 'App',
  components : {
    counterWrapper : counter, 
    addquoteWrapper : addQuote,
    quoteComp : quote,
  }, 
  data() {
    return {
      quotes : [ "This is just a string" , "Tis is just another string", "Lazy to bed, early", "You suck ass"]
    }
  }
}
</script>

<style>
#app {
  margin: 0px;
  padding: 0px;
  border: 0px;
  outline: 0px;
  box-sizing: border-box;
  border: 1px solid yellow;
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
  font-size: 3.2rem;
}

#quote-wrapper{
  width: 100%;
  height: 100%;
  padding: 30px 20px;
  display: flex;
  justify-content: space-around;
}
</style>
