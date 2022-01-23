        var contract = new web3.eth.Contract(
[
    {
	"inputs": [],
	"stateMutability": "nonpayable",
	"type": "constructor"
	},
    {
	"inputs": [],
	"name": "amount",
	"outputs": [
	    {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		}
	    ],
	"stateMutability": "view",
	"type": "function"
	},
    {
	"inputs": [
	    {
		"internalType": "address",
		"name": "recipient",
		"type": "address"
		}
	    ],
	"name": "claimTrolls",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
	},
    {
	"inputs": [
	    {
		"internalType": "address",
		"name": "",
		"type": "address"
		}
	    ],
	"name": "lockTime",
	"outputs": [
	    {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
		}
	    ],
	"stateMutability": "view",
	"type": "function"
	},
    {
	"inputs": [],
	"name": "name",
	"outputs": [
	    {
		"internalType": "string",
		"name": "",
		"type": "string"
		}
	    ],
	"stateMutability": "view",
	"type": "function"
	},
    {
	"inputs": [],
	"name": "trolls",
	"outputs": [
	    {
		"internalType": "address",
		"name": "",
		"type": "address"
		}
	    ],
	"stateMutability": "view",
	"type": "function"
	}
], "0xF4AFF74380234FE4cb24A4bA609970eDdEbb8781");
