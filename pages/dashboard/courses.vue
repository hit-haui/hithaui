<script setup lang="ts">
const isVisibleDrawer = ref(false)

function openCourseDrawer() {
  isVisibleDrawer.value = true
}

function closeCourseDrawer() {
  isVisibleDrawer.value = false
}
</script>

<template>
  <div class="courses-management-page">
    <header class="header">
      <h2 class="title">
        Ours Courses
      </h2>
    </header>
    <div class="speed-dial">
      <CoursesSpeedDial @open-course-drawer="openCourseDrawer" />
    </div>
    <AppDrawer
      title="New course"
      :is-visible="isVisibleDrawer"
      @close-drawer="closeCourseDrawer"
    >
      <form class="course-form">
        <div class="form-item">
          <label for="name" class="label">Name</label>
          <input id="name" type="text" class="input">
        </div>
        <div class="form-item">
          <label for="name" class="label">Start time</label>
          <input id="name" type="date" class="input">
        </div>
        <div class="form-item">
          <label for="name" class="label">End time</label>
          <input id="name" type="date" class="input">
        </div>
        <div class="form-item">
          <label for="description" class="label">Description</label>
          <textarea id="description" rows="4" class="input" />
        </div>
        <div class="form-item">
          <label class="label">Image Cover</label>
          <div class="file-upload">
            <label
              for="image-cover"
              class="dropzone"
            >
              <div class="content">
                <Icon name="uil:cloud-upload" class="icon" />
                <p class="description">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="extra">
                  PNG, JPG or JPEG (MAX. 800x400px)
                </p>
              </div>
              <input id="image-cover" type="file" class="input">
            </label>
          </div>
        </div>
        <div class="form-item -actions">
          <button type="button" class="cancel-button">
            Cancel
          </button>
          <button type="button" class="submit-button">
            Save
          </button>
        </div>
      </form>
    </AppDrawer>
  </div>
</template>

<style lang="scss" scoped>
.courses-management-page {
  > .header {
    @apply p-4;

    > .title {
      @apply text-lg font-semibold text-left text-gray-900;
    }

    > .description {
      @apply mt-1 text-sm font-normal text-gray-500;
    }
  }
}

.course-form {
  @apply mb-4;

  > .form-item {
    @apply mb-4;
  }

  > .form-item.-actions {
    @apply text-right;
  }

  > .form-item > .file-upload {
    @apply flex items-center justify-center w-full;

    > .dropzone {
      @apply flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100;
    }

    > .dropzone > .content {
      @apply flex flex-col items-center justify-center pt-5 pb-6;
    }

    > .dropzone > .content > .icon {
      @apply w-8 h-8 mb-2 text-gray-500;
    }

    > .dropzone > .content > .description {
      @apply mb-2 text-sm text-gray-500;
    }

    > .dropzone > .content > .extra {
      @apply text-xs text-gray-500;
    }

    > .dropzone > .input {
      @apply hidden;
    }
  }

  > .form-item > .input {
    @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 focus:outline-primary-500 block w-full p-2.5;
  }

  > .form-item > .label {
    @apply block mb-2 text-sm font-medium text-gray-900;
  }

  > .form-item > .submit-button {
    @apply text-white bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none ml-2;
  }
  > .form-item > .cancel-button {
    @apply text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 px-5 py-2.5 text-sm font-medium rounded-lg;
  }
}
</style>
