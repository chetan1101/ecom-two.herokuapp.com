import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import ProductViewPage from './Pages/ProductViewPage';
import CartPage from './Pages/CartPage';
import Footer from './Components/Footer';
import SignInPage from './Pages/SignInPage';
import RegiserPage from './Pages/RegiserPage';
import ShippingPage from './Pages/ShippingPage';
import PaymentPage from './Pages/PaymentPage';
import ReviewOrderPage from './Pages/ReviewOrderPage';
import OrderDetailPage from './Pages/OrderDetailPage';


function App() {
  return (
    <BrowserRouter>
      <div >
        <Header />
        <main>
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/view-item/:name/:id" component={ProductViewPage} />
          <Route path='/cart/:id?' component={CartPage} />
          <Route path='/register' component={RegiserPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path='/shipping' component={ShippingPage} />
          <Route path='/payment' component={PaymentPage} />
          <Route path='/review-order' component={ReviewOrderPage} />
          <Route path='/order-detail/:id' component={OrderDetailPage} />
        </Switch>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App;
