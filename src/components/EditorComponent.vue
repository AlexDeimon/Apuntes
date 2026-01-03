<template>
  <div class="editor-container">
    <div class="editor-tabs">
      <div v-for="tab in openTabs" :key="tab.id" :class="['tab', { active: currentTab === tab.id }]"
        @click="switchTab(tab.id)">
        <img :src="getTechIcon(tab.techId)" :alt="tab.techId" class="tab-icon">
        <span class="tab-title">{{ tab.title }}</span>
        <button class="tab-close" @click.stop="closeTab(tab.id)">X</button>
      </div>
    </div>
    <div class="editor-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useEditorStore } from '@/stores/editor'
import { technologies } from '@/constants/technologies'
import { storeToRefs } from 'pinia'

const store = useEditorStore()
const { openTabs, currentTab } = storeToRefs(store)
const { switchTab, closeTab } = store

const getTechIcon = (techId: string) => {
  const tech = technologies.find(t => t.id === techId)
  return tech ? tech.icon : ''
}
</script>
<style scoped>
.editor-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  font-family: var(--font-normal);
  overflow: hidden;
}

.editor-tabs {
  display: flex;
  flex-wrap: nowrap;
  height: 40px;
  border-bottom: 1px solid #3c3c3c;
  background-color: var(--sidebar);
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.tab {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  box-sizing: border-box;
  align-items: center;
  padding: 0 15px;
  max-width: 200px;
  height: 100%;
  border-right: 1px solid #3c3c3c;
  background-color: var(--editor);
  cursor: pointer;
}

.tab-icon {
  width: 16px;
  height: 16px;
}

.tab-title {
  flex: 1;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tab-close {
  margin-left: 8px;
  padding: 0 4px;
  border: none;
  font-size: 16px;
  background: none;
  color: #fff;
  cursor: pointer;
}

.editor-content {
  flex: 1;
  overflow: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.tab.active {
  background-color: var(--sidebar-active);
  border-top: 2px solid #fff;
}

.tab-close:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
