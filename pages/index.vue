<template>
  <div class="bg-indigo-50 flex items-center justify-center h-screen">
    <div class="container">
        <div class="p-2"> 
          <Input />
          <Errors />
          <List />
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// components
import Input from '@/components/input.vue'
import Errors from '@/components/errors.vue'
import List from '@/components/list.vue'
</script>

