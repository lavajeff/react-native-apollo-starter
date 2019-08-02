import React, { Component } from "react";
import { AppRegistry, ActivityIndicator } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { name as appName } from "./app.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      client: null,
      isLoading: true
    };
  }

  async componentDidMount() {
    try {
      const cache = new InMemoryCache();
      const httpLink = new HttpLink({
        uri: "https://graphql-pokemon.now.sh/graphql"
      });
      const apolloClient = new ApolloClient({
        link: httpLink,
        cache
      });
      this.setState({ client: apolloClient, isLoading: false });
    } catch (err) {}
  }

  render() {
    const { client, isLoading } = this.state;
    if (isLoading) {
      return <ActivityIndicator />;
    }
    return (
      <ApolloProvider client={client}>
        <AppNavigator />
      </ApolloProvider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);
