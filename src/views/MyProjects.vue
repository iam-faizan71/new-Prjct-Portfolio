<template>
  <div class="myprojects mt-4">
    <h1 class="text-grey text-subtitle-1">Projects</h1>
  </div>
  <v-container class="my-5">
    <v-expansion-panels variant="accordion">
      <v-expansion-panel v-for="(project , index) in myProjects" :key="index">
        <v-expansion-panel-title>{{project.title}}</v-expansion-panel-title>
        <v-expansion-panel-text class="px-4 text-grey">
          <div class="font-weight-bold">due by {{project.due}}</div>
          <div>{{project.content}}</div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
// import { defineComponent } from 'vue';

// export default defineComponent({

// });
export default {
  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'Faizan Shaikh', due: '1st Jan 2024', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
        { title: 'Code up the homepage', person: 'Jack Davidson', due: '20th Dec 2023', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
        { title: 'Design video thumbnails', person: 'Thomas Gill', due: '10th Dec 2023', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
        { title: 'Create a community forum', person: 'Jason	Lee', due: '20th Oct 2023', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
      ]
    }
  },
  computed: {
    myProjects(){
      return this.projects.filter(project =>{
        return project.person === 'Faizan Shaikh'
      })
    } 
  }

}
</script>