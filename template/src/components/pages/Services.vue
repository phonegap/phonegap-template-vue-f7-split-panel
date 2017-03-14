<template>
  <f7-page>
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon="icon-bars" open-panel="left"></f7-link>
      </f7-nav-left>
      <f7-nav-center>
        Services
      </f7-nav-center>
    </f7-navbar>
    <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-block inner>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Distinctio est aliquam officiis quaerat placeat, cum explicabo magni
      soluta totam maxime autem minima accusamus eos suscipit dignissimos
      corporis modi voluptatum fugiat!
    </f7-block>
  </f7-page>
</template>

<script>
  export default {
    name: 'Services',
    data() {
      return {
        title: 'Services Page',
      };
    },
  };
</script>
