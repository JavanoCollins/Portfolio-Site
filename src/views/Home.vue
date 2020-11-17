<template>
    <div>
        <div class="container">
            <app-type-writer></app-type-writer>
        </div>
        <app-specialize></app-specialize>
        <app-languages></app-languages>
    </div>
</template>

<script>
import TypeWriter from "../components/TypeWriter.vue";
import Specialize from "../components/Specialize.vue";
import Languages from "../components/Languages.vue";

export default {
    components: {
        appTypeWriter: TypeWriter,
        appSpecialize: Specialize,
        appLanguages: Languages,
    },
};
</script>

<style scoped>

</style>