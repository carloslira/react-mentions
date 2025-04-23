import Mui from './components/Mui';
import Default from './components/Default';
import Multiline from './components/Multiline';
import MuiMultiline from './components/MuiMultiline';
import CustomSuggestion from './components/CustomSuggestion';

const App = () => (
  <div style={{ width: 500, margin: '0 auto' }}>
    <Default />
    <Multiline />
    <Mui />
    <MuiMultiline />
    <CustomSuggestion />
  </div>
);

export default App;
