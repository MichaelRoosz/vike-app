import { createSSRApp, defineAsyncComponent, defineComponent, h } from 'vue'
import PageShell from './PageShell.vue'
import { setPageContext } from './usePageContext'
import type { PageContext } from 'vike/types'
import type { Component, PageProps } from './types'

export { createApp }

function createApp(Page: Component, pageProps: PageProps | undefined, pageContext: PageContext) {
  const PageWithLayout = defineComponent({
    render() {
      return h(
        PageShell,
        {},
        {
          default() {
            return h(Page, pageProps || {})
          }
        }
      )
    }
  })

  const app = createSSRApp(PageWithLayout)

  app.component('Test1', defineAsyncComponent(() =>
    import('./Test1.vue')
  ));

  app.component('Test2', defineAsyncComponent(() =>
    import('./Test2.vue')
  ));

  // Make pageContext available from any Vue component
  setPageContext(app, pageContext)

  return app
}
