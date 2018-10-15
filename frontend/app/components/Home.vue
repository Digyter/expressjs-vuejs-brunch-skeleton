<script>
  import Header from './Header'
  export default {
    name: 'hello',
    components: {
      Header
    },
    data() {
      return {
        msg: 'Welcome!'
      }
    }
  }

</script>

<template>
  <div class="hello">
    <Header title="Title"></Header>
    <h1>{{ msg }}</h1>
    <mdc-button raised>Get Started</mdc-button>
  </div>
</template>

<style lang="scss">
  $mdc-theme-primary: #1a73e8;
  $mdc-theme-accent: rgb(59,120,231);
  $mdc-theme-background: #fff;

  // TODO: Use SCSS for variables and theming
  // QUESTION: Npm issues causing bug
  // @import "vue-mdc-adapter/components/styles.css";

  @import "vue-mdc-adapter/dist/vue-mdc-adapter.css";
  .mdc-toolbar {
    background-color: $mdc-theme-primary;
  };
  body {
    color: rgb(59,120,231);    
  }
</style>
