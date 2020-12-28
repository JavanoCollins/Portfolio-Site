<template>
    <div>
        <div class="container">
            <app-type-writer></app-type-writer>
        </div>
        <app-specializations></app-specializations>
        <app-languages></app-languages>
    </div>
</template>

<script>
import TypeWriter from "../components/TypeWriter.vue";
import Specializations from "../components/Specializations.vue";
import Languages from "../components/Languages.vue";

export default {
    components: {
        appTypeWriter: TypeWriter,
        appSpecializations: Specializations,
        appLanguages: Languages,
    },
};
</script>

<style scoped>

</style>