<template>
    <div id="wrapper">
    <form class="s12">
     <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea2" class="materialize-textarea" data-length="120"
                      v-model = " quote "></textarea>
            <label for="textarea2">Quote Text</label>
          </div>
        </div>
      </form>
      <a class="waves-effect waves-light btn" @click=" addQuote ">Add Quote</a>
    </div>
</template>

<script>

export default {
    data() {
        return {
            quote : null
        }
    },
    methods: {
        addQuote() {
            console.log('Add quote button clicked');
            this.$emit('newQuote', this.quote);
            this.$eventHub.$emit('lol', this.quote);
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
}
</style>
