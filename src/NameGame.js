import React, { Component } from "react";
import NameGameContract from '../build/contracts/NameGame.json'
import getWeb3 from './utils/getWeb3'
 
class NameGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '', 
          nameValue: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        event.preventDefault();

        const contract = require('truffle-contract')
        const nameGame = contract(NameGameContract)
        nameGame.setProvider(this.state.web3.currentProvider)
    
        // Declaring this for later so we can chain functions on NameGame.
        var nameGameInstance
    
        // Get accounts.
        this.state.web3.eth.getAccounts((error, accounts) => {
          nameGame.deployed().then((instance) => {
            nameGameInstance = instance
    
            // Stores a given value, 5 by default.
            return nameGameInstance.interact(this.state.value, {from: accounts[0]})
          })
          .then((result) => {
            // Get the value from the contract to prove it worked.
            return nameGameInstance.currentName.call(accounts[0])
          }).then((result) => {
            const currentName = this.state.web3.toUtf8(result);
            console.log("result is" + currentName)
            // Update state with the result.
            return this.setState({ nameValue: currentName })
          })
        })
      }

      componentWillMount() {
        // Get network provider and web3 instance.
        // See utils/getWeb3 for more info.
    
        getWeb3
        .then(results => {
          this.setState({
            web3: results.web3
          })
        })
        .catch(() => {
          console.log('Error finding web3.')
        })
      }

      render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
            <label>The value stored on the blockchain is: </label>
            <label>{this.state.nameValue}</label>
          </div>
        );
      }
}
 
export default NameGame;