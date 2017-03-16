<template>
  <f7-page name="index-1">
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon="icon-bars" open-panel="left"></f7-link>
      </f7-nav-left>
      <f7-nav-center>
        Home
      </f7-nav-center>
    </f7-navbar>
    <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-block inner>
      <p>
        This is an example of split view application layout where left
        view degrades to panel on narrow screens (iPad portrait and
        iPhone). It behaves like default Mail app on iOS 7.
      </p>
      <p>
        Each view may have different layout, different navbar type
        (dynamic, fixed or static) or without navbar. You can easily
        control one view from another without any line of JavaScript
        just using "data-view" attribute on links.
      </p>
    </f7-block>
  </f7-page>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        title: 'Home Page'
      };
    }
  };
</script>
