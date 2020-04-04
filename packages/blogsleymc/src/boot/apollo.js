import typeDefs from '../graphql/typedefs'
import resolvers from '../graphql/resolvers'

import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import { HttpLink } from 'apollo-link-http'
import { createHttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink, split } from 'apollo-link'
import { setContext } from 'apollo-link-context'
// New Imports
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
//
const STANDALONE = process.env.STANDALONE

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
    // fetchPolicy: 'cache-and-network',
    fetchPolicy: 'no-cache',
    errorPolicy: 'all'
  }
}

const cache = new InMemoryCache({
  // cacheRedirects: resolvers
})

cache.writeData({
  data: {
    allPosts: [
      {
        __typename: 'Item',
        id: 'dqdBHJGgjgjg',
        text: 'test',
        done: true
      }
    ]
  }
})

export default async ({ app, store, Vue }) => {
  let client = null
  if (STANDALONE) {
    client = createStandaloneClient()
  } else {
    client = createServerClient()
  }

  const apolloProvider = new VueApollo({
    defaultClient: client
  })

  Vue.use(VueApollo)
  app.apolloProvider = apolloProvider
  store.state.apolloProvider = apolloProvider
}

const createStandaloneClient = function () {
  const client = new ApolloClient({
    typeDefs,
    resolvers,
    cache
  })
  client.defaultOptions = defaultOptions
  return client
}

const createServerClient = function () {
  const serverUrl = process.env.SERVER_URL ? process.env.SERVER_URL : window.location.origin
  const httpLink = createHttpLink({
    uri: `${serverUrl}/graphql/`
  })

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('user-token')
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        // authorization: token ? `Bearer ${token}` : ''
        authorization: token
      }
    }
  })

  // Create the subscription websocket link
  const wsLink = new WebSocketLink({
    // uri: 'ws://localhost:3000/subscriptions',
    // uri: 'ws://localhost:5000/subscriptions',
    uri: 'ws://localhost:5000/graphql/',
    // `${serverUrl}/graphql/`
    options: {
      reconnect: true
    }
  })

  // using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent
  const splitLink = split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query)
      return definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
    },
    wsLink,
    httpLink
  )

  const link = ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        )
      }
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }),
    authLink.concat(splitLink)
  ])

  const client = new ApolloClient({
    // typeDefs,
    resolvers,
    link,
    // link: authLink.concat(httpLink),
    /*
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          )
        }
        if (networkError) console.log(`[Network error]: ${networkError}`)
      }),
      authLink.concat(httpLink)
    ]),
    */

    cache: new InMemoryCache(),
    connectToDevTools: true
  })

  client.defaultOptions = defaultOptions
  return client
}
