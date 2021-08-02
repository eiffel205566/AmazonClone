import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

import store from './redux/store/index'
import { Provider } from 'react-redux'

const App = () => (
  <Provider store={store}>
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider>
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  </Provider>
)

export default App
