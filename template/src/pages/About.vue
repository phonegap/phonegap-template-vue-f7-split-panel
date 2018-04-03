<template>
  <f7-page name="about">
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>
        About
      </f7-nav-title>
    </f7-navbar>
    <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-block inner>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Distinctio est aliquam officiis quaerat placeat, cum explicabo magni
      soluta totam maxime autem minima accusamus eos suscipit dignissimos
      corporis modi voluptatum fugiat!
    </f7-block>
    <f7-list>
      <f7-list-item link="/about/another/" title="Another Page"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      title: 'About Page'
    };
  }
};
</script>
