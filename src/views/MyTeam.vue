<template>
    <div class="myteam mt-4">
        <h1 class="text-grey text-subtitle-1">Team</h1>
    </div>
    <v-container class="my-5">
        <v-row wrap>
            <v-col cols="12" md="4" sm="6" xs="12" v-for="(person, index) in team" :key="index">
                <v-card flat class="ma-3">
                    <div class="d-flex flex-column align-center">
                        <div class="pt-4">
                            <v-avatar size="100" class="grey-lighten-2">
                                <v-img :src="person.avatar"></v-img>
                            </v-avatar>
                        </div>
                        <v-card-text class="d-flex flex-column align-center">
                            <div class="text-subtitle-1">{{ person.name }}</div>
                            <div class="text-grey">{{ person.role }}</div>
                        </v-card-text>
                    </div>
                    <v-card-action>
                        <v-btn variant="text" color="grey" prepend-icon="mdi-message">Massage</v-btn>
                    </v-card-action>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default {
    data() {
        return {
            team: [
                { name: 'Faizan Shaikh', role: 'Frontend Developer', avatar: 'person1.png' },
                { name: 'Jack Davidson', role: 'Graphic designer', avatar: 'person2.png' },
                { name: 'Thomas Gill', role: 'Backend Developer', avatar: 'person4.png' },
                { name: 'Jason	Lee', role: 'Content Writer', avatar: 'person5.png' },

            ]
        }
    }
}
</script>