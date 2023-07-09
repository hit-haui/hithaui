import type { Contributor } from 'types'

export const useContributorsStore = defineStore('contributors', () => {
  const { $githubApi } = useNuxtApp()
  const contributors = ref<Contributor[]>([])

  const fetchContributors = async () => {
    const [contributorsBackend, contributorsFrontend] = await Promise.all(
      [
        $githubApi('/repos/hit-haui/hithaui-api/contributors'),
        $githubApi('/repos/hit-haui/hithaui/contributors'),
      ],
    )

    contributors.value = [...new Set([...contributorsFrontend, ...contributorsBackend].map((contributor: any) => {
      return JSON.stringify({
        name: contributor.login,
        avatar: contributor.avatar_url,
        github: contributor.html_url,
      } as Contributor)
    }))].map(contributorString => JSON.parse(contributorString))
  }

  return {
    contributors,
    fetchContributors,
  }
})
