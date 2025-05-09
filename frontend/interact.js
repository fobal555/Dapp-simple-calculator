const provider = ethers.getDefaultProvider("http://127.0.0.1:7545");

const contractABI= [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "n",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "n2",
          "type": "uint256"
        }
      ],
      "name": "add",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "n",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "n2",
          "type": "uint256"
        }
      ],
      "name": "mul",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "n",
          "type": "int256"
        },
        {
          "internalType": "int256",
          "name": "n2",
          "type": "int256"
        }
      ],
      "name": "subs",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    }
  ];
  const contractaddress="0x61d6A466E5741863f94d55dd523C08196FBda08D";
  const privatekey="0x7f86e5b639af1c7d5d5e971a06f4b0dd27196947afa6508955d12f285a53aed3";
  const wallet=new ethers.Wallet(privatekey);
  const signer=wallet.connect(provider);
  const Storage= new ethers.Contract(contractaddress,contractABI,signer);
  async function add(n1,n2){
    console.log("working");
    const sum=await Storage.add(n1,n2);
    document.getElementById("output").value=sum;
  }
   async function sub(n1,n2){
    console.log("sub working");
    const sub=await Storage.subs(n1,n2);
    document.getElementById("output").value=sub;
  }

   async function mul(n1,n2){
    console.log("mulworking");
    const mul=await Storage.mul(n1,n2);
    document.getElementById("output").value=mul;
  }
   


  document.getElementById("add").addEventListener("click",function(){
    const n1=document.getElementById("n1").value;
    const n2=document.getElementById("n2").value;
    add(n1,n2);
  })
  
  document.getElementById("sub").addEventListener("click",function(){
    const n1=document.getElementById("n1").value;
    const n2=document.getElementById("n2").value;
    sub(n1,n2);
  })

  
  document.getElementById("mul").addEventListener("click",function(){
    const n1=document.getElementById("n1").value;
    const n2=document.getElementById("n2").value;
    mul(n1,n2);
  })



  