import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Login,
  AboutUs,
  Home,
  Hardware,
  Pricing,
  Products,
  Learn,
  ContactUs,
  SecureCode,
  CodeVerified,
  TryForFree,
  YourCompany,
  RequestDemo,
  TermsOfService,
  Blog,
  BlogArticle,
  DataSecurity,
  Careers,
} from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <div className="overflow font-sans">
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/hardware" exact component={Hardware} />
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/products" exact component={Products} />
          <Route path="/learn" exact component={Learn} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/securecode" exact component={SecureCode} />
          <Route path="/codeverified" exact component={CodeVerified} />
          <Route path="/tryforfree" exact component={TryForFree} />
          <Route path="/yourcompany" exact component={YourCompany} />
          <Route path="/requestdemo" exact component={RequestDemo} />
          <Route path="/termsofservice" exact component={TermsOfService} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blogarticle" exact component={BlogArticle} />
          <Route path="/datasecurity" exact component={DataSecurity} />
          <Route path="/careers" exact component={Careers} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
