<template>
    <div>
        <div class="container">
            <app-type-writer></app-type-writer>
        </div>
        <app-specialize></app-specialize>
        <app-languages></app-languages>
        <app-banner></app-banner>
    </div>
</template>

<script>
import TypeWriter from "./TypeWriter.vue";
import Specialize from "./Specialize.vue";
import Languages from "./Languages.vue";
import Banner from "./Banner.vue";

export default {
    components: {
        appTypeWriter: TypeWriter,
        appSpecialize: Specialize,
        appLanguages: Languages,
        appBanner: Banner,
    },
};
</script>

<style scoped>

</style>