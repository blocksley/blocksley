import HeaderShell from 'components/HeaderShell'
import FooterShell from 'components/FooterShell'

export default async ({ app, store, Vue }) => {
  Vue.component('header-shell', HeaderShell)
  Vue.component('footer-shell', FooterShell)
}
