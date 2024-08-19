<template>
  <nav>
    <!-- Snackbar -->
    <v-snackbar v-model="snackbar" :timeout="3000" color="#66BB6A">
      <span>New Project Added Successfully</span>
      <v-btn variant="plain" size="small" color="white" @click="snackbar = false"> Close</v-btn>
    </v-snackbar>

    <!--Toolbar -->
    <v-toolbar density="comfortable" :elevation="4" app>
      <!-- Side menu icon -->
      <v-app-bar-nav-icon class="text-grey" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- Navbar logo -->
      <v-toolbar-title class="text-uppercase text-grey">
        <span class="font-weight-light">Decode</span>
        <span class="font-weight-medium">Knight</span>
      </v-toolbar-title>

      <!-- Ul list -->
      <ul class="d-flex align-center header-lists mr-10">
        <router-link to="/" class="grey-text text-capitalize d-none d-md-flex menu-item">
          Dashboard
        </router-link>
        <router-link to="/myprojects" class="grey-text text-capitalize d-none d-md-flex menu-item">
          My Project
        </router-link>
        <router-link to="/myteam" class="grey-text text-capitalize d-none d-md-flex menu-item">
          My Team
        </router-link>
      </ul>

      <!-- Avatar icon / menu -->
      <v-menu rounded="lg">
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" class="mr-5">
            <v-avatar color="white" size="small">
              <v-img src="/person1.png"></v-img>
            </v-avatar>
          </v-icon>
        </template>
        <!-- After click Icon -->
        <v-card width="300" flat color="purple-accent-4">
          <v-card-text>
            <div class="text-center">
              <v-avatar color="white">
                <v-img alt="User Picture" src="/person1.png"></v-img>
              </v-avatar>
              <h3 class="mt-1">Faizan</h3>
              <p class="text-caption mt-1">
                Web Developer
              </p>
              <v-divider class="my-3"></v-divider>
              <div class="mt-3 mb-2">
                <PopupComp @ProjectAdded="snackbar = true" />
              </div>
              <!-- <v-btn variant="text" rounded @click="EditUser">
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn variant="text" rounded @click="logout">
                Log Out
              </v-btn> -->
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-toolbar>

    <!--Navigation Drawer -->
    <v-navigation-drawer app temporary v-model="drawer" color="purple-accent-4">
      <div class="d-flex flex-column align-center mt-5">
        <v-avatar size="60">
          <v-img src="/person1.png" alt="Faizan Shaikh"></v-img>
        </v-avatar>
        <p class="text-white text-subtitle-1 mt-1">Faizan Shaikh</p>
      </div>
      <div class="mt-3 mb-2">
        <PopupComp @ProjectAdded="snackbar = true" />
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
  components: { PopupComp },

  data() {
    return {
      drawer: false,
      manuItems: [
        { icon: 'mdi-view-dashboard', title: 'Dashboard', value: 1, route: '/' },
        { icon: 'mdi-folder', title: 'My Project', value: 2, route: '/myprojects' },
        { icon: 'mdi-account', title: 'My Team', value: 3, route: '/myteam' }
      ],
      snackbar: false,
    }

  },
}
</script>

<style>
ul.header-lists {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin-left: 20px;
  margin-right: 20px;
}

.menu-item {
  color: grey;
  text-decoration: none;
  padding: 10px;
  margin-left: 15px;
}
</style>