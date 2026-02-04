export const getFreshLoginParams = () => {
  const urlParams = new URLSearchParams(window.location.search)

  const error = urlParams.get('error')
  const errorDescription = urlParams.get('error_description')
  const loginToken = urlParams.get('loginToken')
  const homeserver = urlParams.get('homeserver')

  const freshLoginParams = {
    error,
    errorDescription,
    loginToken,
    homeserver
  }

  return freshLoginParams
}

export const isFreshLogin = ({ freshLoginParams }) => {
  return freshLoginParams.loginToken && freshLoginParams.homeserver
}

export const buildFreshLoginUrl = ({ freshLoginParams, appUrl }) => {
  const authUrl = new URL('/web/auth.html', appUrl.origin)
  authUrl.searchParams.set('loginToken', freshLoginParams.loginToken)
  authUrl.searchParams.set('homeserver', freshLoginParams.homeserver)
  return authUrl.toString()
}

export const cleanFreshLoginUrl = () => {
  const url = new URL(window.location.href)
  url.searchParams.delete('loginToken')
  url.searchParams.delete('homeserver')
  window.history.replaceState({}, '', url.toString())
}
