<template>
  <section>
    <h2 class="section-title">Referencias</h2>
    <ul class="reference-list">
      <li v-for="(ref, index) in references" :key="index" class="reference-item">
        <a href="#" @click.prevent="openReference(ref)" class="link-external">
          {{ ref.text || getModuleName(ref) }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/editor'
import { modules } from '@/constants/modules'

export interface Reference {
  text: string
  techId: string
  moduleId: string
}

defineProps<{
  references: Reference[]
}>()

const store = useEditorStore()

const getModuleName = (ref: Reference) => {
  const moduleList = modules[ref.techId]
  const module = moduleList?.find(m => m.id === ref.moduleId)
  return module?.name || 'Enlace desconocido'
}

const openReference = (ref: Reference) => {
  const moduleList = modules[ref.techId]
  const module = moduleList?.find(m => m.id === ref.moduleId)

  if (module) {
    store.addTab({
      id: `${ref.techId}-${ref.moduleId}`,
      title: module.name,
      route: `/${ref.techId}/${ref.moduleId}`,
      moduleId: ref.moduleId,
      techId: ref.techId
    })
  } else {
    console.warn(`Module not found: ${ref.techId}/${ref.moduleId}`)
  }
}
</script>

<style scoped>
.reference-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.reference-item {
  margin-bottom: 0.5rem;
}

.reference-item::before {
  content: "🔗";
  margin-right: 0.5rem;
}
</style>
