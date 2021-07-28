import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Head';
import Body from './components/Body';
import Footer from './components/Footer';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {  }

  

  render() { 
    const notify = () => toast("chào mừng bạn đến với shop của tôi, nếu thích thứ gì hãy liên hệ với tôi qua facebook để đạt hàng nhé");
    
    return ( 
     
     
      
      

      <div className="hidden-sn animated deep-purple-skin">
      <div>
      <div>{notify()}</div>
        <ToastContainer />
        <Header/>
      
      
        <Body/>
        <Footer/>
     </div>
    </div>

     );
  }
}
 
export default App;

