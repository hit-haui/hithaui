import type { Contributor } from 'types'

export const useContributorsStore = defineStore('contributors', () => {
  const { $githubApi } = useNuxtApp()
  const contributors = ref<Contributor[]>([])

  const fetchContributors = async () => {
    const [
      contributorsBackend,
      contributorsFrontend,
      commitsBackend,
      commitsFrontend,
    ] = await Promise.all([
      $githubApi('/repos/hit-haui/hithaui-api/contributors'),
      $githubApi('/repos/hit-haui/hithaui/contributors'),
      $githubApi('/repos/hit-haui/hithaui-api/stats/contributors'),
      $githubApi('/repos/hit-haui/hithaui/stats/contributors'),
    ])

    const commitsByContributor = [...commitsFrontend, ...commitsBackend].reduce(
      (result, commit) => {
        const {
          total,
          author: { login: name },
        } = commit

        if (result[name])
          result[name] += total
        else
          result[name] = total

        return result
      },
      {},
    )

    contributors.value = [
      ...new Set(
        [...contributorsFrontend, ...contributorsBackend].map(
          (contributor: any) => {
            return JSON.stringify({
              name: contributor.login,
              avatar: contributor.avatar_url,
              github: contributor.html_url,
              commits: commitsByContributor[contributor.login],
            } as Contributor)
          },
        ),
      ),
    ].map(contributorString => JSON.parse(contributorString))
  }

  return {
    contributors,
    fetchContributors,
  }
})
