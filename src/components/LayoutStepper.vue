<template>
    <div class="scale-container">
        <div id="app">
            <span class="spacer" />
            <div id="header-outer">
                <div id="header-inner">
                    <Header />
                </div>
            </div>
            <div id="middle">
                <router-view />
                <div id="preview">
                    <div id="preview-content">
                        <Preview />
                    </div>

                    <div id="preview-button-bar">
                        <DownloadButton v-if="isNotFinish" />
                    </div>
                </div>
            </div>
            <div id="footer-outer">
                <div id="footer-inner">
                    <Footer />
                </div>
            </div>
            <span class="spacer" />
        </div>
    </div>
</template>

<script lang="ts">
import Header from 'components/Header.vue'
import Preview from 'components/Preview.vue'
import DownloadButton from 'components/DownloadButton.vue'
import Footer from 'components/Footer.vue'
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'StepperLayout',
    components: {
        Header,
        Preview,
        DownloadButton,
        Footer
    },
    setup () {
        return {
            isNotFinish: computed(() => {
                const currentPath = useRoute().path
                return currentPath !== '/finish-minimum' && currentPath !== '/finish-advanced'
            })
        }
    }
})
</script>
<style scoped>
.spacer {
    flex-grow: 1.0;
}
</style>
