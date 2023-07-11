<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

const updateGeneralInfoForm = reactive({
  name: user.value?.name,
  email: user.value?.email,
  studentCode: user.value?.studentCode,
  phone: user.value?.phone,
  address: user.value?.address,
  bio: user.value?.bio,
  class: user.value?.class,
  generation: user.value?.generation,
  dateOfBirth: formatDate(user.value?.dateOfBirth),
})
</script>

<template>
  <div class="general-info">
    <h3 class="title">
      General information
    </h3>
    <form class="form">
      <div class="form-item">
        <label for="name" class="label">Full Name</label>
        <input
          id="name"
          v-model="updateGeneralInfoForm.name"
          type="text"
          name="name"
          class="input"
        >
      </div>
      <div class="form-item">
        <label for="student-code" class="label">Student Code</label>
        <input
          id="student-code"
          v-model="updateGeneralInfoForm.studentCode"
          type="text"
          name="student-code"
          class="input"
        >
      </div>
      <div class="form-item">
        <label for="generation" class="label">Generation</label>
        <input
          id="generation"
          v-model="updateGeneralInfoForm.generation"
          type="text"
          name="generation"
          class="input"
        >
      </div>
      <div class="form-item">
        <label for="class" class="label">Class</label>
        <input
          id="class"
          v-model="updateGeneralInfoForm.class"
          name="class"
          class="input"
          placeholder="KTPM01"
        >
      </div>
      <div class="form-item">
        <label for="email" class="label">Email</label>
        <input
          id="email"
          v-model="updateGeneralInfoForm.email"
          type="email"
          name="email"
          class="input"
        >
      </div>
      <div class="form-item">
        <label for="phone-number" class="label">Phone Number</label>
        <input
          id="phone-number"
          v-model="updateGeneralInfoForm.phone"
          type="text"
          name="phone-number"
          class="input"
        >
      </div>
      <div class="form-item">
        <label for="birthday" class="label">Birthday</label>
        <input
          id="birthday"
          v-model="updateGeneralInfoForm.dateOfBirth"
          type="date"
          name="birthday"
          class="input"
        >
      </div>
      <div class="form-item">
        <label for="address" class="label">Address</label>
        <input
          id="address"
          v-model="updateGeneralInfoForm.address"
          type="text"
          name="address"
          class="input"
          placeholder="Yên Thành, Nghệ An"
        >
      </div>
      <div class="form-item -bio">
        <label for="bio" class="label">Bio</label>
        <textarea
          id="bio"
          v-model="updateGeneralInfoForm.bio"
          rows="2"
          class="textarea"
          placeholder="Write your bio here..."
        />
      </div>
      <div class="form-item -action">
        <button class="button" type="button">
          Save all
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.general-info {
  > .title {
    @apply mb-4 text-xl font-semibold;
  }

  > .form {
    @apply grid grid-cols-6 gap-6;

    > .form-item {
      @apply col-span-6 sm:col-span-3;
    }

    > .form-item.-action {
      @apply sm:col-span-full text-right;
    }

    > .form-item.-bio {
      @apply sm:col-span-6;
    }

    > .form-item > .label {
      @apply block mb-2 text-sm font-medium text-gray-900;
    }
    > .form-item > .input {
      @apply shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 focus:outline-amber-500 block w-full p-2.5;
    }

    > .form-item > .textarea {
      @apply block px-2.5 py-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-amber-500;
    }

    > .form-item > .button {
      @apply text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center;
    }
  }
}
</style>
