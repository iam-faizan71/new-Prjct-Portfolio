<template>
  <v-app class="bg-grey-lighten-3">
<NavBarComponents />
    <v-main class="mx-4 mb-4">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBarComponents from '@/components/NavBarComponents.vue';
export default {

  name: 'App',
  components : {NavBarComponents},

  data: () => ({
    //
  }),
}
</script>
