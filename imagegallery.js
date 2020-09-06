
import React, { Component } from 'react';
import bar from '../pics/bar.jpg';
import train from '../pics/train.jpg';
import meetup from '../pics/meetup.jpg';
import touchface from '../pics/touchface.gif';
import restaurant from '../pics/restaurant.jpg';
import walking from '../pics/walking.jpg'

class Main extends Component {   


    state = {
        index: 0, 
        picList: [bar, train, meetup, touchface, restaurant, walking]
      }
      
      onClickNext= () => {
          if (this.state.index + 1 === this.state.picList.length ){
              this.setState({ 
                  index: 0 
                })
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }

          }
          onClickPrevious= () => {
            if (this.state.index - 1 === -1 ){
                this.setState({ 
                    index: this.state.picList.length - 1
                  })
              } else {
                  this.setState({
                      index: this.state.index - 1
                  })
              }
            }
      
      render() {
        return (
          <div>
            <img src={this.state.picList[this.state.index]} style={{"maxHeight":"40%","maxWidth":"40%"}} /> <br/>
            <button style={{"fontSize":"18px"}} onClick={this.onClickPrevious}> Previous </button>
            <button style={{"margin-left":"5px", "fontSize":"18px"}} onClick={this.onClickNext}> Next </button>
          </div>
        );
      }

}


export default Main;
