import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import { ApolloProvider } from "@apollo/client"
import { client } from "./lib/apollo"


function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  )
}

export default App
