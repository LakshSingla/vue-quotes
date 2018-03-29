<template>
    <div id="wrapper">
    <form class="s12">
     <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
            <label for="textarea2">Quote Text</label>
          </div>
        </div>
      </form>
      <a class="waves-effect waves-light btn">Add Quote</a>
    </div>
</template>

<script>
export default {
  
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
