<template>
    <div class="code-block-container">
        <div class="code-header">
            <span class="language-label">{{ language }}</span>
            <button @click="copyToClipboard" class="copy-btn">
                <span v-if="copied">¡Copiado!</span>
                <span v-else>Copiar</span>
            </button>
        </div>
        <pre class="code-content"><code :class="language">{{ code }}</code></pre>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    code: string
    language?: string
}>()

const copied = ref(false)

const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(props.code)
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 2000)
    } catch (err) {
        console.error('Failed to copy: ', err)
    }
}
</script>

<style scoped>
.code-block-container {
    background-color: #1e1e1e;
    border-radius: 8px;
    border: 1px solid #333;
    margin: 1.5rem 0;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.code-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background-color: #252526;
    border-bottom: 1px solid #333;
}

.language-label {
    color: #9cdcfe;
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
}

.copy-btn {
    background: transparent;
    border: 1px solid #444;
    color: #d4d4d4;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.8rem;
    transition: all 0.2s ease;
}

.copy-btn:hover {
    background-color: #333;
    border-color: #666;
}

.code-content {
    margin: 0;
    padding: 1.5rem;
    overflow-x: auto;
    font-family: 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
    font-size: 0.9rem;
    line-height: 1.5;
    color: #d4d4d4;
    background-color: #1e1e1e;
}

code {
    font-family: inherit;
}
</style>
