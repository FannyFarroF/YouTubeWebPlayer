<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps(["videos", "videoID", "description", "title"]);
const emit = defineEmits(["updateIframeVideo"]);

function sendParentVideo(videoId) {
  emit("updateIframeVideo", videoId);
}
</script>

<template>
  <div class="py-4">
    <div class="row">
      <div class="col-md-8">
        <div class="content-video">
          <iframe
            class="w-100 h-100"
            :src="`https://www.youtube.com/embed/${props.videoID}`"
            title="youtube player"
          ></iframe>
        </div>
        <div class="description py-3">
          <h6 class="title-desription">{{ props.title }}</h6>
          <div class="content-description p-3">
            <p> {{ props.description }} </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="item-video mb-1" v-for="(item, index) in props.videos" :key="index">
          <div class="row py-2 align-items-center">
            <div class="col-md-6">
              <img
                :src="item.thumbnail"
                class="w-100 thumbnail"
                @click="sendParentVideo(item)"
                style="cursor: pointer"
              />
            </div>
            <div class="col-md-6 ps-0">
              <p class="m-0 fw-bolder" style="font-size: small">{{ item.title }}</p>
              <span class="channel-title">
                {{ item.channelTitle }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.title-desription,
.channel-title{
  color: var(--light-grey) !important;
}
p{
  color: var(--light-grey) !important;
}
.channel-title{
  font-size: 11px;
}
.content-description{
  background: var(--dark-grey);
  border-radius: 10px;
}
</style>
