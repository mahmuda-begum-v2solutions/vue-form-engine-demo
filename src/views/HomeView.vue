<script setup lang="ts">
import { ref } from 'vue'

import genericPageHeader from '@/jsons/test/genericPageHeader.json'
import genericFormSectionHeader from '@/jsons/test/genericFormSectionHeader.json'
import genericFormFields from '@/jsons/test/genericFormFields.json'
import genericActionButtons from '@/jsons/test/genericActionButtons.json'

const genericPageHeaderProp = ref(genericPageHeader)
const genericFormSectionHeaderProp = ref(genericFormSectionHeader)
const genericFormFieldsProp = ref(genericFormFields)
const genericActionButtonsProp = ref(genericActionButtons)


const handleFormSubmit = (event: any) => {
  const formData = event.detail[0];
  console.log('Received form data from FormEngine:', formData);
  console.log("name test", formData.fullName)
}
</script>

<template>
  <main class="min-h-screen w-full flex justify-center items-center p-4">
    <div
      class="max-w-7xl w-full h-[70vh] sm:h-screen overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-[#596373] scrollbar-track-transparent">
      <!-- Passing the props to FormEngine component -->
      <form-engine :genericPageHeader.prop="genericPageHeaderProp"
        :genericFormSectionHeader.prop="genericFormSectionHeaderProp" :genericFormFields.prop="genericFormFieldsProp"
        :genericActionButtons.prop="genericActionButtonsProp" @submit="handleFormSubmit" />
    </div>
  </main>
</template>

<style scoped>
/* WebKit Browsers custom scrollbar styles */
.scrollbar-thin::-webkit-scrollbar {
  height: 0.375rem;
  /* 6px */
  width: 0.375rem;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: #596373;
  border-radius: 0.25rem;
  /* 4px */
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background-color: #596373;
}
</style>
