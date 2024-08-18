<template>
    <div class="text-center pa-4">
        <v-btn color="#E0FFFF" @click="dialog = true">
            Add new project
        </v-btn>

        <v-dialog v-model="dialog" width="600px">
            <v-card max-width="700px" title="Add a New Project">
                <v-card-text>
                    <v-form class="px-3" ref="form">
                        <v-text-field prepend-icon="mdi-folder-outline" label="Title" v-model="title" :rules="inputrule"></v-text-field>
                        <v-textarea prepend-icon="mdi-pencil-outline" label="information"
                            v-model="information" :rules="inputrule"></v-textarea>

                        <!-- <v-row class="d-flex justify-center">
                            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :nudge-right="40"
                                transition="scale-transition" offset-y min-width="290px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="due" label="Select Date" prepend-icon="mdi-calendar" readonly
                                        v-bind="attrs" v-on="on"></v-text-field>
                                </template>
<v-date-picker v-model="due" no-title scrollable>
    <v-spacer></v-spacer>
    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
    <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
</v-date-picker>
</v-menu>
</v-row> -->

                        <v-btn color="#E0FFFF" class="mx-0 mt-3" @click="submit">Add Project</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dialog: false,
            title: '',
            information: '',
            // due: null,
            // menu: true
            inputrule:[
                v => v.lenght >= 4 || 'Minimum lenght is 4 charachers'
            ]
        }
    },
    methods: {
        submit() {
            if(this.$refs.form.validate()){
                console.log(this.title, this.information);
            }
            
        }
    }

}
</script>