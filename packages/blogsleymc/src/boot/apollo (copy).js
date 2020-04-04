import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'

import typeDefs from '../graphql/typedefs'
import resolvers from '../graphql/resolvers'

const cache = new InMemoryCache()

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'ignore'
  },
  query: {
    // fetchPolicy: 'network-only',
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all'
  },
  mutate: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all'
  }
}

// "async" is optional
export default async ({ app, store, Vue }) => {
  const client = new ApolloClient({
    cache,
    typeDefs,
    resolvers,
    uri: process.env.SERVER_URL + '/graphql/',
    fetchOptions: {
      credentials: 'include'
    },
    request: async (operation) => {
      const token = await localStorage.getItem('user-token')
      operation.setContext({
        headers: {
          authorization: token
        }
      })
    },
    onError: ({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        console.log(graphQLErrors)
      }
      if (networkError) {
        console.log(networkError)
      }
    }
  })
  client.defaultOptions = defaultOptions

  const apolloProvider = new VueApollo({
    defaultClient: client
  })
  Vue.use(VueApollo)
  app.apolloProvider = apolloProvider
  store.state.apolloProvider = apolloProvider
}
