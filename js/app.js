// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"
import fetch from "isomorphic-fetch"
import DOM from 'react-dom'
import React, {Component} from 'react'

function app() {
    // start app
    // new Router()
        var AppView = React.createClass ({ 
        render: function() { 
       
    		return (
    			<div className="pageContainer">	

    				<img className="logo" src="http://i.imgur.com/iIdqZyR.png?1"></img>
	    			<Console/>
	    		</div>	
    		)
    	}
    })

        var Console = React.createClass ({

        	_forward: function() {
        		if (!this.state.ticking) {
            		var forwardYear = function() {
              			 this.setState({ 
                 		 year: this.state.year + 1,
                  		 forwardSymbol: "\u23f8", 
                  			ticking: true,                  
              			 })
           			}
          		var boundIncrementer = forwardYear.bind(this)
          		this.intervalId = setInterval(boundIncrementer,500)
        		}		

        		else {
          			clearInterval(this.intervalId)
          			this.setState({
            		forwardSymbol: '\u23E9',
            		ticking: false
          			})
        		}
        
      		},

      		_rewind: function() {
				if (!this.state.ticking) {
            		var rewindYear = function() {
              			 this.setState({ 
                 		 year: this.state.year - 1,
                  		 rewindSymbol: "\u23f8", 
                  			ticking: true,                  
              			 })
           			}
          		var boundIncrementer = rewindYear.bind(this)
          		this.intervalId = setInterval(boundIncrementer,500)
        		}		

        		else {
          			clearInterval(this.intervalId)
          			this.setState({
            		rewindSymbol: '\u23ea',
            		ticking: false
          			})
        		}

      		},

        	getInitialState: function() { 
        		return {
          			year: 2016,
          			forwardSymbol: "\u23E9",
          			rewindSymbol: "\u23ea", 
          			ticking: false
        		}
      		},

        	render: function() {
        		return (
        			<div className="console">
        				
        				<p className="year"><button className="rewindButton" onClick={this._rewind}>{this.state.rewindSymbol}</button>{this.state.year}<button className="forwardButton" onClick={this._forward}>{this.state.forwardSymbol}</button></p>
        			
        			</div>
        			)
        	}
        })
    DOM.render(<AppView/>, document.querySelector('.container'))
}

app()
