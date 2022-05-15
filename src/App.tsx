
import { QueryClient, QueryClientProvider } from 'react-query';

import { RouterApp } from './routers'

const queryClient = new QueryClient({ defaultOptions: {} });

function App() {

  return (
    <>
      <QueryClientProvider contextSharing={true} client={queryClient}>
        <RouterApp />
      </QueryClientProvider>
    </>
  )
}

export default App
