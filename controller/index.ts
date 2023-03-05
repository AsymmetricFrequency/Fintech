import * as SecureStore from 'expo-secure-store';
import * as solanaWeb3 from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

import { fetch as fetchPolyfill } from 'whatwg-fetch'
import base64 from 'react-native-base64'

global.fetch = fetchPolyfill

//Function Saved nameUser 
async function saveNameUser(data: string){
    try {
        console.log(await SecureStore.setItemAsync('storageNameUser', data));
    } catch (e) {
        console.log(e);
    }
}

//Read nameUser 
async function readNameUser(){
    //Get Key
    try {
        const key = await SecureStore.getItemAsync('storageNameUser')
        return key 
    } catch (e) { 
        console.log(e);
    }
}
//Function Saved Password 
async function savePassword(data: any){
    try {
        console.log(await SecureStore.setItemAsync('storagePassword', data));
    } catch (e) {
        console.log(e);
    }
}

//Read Password 
async function readPassword(){
    //Get Key
    try {
        const key = await SecureStore.getItemAsync('storagePassword')
        return key 
    } catch (e) { 
        console.log(e);
    }
}

//Function Saved Mnemonic
async function saveMmemonic(data: any){
    try {
        console.log(await SecureStore.setItemAsync('storageMnemonic', data));
    } catch (e) {
        console.log(e);
    }
}

//Read Mnemonic
async function readMnemonic(){
    //Get Key
    try {
        const key = await SecureStore.getItemAsync('storageMnemonic')
        return key 
    } catch (e) { 
        console.log(e);
    }
}

//Function save PublicKey
async function savePublicKey(data: any){
    try {
        console.log(await SecureStore.setItemAsync('storagePublicKey', data));
    } catch (e) {
        console.log(e);
    }
}

//Read PublicKey
async function readPublicKey(){
    //Get Key
    try {
        const key = await SecureStore.getItemAsync('storagePublicKey')
        return key 
    } catch (e) { 
        console.log(e);
    }
}

//Function save PrivateKey
async function savePrivateKey(data: any){
    try {
        console.log(await SecureStore.setItemAsync('storagePrivateKey', data));
    } catch (e) {
        console.log(e);
    }
}

//Read PrivateKey
async function readPrivateKey(){
    //Get Key
    try {
        const key = await SecureStore.getItemAsync('storagePrivateKey')
        return key 
    } catch (e) { 
        console.log(e);
    }
}

//Function Save Phone
async function savePhone(data: any){
    try {
        console.log(await SecureStore.setItemAsync('storagePhone', data));
    } catch (e) {
        console.log(e);
    }
}

//Read Phone
async function readPhone(){
    //Get Key
    try {
        const phone = await SecureStore.getItemAsync('storagePhone')
        return phone 
    } catch (e) { 
        console.log(e);
    }
}

async function getSPLHistory(account: string, limit: number) {
    var transactionss : any = []
    const USDTLamports = 1000000
    const response = await fetch(`https://public-api.solscan.io/account/splTransfers?account=${account}&offset=0&limit=${limit}`)
    const transactions = await response.json();

    for (let i = 0; i < limit; i++) {
        if (Number(transactions.data[i].changeAmount)/USDTLamports > 0) {
          const obj = {id: i,confirmation: 'Recibe', signature: transactions.data[i].signature[0], amount: Number(transactions.data[i].changeAmount)/USDTLamports}
          transactionss.push(obj)
        } else {
          const obj = {id: i,confirmation: 'Envia', signature: transactions.data[i].signature[0], amount: Number(transactions.data[i].changeAmount)/USDTLamports}
          transactionss.push(obj)
        }
    }
    return transactionss
}

async function getSolHistory(publicKey: string, limit: number) {
    var transactionss : any = []
    const solanaLamports = 1000000000
    const response = await fetch(`https://public-api.solscan.io/account/solTransfers?account=uja3w9XG1g6DQSVT6YASK99FVmdVwXoHVoQEgtEJdLv&offset=0&limit=${limit}`)
    const transactions = await response.json();
    for (let i = 0; i < limit; i++) {
        if (transactions.data[i].src == publicKey) {
            const obj = {id: i, confirmation: 'Envia', signature: transactions.data[i].txHash, amount: Number(transactions.data[i].lamport)/solanaLamports}
            transactionss.push(obj);
        } else {
            const obj = {id: i, confirmation: 'Recibe', signature: transactions.data[i].txHash, amount: Number(transactions.data[i].lamport)/solanaLamports}
            transactionss.push(obj);
        }
    }
    return transactionss
}

async function getPrices() {
    const solana = await fetch(`https://public-api.birdeye.so/public/price?address=So11111111111111111111111111111111111111112`)
    const solanaResponse = await solana.json()
    const solanaPrice = solanaResponse.data.value
    
    const ether = await fetch(`https://public-api.birdeye.so/public/price?address=2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk`)
    const etherResponse = await ether.json()
    const etherPrice = etherResponse.data.value

    const prices = {
        "solana" : solanaPrice,
        "ethereum" : etherPrice
    }
    console.log(prices);
    
    return prices
}

////////////////////////////////////////////////////////////
//  Funciones de Solana-web3 para la creacion de cuentas  //
////  obtener el balance y transferir SOL y SPL Tokens  ////
////////////////////////////////////////////////////////////

//crear cuenta
async function keypair() {
    const response = await fetch(`https://genesyswallet.com/api/keypair`)
    const keypair = await response.json()
    savePublicKey(keypair.public_key)
    savePrivateKey(keypair.secret_key)
    return keypair
}

async function getBalanceSol(publicKey: string) {
    const response = await fetch(`https://genesyswallet.com/api/getSolBalance/${publicKey}`)
    const balance = await response.json()
    return balance
}

async function getBalanceCOP(publicKey: string) {
    const response = await fetch(`https://genesyswallet.com/api/getBalanceSPL/${publicKey}/8HVNzVijeQvd9wj6n2M1JonN2AS6Xvyq9MsJsVsYofLs`)
    const balance = await response.json()
    return balance
}

async function getBalanceToken(publicKey: string, mint: string) {
    const response = await fetch(`https://genesyswallet.com/api/getBalanceSPL/${publicKey}/${mint}`)
    const balance = await response.json()
    return balance
}

async function sendSol(secretKey:string, toPublic:string, amount:number) {
    try {
        
        const response = await fetch('https://genesyswallet.com/api/sendSol', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                secretKey:secretKey,
                toPublicKey:toPublic,
                amount:amount
            })
          })
    
        const json = await response.text()
        console.log(json)
        return json

    } catch (error) {
        console.log(error)
    } 
}

async function sendSPL(secretKey:string, toPublic:string, amount:number, mint:string) {

    try {
        
        const response = await fetch('https://genesyswallet.com/api/sendTokens', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                secretKey:secretKey,
                toPublicKey:toPublic,
                amount:amount,
                mint:mint,
            })
          })
    
        const json = await response.text()
        console.log(json)
        return json

    } catch (error) {
        console.log(error)
    }  

}

//Crear Info
async function saveInfoUser(phone:string, password:string, email:string, name:string, cc:string, expDate:string, publicKey:string, secretKey:string) {

    try {
        
        const response = await fetch('https://genesyswallet.com/dbhandler/saveInfoUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone:phone,
                password:password,
                email:email,
                name:name,
                cedula:cc,
                expDate:expDate,
                publicKey: publicKey,
                secretKey: secretKey
            })
          })
    
        const json = await response.text()
        console.log(json)
        return json

    } catch (error) {
        console.log(error)
    }  
}


//get info from db
  //db functions

  async function getInfoUserPass(tel:string) {
    try {

        const response = await fetch(`https://genesyswallet.com/dbhandler/getInfoUser/${tel}`);
        const info = await response.json();

        return base64.decode(info.password)
        
    } catch (error) {
        return error
    }
  } 

  async function getInfoUser(tel:string) {
    try {

        const response = await fetch(`https://genesyswallet.com/dbhandler/getInfoUser/${tel}`);
        const balance = await response.json();

        return balance
        
    } catch (error) {
        return error
    }
  } 

async function saveTransaction(id: string, transactionType: string, phone: string, amount: string, message: string, transactionLink: string, date: string) {
    
    try {
        
        const response = await fetch('https://genesyswallet.com/dbhandler/saveTransaction', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id:id,
                transactionType:transactionType,
                phone:phone,
                amount:amount,
                message:message,
                transactionLink:transactionLink,
                date:date
            })
          })
    
        const json = await response.text()
        console.log(json)
        return json

    } catch (error) {
        console.log(error)
    }  

} 

//recover pass with email

async function recoverPassword(tel:string) {
    try {

        const response = await fetch(`https://genesyswallet.com/email/${tel}`);
        const balance = await response.json();
    
        console.log("recover pass for the #: " + tel);
    
    
        return balance

    } catch (error) {
        return error
    }
}

async function historyTransactions(phone : string) {
    try {
        const response = await fetch(`https://genesyswallet.com/dbhandler/getInfoUser/${phone}`);
        const history = await response.json()
        
        return history.transactions

    } catch (error) {
        console.log(error); 
    }
    
}


export {
    getInfoUserPass,
    recoverPassword,
    getInfoUser,
    saveMmemonic,
    readMnemonic,
    savePassword,
    readPassword,
    getSPLHistory,
    getSolHistory,
    saveNameUser,
    readNameUser,
    keypair,
    readPrivateKey,
    readPublicKey,
    getPrices,
    getBalanceCOP,
    sendSPL,
    saveInfoUser,
    savePhone,
    readPhone,
    savePublicKey,
    savePrivateKey,
    saveTransaction,
    historyTransactions,
    getBalanceSol,
    getBalanceToken,
    sendSol
}