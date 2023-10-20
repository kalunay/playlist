<template>
  <main class="app-main">
    <PlaylistView :songs="songs" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PlaylistView from '@/components/PlaylistView.vue';
import { Song } from '@/types/Song'

interface State {
  songs: Song[]
}

export default defineComponent({
  components: {
    PlaylistView
  },

  data(): State {
    return {
      songs: [
        {id: 1, name: 'Pop', auther: 'Death Grips', image: 'death-grips.jpg', time: 173, file: 'Death Grips - Pop.mp3'},
        {id: 2, name: 'Stockton', auther: 'Death Grips', image: 'death-grips.jpg', time: 229, file: 'Death Grips - Stockton.mp3'},
        {id: 3, name: 'Ghost', auther: 'Motorama', image: 'motorama.jpg', time: 198, file: 'Motorama - Ghost.mp3'},
      ]
    }
  }
})
</script>