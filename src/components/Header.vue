<script setup>
  import { ref, defineEmits } from 'vue';
  const search = ref('');
  const emit = defineEmits(['performSearchFromParent']);

  function handleClick() {
    emit('performSearchFromParent', search.value);
  }
</script>

<template>
  <header>
    <div class="content">
      <div class="form">
        <div class="row justify-content-between align-items-center">
          <div class="col-md-3 mb-3">
            <div class="d-flex align-items-center">
              <font-awesome-icon :icon="['fas', 'bars']" class="text-white me-3 fs-4" />
              <h4 class="m-0 text-white">
                <font-awesome-icon :icon="['fas', 'play-circle']" class="icon" />
                CodeMusic  
                <sup class="sup">PE</sup>
              </h4>
            </div>
          </div>
          <div class="col-md-8 mb-3 d-flex justify-content-end">
            <div class="input-group mb-3">
              <input type="search" class="form-control w-50" v-model="search" placeholder="Buscar" aria-label="Buscar" aria-describedby="button-addon2" @keyup.enter="handleClick">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="handleClick" title="Buscar">
                <font-awesome-icon :icon="['fas', 'search']" class="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
input{
  border-radius: 10px 0 0 10px !important;
}
button{
  border-radius: 0 10px 10px 0 !important;
}
button:focus{
  border: 0 !important;
}
button:hover{
  background: var(--dark-grey) !important;
}
.icon{
  color: var(--red);
}
.sup{
  font-weight: 300 !important;
  font-size: 14px;
}
</style>