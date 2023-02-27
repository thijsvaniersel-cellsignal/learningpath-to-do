<template>
  <div class="bg-indigo-50 flex items-center justify-center h-screen">
    <div class="container">
        <div class="p-2"> 
          <Status />
          <Input />
          <Errors />
          <List />
        </div>
    </div>
  </div>
</template>

<!-- 
  special sugar synax 
  We don't use this in the monorepo, maybe when we switch to Nuxt3
-->
<script setup lang="ts">
// components
import Status from '@/components/status.vue'
import Input from '@/components/input.vue'
import Errors from '@/components/errors.vue'
import List from '@/components/list.vue'
</script>

