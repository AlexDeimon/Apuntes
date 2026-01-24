<template>
  <aside class="sidebar" v-if="selectedTech" :style="{ '--tech-color': `var(--color-${selectedTech})` }">
    <div class="sidebar-header">
      <h1 class="tittle1">{{ getCurrentTechName }}</h1>
    </div>
    <div class="sidebar-content">
      <div v-for="module in getCurrentModules" :key="module.id" class="module-item" @click="openModule(module)">
        <img :src="module.icon" alt="" class="module-icon">
        <h3 class="tittleTech">{{ module.name }}</h3>
      </div>
    </div>
  </aside>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { technologies } from '@/constants/technologies'
import { modules } from '@/constants/modules'
import type { Tab } from '@/constants/editor'
import { useEditorStore } from '@/stores/editor'

const props = defineProps<{
  selectedTech: string
}>()

const store = useEditorStore()

const getCurrentTechName = computed(() => {
  const tech = technologies.find(t => t.id === props.selectedTech)
  return tech ? tech.name : ''
})

const getCurrentModules = computed(() => {
  return modules[props.selectedTech as keyof typeof modules] || []
})

const openModule = (module: { id: string, name: string }) => {
  const tab: Tab = {
    id: `${props.selectedTech}-${module.id}`,
    title: module.name,
    route: `/${props.selectedTech}/${module.id}`,
    moduleId: module.id,
    techId: props.selectedTech
  }

  store.addTab(tab)
}
</script>
<style scoped>
.sidebar {
  width: 250px;
  border-right: 1px solid #3c3c3c;
  background-color: var(--sidebar);
}

.sidebar-header {
  padding: 10px;
  font-size: 11px;
  font-weight: bold;
  color: #ccc;
}

.tittle1 {
  font-family: var(--font-title);
  font-size: 2.5rem;
  color: var(--tech-color);
}

.sidebar-content {
  padding: 8px;
}

.module-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
}

.module-icon {
  font-size: 16px;
}

.module-item:hover {
  background-color: var(--sidebar-active);
}
</style>
