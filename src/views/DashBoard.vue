<template>
    <div class="dashboard mt-4">
        <h1 class="text-grey text-subtitle-1">Dashboard</h1>
    </div>
    <v-container class="my-5">
        <v-row class="mb-3">
            <v-col cols="12">
                <v-tooltip location="top">
                    <template v-slot:activator="{ props }">
                        <v-btn variant="text" small color="grey" prepend-icon="mdi-folder"
                            class="text-caption text-lowercase" @click="sortBy('title')" v-bind="props">
                            By project name
                        </v-btn>
                    </template>
                    <span>Sort Projects by Project Name </span>
                </v-tooltip>

                <v-tooltip location="top">
                    <template v-slot:activator="{ props }">
                        <v-btn variant="text" small color="grey" prepend-icon="mdi-account"
                            class="text-caption text-lowercase" @click="sortBy('person')" v-bind="props">
                            By person
                        </v-btn>
                    </template>
                    <span>Sort Projects by Person Name </span>
                </v-tooltip>
            </v-col>
        </v-row>
        <v-card flat class="pa-3" v-for="(project, index) in projects" :key="index">
            <v-row wrap :class="`pa-3 project ${project.status}`">
                <v-col cols="12" md="6" sm="12" xs="12">
                    <div class="text-caption text-gery">Project title</div>
                    <div>{{ project.title }}</div>
                </v-col>
                <v-col cols="12" md="2" sm="4" xs="6">
                    <div class="text-caption text-gery">Person</div>
                    <div>{{ project.person }}</div>
                </v-col>
                <v-col cols="12" md="2" sm="4" xs="6">
                    <div class="text-caption text-gery">Due By</div>
                    <div>{{ project.due }}</div>
                </v-col>
                <v-col cols="12" md="2" sm="4" xs="2">
                    <div class="d-flex justify-end">
                        <v-chip size="small" :class="`${project.status} text-white text-caption my-2`">{{ project.status
                            }}</v-chip>
                    </div>
                </v-col>
            </v-row>
            <v-divider class="mb-n2"></v-divider>
        </v-card>
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
    methods: {
        sortBy(prop) {
            this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
        }
    },

}
</script>
<style scoped>
.project.complete {
    border-left: 4px solid #93E9BE;
}

.project.overdue {
    border-left: 4px solid #ff6347;
}

.project.ongoing {
    border-left: 4px solid orange;
}

.v-chip.complete {
    background-color: #93E9BE;
}

.v-chip.overdue {
    background-color: #ff6347;
}

.v-chip.ongoing {
    background-color: orange;
}
</style>
