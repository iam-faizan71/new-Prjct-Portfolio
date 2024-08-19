<template>
    <div class="text-center pa-4">
        <v-btn color="#E0FFFF" @click="dialog = true">
            Add new project
        </v-btn>

        <v-dialog v-model="dialog" width="600px">
            <v-card  title="Add a New Project">
                <v-card-text>
                    <v-form class="px-3" ref="form">
                        <v-text-field prepend-icon="mdi-folder-outline" label="Title" v-model="title"
                            :rules="inputRules.title"></v-text-field>
                        <v-textarea prepend-icon="mdi-pencil-outline" label="information" v-model="information"
                            :rules="inputRules.information"></v-textarea>

                        <v-btn color="#E0FFFF" class="mx-0 mt-3" @click="submit">Add Project
                            <LoaderComp :loading="loading" />
                        </v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
    
    </div>
</template>
<script>
import db from '@/firebase.js';
import { collection, addDoc } from 'firebase/firestore';
import LoaderComp from '@/components/LoaderComp.vue';

export default {
    components:{LoaderComp,},
    data() {
        return {
            dialog: false,
            title: '',
            information: '',
            loading: false,
            inputRules: {
                title: [
                    v => !!v || 'Title is required',
                    v => v.length >= 4 || 'Title must be at least 4 characters long'
                ],
                information: [
                    v => !!v || 'Information is required',
                    v => v.length >= 10 || 'Information must be at least 10 characters long'
                ]
            }
        }
    },
    methods: {
        async submit() {
            const form = this.$refs.form;
            if (form.validate()) {
                this.loading = true;
                const project = {
                    title: this.title,
                    content: this.information,
                    person: 'Faizan Shaikh',
                    status: 'ongoing'
                };

                try {
                    // Add the project data to Firestore
                    await addDoc(collection(db, 'projects'), project);
                    console.log('Project added:', project);

                    this.loading = false; 
                    // Reset the form after successful submission
                    form.reset();
                    this.dialog = false; // Close the dialog
                    this.$emit('ProjectAdded')

                } catch (error) {
                    console.error('Error adding project:', error);
                }
                 finally {
                    this.loading = false; 
                }

            }
        }
    }
}
</script>
