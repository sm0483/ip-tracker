import Details from './comp/Details';
import Head from './comp/Head';
import Map from './comp/Map';
import { LocationProvider } from './comp/Context/LocationContext';

function App() {
  return (
    <section>
      <LocationProvider>
          <Head/>
          <Details/>
          <Map/>
      </LocationProvider>
    </section>
  );
}

export default App;
