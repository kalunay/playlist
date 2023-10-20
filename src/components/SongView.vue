<template>
    <div class="songs-item">
        <div class="songs-item-wrap">
            <div class="songs-item__image"><img :src="`/image/${song?.image}`"></div>
            <div class="songs-item__name"><i>название:</i> {{ song?.name }}</div>
            <div class="songs-item__auther"><i>исполнитель:</i> {{ song.auther }}</div>
        </div>
        <div class="songs-item-wrap">
            <div class="songs-item__time"><i>{{ formaTime(song?.time) }} мин.</i></div>
            <div v-if="idSong !== song.id && idSong" class="disabled">
                <audio-player
                    ref="audioPlayer"
                    :audio-list="[`/files/${song.file}`]"
                    theme-color="#ff2929"
                    :show-prev-button="false"
                    :show-next-button="false"
                    :show-volume-button="false"
                    :show-progress-bar="false"
                    :show-playback-rate="false"
                    :before-play="playSong"
                    @pause="pauseSong"
                />
            </div>
            <div @click="playSong" v-else>
                <audio-player
                    ref="audioPlayer"
                    :audio-list="[`/files/${song.file}`]"
                    theme-color="#ff2929"
                    :show-prev-button="false"
                    :show-next-button="false"
                    :show-volume-button="false"
                    :show-progress-bar="false"
                    :show-playback-rate="false"
                    :before-play="playSong"
                    @pause="pauseSong"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import type { Song } from '@/types/Song';
import { defineComponent, type PropType } from 'vue';
import AudioPlayer from '@liripeng/vue-audio-player';

export default defineComponent({
    components: {
        AudioPlayer
    },
    props: {
        song: {
            type: Object as PropType<Song>,
            required: true
        },
        idSong: {
            type: Number,
            required: true
        }
    },
    methods: {
        formaTime: function(time: any){
            return `${Math.floor(time/60)}:${time%60}`
        },
        playSong(next){
            this.$emit('playSong', this.song.id)
            console.log('playSong',this.song.id)
            next()
        },
        pauseSong(){
            this.$emit('pauseSong', this.song.id)
            console.log('pauseSong',this.song.id)
        }
    },
    emits: {
        playSong: (id: number) => Number.isInteger(id),
        pauseSong: (id: number) => Number.isInteger(id)
    }
})
</script>

<style scoped>
    .songs-item-wrap {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .songs-item {
        display: flex;
        flex-direction: row;
        gap: 15px;
        align-items: center;
        background-color: #eee;
        margin-bottom: 10px;
        padding: 0;
        justify-content: space-between;
    }
    .songs-item i {
        color: #443f3f;
        font-size: .8em;
        font-style: normal;
    }
    .songs-item__image {
        padding: 0;
    }
    .songs-item__image img {
        width: 64px;
    }
    .disabled {
        display: block;
        position: relative;
    }
    .disabled::after {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: transparent;
        content: ' ';
        top: 0;
    }

    @media (max-width: 480px) {
        .songs-item {
            flex-direction: column;
        }
    }
</style>