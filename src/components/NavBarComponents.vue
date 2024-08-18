<template>
  <nav>
    <v-toolbar density="comfortable" :elevation="4" app>
      <v-app-bar-nav-icon class="text-grey" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase text-grey">
        <span class="font-weight-light">Decode</span>
        <span class="font-weight-medium">Knight</span>
      </v-toolbar-title>
    
      <div v-for="(toolbarMenu,index) in manuItems" :key="index">
        <v-btn class="grey text-capitalize d-none d-md-flex " variant="plain" :value="toolbarMenu.value" router :to="toolbarMenu.route">{{ toolbarMenu.title }}</v-btn>
      </div>

      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon icon="mdi-logout"></v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app temporary v-model="drawer" color="purple-accent-4">
      <div class="d-flex flex-column align-center mt-5">
        <v-avatar size="60">
          <v-img src="/person1.png" alt="Faizan Shaikh"></v-img>
        </v-avatar>
        <p class="text-white text-subtitle-1 mt-1">Faizan Shaikh</p>
      </div>
      <div class="mt-3 mb-2">
      <PopupComp/>
      </div>
      <v-list density="compact" nav class="text-white">
        <v-list-item v-for="(item, index) in manuItems" :key="index" :prepend-icon="item.icon" :title="item.title"
          router :to="item.route"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import PopupComp from './PopupComp.vue';

export default {
  name: 'NavBarComponents',
  components:{PopupComp},

  data() {
    return {
      drawer: false,
      manuItems: [
        { icon: 'mdi-view-dashboard', title: 'Dashboard', value: 1, route: '/' },
        { icon: 'mdi-folder', title: 'My Project', value: 2, route: '/myprojects' },
        { icon: 'mdi-account', title: 'My Team', value: 3, route: '/myteam' }
      ]
    }

  },
}
</script>