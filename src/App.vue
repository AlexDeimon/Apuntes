<template>
  <div class="workspace" :data-tech="selectedTech">
    <ActivityBar v-model="selectedTech" />
    <SideBar :selected-tech="selectedTech" />
    <EditorComponent />
  </div>
</template>
<script setup lang="ts">
import ActivityBar from '@/components/ActivityBar.vue'
import SideBar from '@/components/SideBar.vue'
import EditorComponent from '@/components/EditorComponent.vue'
import { useEditorStore } from '@/stores/editor'
import { storeToRefs } from 'pinia'

const store = useEditorStore()
const { selectedTech } = storeToRefs(store)
</script>
<style scoped>
.workspace {
  display: flex;
  height: 100vh;
}

.workspace[data-tech="html"] {
  --tech-color: var(--color-html);
}

.workspace[data-tech="css"] {
  --tech-color: var(--color-css);
}

.workspace[data-tech="js"] {
  --tech-color: var(--color-js);
}

.workspace[data-tech="bootstrap"] {
  --tech-color: var(--color-bootstrap);
}

.workspace[data-tech="typescript"] {
  --tech-color: var(--color-typescript);
}

.workspace[data-tech="nodejs"] {
  --tech-color: var(--color-nodejs);
}
</style>
