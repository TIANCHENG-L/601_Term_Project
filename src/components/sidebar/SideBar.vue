<template>
  <div class="sideBar" :style="{width: sidebarWidth}">
    <h1>
      <span v-if="collapsed">
        <div>N</div>
        <div>B</div>
      </span>
      <span v-else>Navigation Bar</span>
    </h1>


    <side-bar-link to="/HomePage" icon="fa-solid fa-house">Home</side-bar-link>
    <side-bar-link to="/MusicAndGuitar" icon="fas fa-columns">Music and Guitar</side-bar-link>
    <side-bar-link to="/MyHobby" icon="fa-solid fa-guitar">MyHobby</side-bar-link>
    <side-bar-link to="/PhotoGallery" icon="fa-solid fa-cat">My Fluffy Friends </side-bar-link>
    <side-bar-link to="/MyResume" icon="fa-solid fa-building-user">My Resume</side-bar-link>
    <side-bar-link to="/ContactForm" icon="fa-regular fa-comment-dots">Leave Your Info</side-bar-link>


    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar">
      <font-awesome-icon icon="fa-solid fa-music" />
    </span>

  </div>
</template>


<script>
import {
  collapsed,toggleSidebar, sidebarWidth
} from "@/components/sidebar/state";
import SideBarLink from "@/components/sidebar/SideBarLink";

export default {
  components: {SideBarLink},
  props: {},
  setup(){
    return {collapsed, sidebarWidth, toggleSidebar}
  }
}
</script>

<style>

:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>

.sideBar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>