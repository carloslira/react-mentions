import Mui from './components/Mui';
import Default from './components/Default';
import Multiline from './components/Multiline';
import MuiMultiline from './components/MuiMultiline';

const App = () => (
  <div style={{ width: 500, margin: '0 auto' }}>
    <Default />
    <Multiline />
    <Mui />
    <MuiMultiline />
  </div>
);

export default App;
