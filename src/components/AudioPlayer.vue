<template>
    <div>
      <audio ref="audioElement">
        <source :src="audioUrl" type="audio/mp3">
      </audio>
      <div class="sound">
            <div v-if="!playing" @click="togglePlayback" class="sound-on">
                <img src="@/assets/images/sound-on.gif">
                <span>Әуен қосу</span>
            </div>
            <div v-if="playing" @click="togglePlayback" class="sound-on sound-off">
                <img class="sound-off-svg" src="@/assets/images/sound-off.svg">
                <img class="sound-off-gif" src="@/assets/images/sound-off.gif">
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import audioFile from "@/assets/audio/Қазыбек Құрайыш - Махаббат деген.mp3";
  export default {
    data() {
      return {
        playing: false,
        audioUrl: audioFile
      };
    },
    mounted() {
    //   this.playAudio();
    },
    methods: {
      playAudio() {
        const audioElement = this.$refs.audioElement;
        audioElement.play();
        this.playing = true;
      },
      pauseAudio() {
        const audioElement = this.$refs.audioElement;
        audioElement.pause();
        this.playing = false;
      },
      togglePlayback() {
        if (this.playing) {
          this.pauseAudio();
        } else {
          this.playAudio();
        }
      },
    },
  };
  </script>