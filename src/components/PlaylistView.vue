<template>
    <div class="songs">
        <SongView 
            v-for="song in songs" 
            @playSong="playSong" 
            @pauseSong="pauseSong" 
            :idSong="id" 
            :song="song" 
            :key="song.id"
         />
    </div>
</template>

<script lang="ts">
import type { Song } from '@/types/Song';
import { defineComponent, type PropType } from 'vue';
import SongView from './SongView.vue';

export default defineComponent({
    components: {
        SongView
    },
    props: {
        songs: {
            type: Array as PropType<Song[]>
        },
        idSong: {
            type: Number,
            default: 0
        }
    },
    data(){
        return {
            id: 0
        }
    },
    methods: {
        playSong(id: number){
            this.id = id
        },
        pauseSong(id: number){
            this.id = 0
        }
    }
})
</script>

<style scoped>
    .songs {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
</style>