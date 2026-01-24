<template>
  <nav class="activity-bar">
    <div class="tech-icons">
      <button v-for="tech in visibleTechnologies" :key="tech.id"
        :class="['tech-button', { active: modelValue === tech.id }]" @click="handleClick(tech.id)">
        <img :src="tech.icon" :alt="tech.name" class="tech-icon" />
      </button>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { technologies } from '@/constants/technologies'

const visibleTechnologies = computed(() => technologies.filter((t) => t.id !== 'home'))

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const handleClick = (techId: string) => {
  emit('update:modelValue', props.modelValue === techId ? '' : techId)
}
</script>
<style scoped>
.activity-bar {
  display: flex;
  flex-direction: column;
  width: 48px;
  padding: 8px 0;
  background-color: var(--active-bar);
}

.tech-icons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tech-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  width: 48px;
  height: 48px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.tech-icon {
  width: 48px;
  height: 48px;
}

.tech-button:hover {
  background-color: var(--sidebar-active);
}

.tech-button.active {
  border-left: 2px solid var(--tech-color);
  background-color: var(--sidebar-active);
}
</style>
