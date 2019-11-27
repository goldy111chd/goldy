import React from 'react';
import {Link} from "react-router-dom";
export default function Header(){
return (
<header class="bg-light">
<div class="container">
 <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
 <ul class="navbar-nav mr-left-auto">
 <li class="nav-item"><a class="nav-link"><Link to="/crudsystem">CRUDSystem</Link></a></li>
 <li class="nav-item"><a class="nav-link"><Link to="/updateitem">Update Item</Link></a></li>
 <li class="nav-item"><a class="nav-link"><Link to="/removeitem">Remove Item</Link></a></li>
 <li class="nav-item"><a class="nav-link"><Link to="/apidatashow">API Data Show</Link></a></li>
 <li class="nav-item"><a class="nav-link"><Link to="/component">Component</Link></a></li>
 <li class="nav-item"><a class="nav-link"><Link to="/classcomponent">Class Component</Link></a></li>
 </ul>
  </div>
</nav>
 </div>
 </header>
 
);
}
