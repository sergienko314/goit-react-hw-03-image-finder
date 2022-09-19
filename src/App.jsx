import Searchbar from "components/Searchbar";
import ImageGallery from "components/ImageGallery";

import { Component } from "react";



class App extends Component {
  state = {} 
  
  onSubmit = (input) => {
    console.log( `MY input: ${input}`);
  }
  
  render() { 
    return (
    <div
      style={{
        height: '100vh',
          display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery/>
    </div>
  );
  }
}
 
export default App;

