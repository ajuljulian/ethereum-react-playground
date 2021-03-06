# Truffle and React Based Playground for Experimenting with Ethereum Smart Contracts
<p>This is a playground I use for experimenting with Ethereum smart contracts.</p>
<img src='images/react_truffle_playground_screenshot1.png' alt='Playground Screenshot'>
<p>I generated it using the 'react' truffle box <a href='http://truffleframework.com/boxes/react'>here</a></p>
<p>I also implemented routing using <a href='https://www.npmjs.com/package/react-router'>React Router</a> based on <a href='https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm'>this tutorial</a></p>
<p>The TicTacToe tab implements a tic-tac-toe game based on <a href='https://reactjs.org/tutorial/tutorial.html'>this tutorial</a></p>
<p>Compile the smart contracts by running 'truffle compile' in the project's root folder</p>
<p>The NameGame tab implements a form that sends a name to an Ethereum contract
implemented in Solidity and updates a label with the updated name from the contract.  You need to run this in Chrome or Firefox with the MetaMask plugin installed.  I'm pointing to a local blockchain using <a href='https://github.com/trufflesuite/ganache'>Ganache</a></p>
<img src='images/react_truffle_playground_screenshot2.png' alt='Name Game Screenshot'>
<p>Start the server by running 'npm run start' in the project's root folder</p>
