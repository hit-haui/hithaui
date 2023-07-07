<template>
  <aside class="sidebar">
    <div class="content">
      <ul class="menu">
        <li class="menu-item">
          <NuxtLink
            to="/dashboard"
            class="link"
          >
            <Icon
              name="uil:create-dashboard"
              class="icon"
            />
            <span class="ml-3">Dashboard</span>
          </NuxtLink>
        </li>
        <li
          class="menu-item"
        >
          <NuxtLink
            to="/dashboard/users"
            class="link"
          >
            <Icon
              name="uil:user"
              class="icon"
            />
            <span class="target">Users</span>
          </NuxtLink>
        </li>
        <li
          class="menu-item"
        >
          <NuxtLink
            to="/dashboard/documents"
            class="link"
          >
            <Icon
              name="uil:document-info"
              class="icon"
            />
            <span class="target">Documents</span>
          </NuxtLink>
        </li>
        <li
          class="menu-item"
        >
          <NuxtLink
            to="/dashboard/events"
            class="link"
          >
            <Icon
              name="uil:caret-right"
              class="icon"
            />
            <span class="target">Events</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  @apply fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200;

  > .content {
    @apply h-full px-3 pb-4 overflow-y-auto bg-white;
  }

  > .content > .menu {
    @apply space-y-2 font-medium;
  }

  > .content > .menu > .menu-item > .link {
    @apply flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100;
  }

  > .content > .menu > .menu-item > .link > .icon {
    @apply w-5 h-5 transition duration-75 text-orange-500;
  }

  > .content > .menu > .menu-item > .link > .target {
    @apply flex-1 ml-3 whitespace-nowrap
  }
}
</style>
