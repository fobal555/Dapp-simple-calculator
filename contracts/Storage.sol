// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;
contract Storage{
   
    function add(uint n, uint n2) public  pure  returns(uint){
        return n+n2;
    }
    function subs(int n,int n2)public pure returns(int){
        return n-n2;
    }
    function mul(uint n,uint n2)public pure returns(uint){
        return n*n2;
    }
   
    
}