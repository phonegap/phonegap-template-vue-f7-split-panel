<template>
  <f7-panel left :reveal="isiOS" :cover="isMaterial">
    <f7-navbar title="Menu"></f7-navbar>
    <f7-page>
      <f7-block-title>Links</f7-block-title>
      <f7-list>
        <f7-list-item
          link="/home"
          title="Home"
          link-view="#view-main"
          link-reload
          link-close-panel
        />
        <f7-list-item
          link="/about"
          title="About"
          link-view="#view-main"
          link-reload
          link-close-panel
        />
        <f7-list-item
          link="/services/"
          title="Services"
          link-view="#view-main"
          link-reload
          link-close-panel
        />
      </f7-list>
    </f7-page>
  </f7-panel>
</template>

<script>
  export default {
    name: 'LeftPanel',
    data () {
      return {
        isMaterial: window.isMaterial,
        isiOS: window.isiOS
      };
    }
  };
</script>

<style scoped>
  .panel-left .page {
    margin-top: 44px;
    padding-bottom: 44px;
  }
  @media (min-width: 960px) {
    .panel.panel-left {
      border-right: 1px solid #b2b2b2;
    }
  }
</style>
