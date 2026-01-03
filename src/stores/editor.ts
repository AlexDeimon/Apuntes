import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { Tab } from '@/constants/editor'

export const useEditorStore = defineStore('editor', () => {
  const router = useRouter()
  const openTabs = ref<Tab[]>([])
  const currentTab = ref<string>('')
  const selectedTech = ref<string>('')

  const addTab = (tab: Tab) => {
    if (!openTabs.value.find((t) => t.id === tab.id)) {
      openTabs.value.push(tab)
    }
    currentTab.value = tab.id
    selectedTech.value = tab.techId
    router.push(tab.route)
  }

  const switchTab = (tabId: string) => {
    const tab = openTabs.value.find((t) => t.id === tabId)
    if (tab) {
      currentTab.value = tabId
      selectedTech.value = tab.techId
      router.push(tab.route)
    }
  }

  const closeTab = (tabId: string) => {
    const index = openTabs.value.findIndex((t) => t.id === tabId)
    if (index > -1) {
      openTabs.value.splice(index, 1)
      if (currentTab.value === tabId) {
        // Determine next tab: try right, then left, else nothing
        const nextTab = openTabs.value[index] || openTabs.value[index - 1]
        if (nextTab) {
          switchTab(nextTab.id)
        } else {
          currentTab.value = ''
          router.push('/')
        }
      }
    }
  }

  // Syncs active tab state with URL without pushing a new history entry
  // Returns true if a matching tab was found and activated
  const syncTabFromRoute = (path: string): boolean => {
    const foundTab = openTabs.value.find((t) => t.route === path)
    if (foundTab) {
      currentTab.value = foundTab.id
      selectedTech.value = foundTab.techId
      return true
    }
    return false
  }

  const clearActiveTab = () => {
    currentTab.value = ''
  }

  return {
    openTabs,
    currentTab,
    selectedTech,
    addTab,
    switchTab,
    closeTab,
    syncTabFromRoute,
    clearActiveTab,
  }
})
