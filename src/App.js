import React from "react";
import App from './App.css';
import Slider from './slider.js';

let i=0;


class mainComponent extends React.Component {
  constructor(props) {
  super(props);
  this.state = {index:0}
  }

  handleSlide = () => {
      setInterval(this.handleIndex,5000);
  }
    
  handleIndex = () => {
    if(i<4) {
      this.setState({index:i});
      i++
    }
    else {
      i=0;
      this.setState({index:i});
      i++;
    }
  }

  render() {

    let people = `[
      {"id": "1","image":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg","name": "MARIA FERGUSON","title": "Office Manager","quote":"Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache."},
      {"id": "2","image":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg","name": "JOHN DOE","title": "Regular Guy","quote":"Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami."},
      {"id": "3","image":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg","name": "PETER SMITH","title": "Product Designer","quote":"Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo."},
      {"id": "4","image":"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg","name": "SUSAN ANDERSON","title": "The Boss","quote":"Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. "}
    ]`;

    let parsedPeople = JSON.parse(people);
    
    
    return(
      <div id='main' onLoad={this.handleSlide}>
        <div id='content'>
          {
            
            <Slider personImage={parsedPeople[this.state.index].image} personName={parsedPeople[this.state.index].name} personDesignation={parsedPeople[this.state.index].title} personDescription={parsedPeople[this.state.index].quote} />
            
          } 
        </div>
      </div>
    )
  }
}

export default mainComponent;


