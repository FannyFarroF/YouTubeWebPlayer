<script setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';
import Header from './components/Header.vue';
import Results from './components/Results.vue';

const search_query = ref('VUE3');
const videos = ref([]);
const videoID = ref('');
const description = ref('');
const title = ref('');

const API_KEY = "AIzaSyAhIcGwUsCX_w1d4t0dMjKujYrAI15P0FA"
// const API_KEY = "AIzaSyByjQG6gA2FX73Avfo1QATUeQo_MRbLSXA";
const API_URL = "https://www.googleapis.com/youtube/v3/search"

function performSearch(search){
  videos.value = [];
  videoID.value = '';
  description.value = '';
  title.value = '';

  axios.get( API_URL, {
    params: { q: search, part: 'snippet', type: 'video', key: API_KEY }
  })
  .then(function (response) {
    response.data.items.forEach((item, index) => {
      if (index == 1){
        videoID.value = item.id.videoId;
        description.value = item.snippet.description;
        title.value = item.snippet.title;
      }

      const video = {
        videoId: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        thumbnail: item.snippet.thumbnails.medium.url,
        channelTitle: item.snippet.channelTitle,
      };

      videos.value.push(video);
    });
  })
  .catch(function (error) {
    console.log(error);
  })
}

function updateIframeVideo(item) {
  videoID.value = item.videoId;
  description.value = item.description;
  title.value = item.title;
}

onMounted(()=>{
  performSearch(search_query.value)
});

</script>

<template>
  <div class="container py-5">
    <Header @performSearchFromParent="performSearch" />
    <Results :videos="videos" :videoID="videoID" :description="description" :title="title" @updateIframeVideo="updateIframeVideo" />
  </div>
</template>

<style>
body{
  background: var(--base-background);
}
:root{
  --base-background: #0f0f0f;
  --black-color: #000;
  --white: #fff;
  --red: #FF0000;
  --dark-grey: #282828;
  --light-grey: #F8F8F8;
}
#app{
  width: 100%;
}
</style>