import{Provider} from 'react-redux'
import store from './reduxContainer/Store';
import BookContainer from './reduxContainer/BookContainer';
function App() {
  return (
    <Provider store={store}>
    <BookContainer/>
    </Provider>
  );
}

export default App;
