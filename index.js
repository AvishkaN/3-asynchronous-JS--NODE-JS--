//CALLBACK HELL

const fs=require('fs');
const { readFile } = require('fs/promises');
const superagent=require('superagent');

// fs.readFile('./dog.txt',(err,data)=>{
//     superagent
//         .get(`https://dog.ceo/api/breed/${data}/images/random`)
//         .end((err,data)=>{
//             console.log(data.body.message);

//             fs.writeFile('dog-img.txt',data.body.message,()=>{
//                 console.log('file writted');
//             })
//         })
// })    


// building promises

const readFilePro=file=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(file,(err,data)=>{
            resolve(data);
        })
    });
};


const writeFilePro=(file,data)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(file,data,err=>{
            resolve(`succsess`);
        })
    });
};  

// readFilePro('./dog.txt').then(data=>{
//   return  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
// })
// .then(data=>{
//     return writeFilePro('dog-img2.txt',data.body.message) 
// })
// .catch(err=>{
//     console.log(' 💣 '+err);
// })

//ASYNC AWAIT

// const getAwait=async ()=>{
//     try{
//         const data=await readFilePro('./dog.txt');
//         const apiData=await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//         await writeFilePro('dog-img3.txt',apiData.body.message)
//     }
//     catch(err){
//         console.log(' 💣 💣💣' );
//     }
// }
// getAwait()

// Returning Values from Async Functions

const getAwait=async ()=>{
    try{
        const data=await readFilePro('./dog.txt');
        const apiData=await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        await writeFilePro('dog-img3.txt',apiData.body.message)
        console.log(`dog data getting func `);
    }
    catch(err){
        // console.log(' 💣 💣💣' );
        // console.log(`dog data getting func `);
        throw err;
    }
}

(async ()=>{
    try{
        
        console.log(`1`);
        await getAwait()
        console.log(`2`);  
    }catch(err){
        console.log('ERROR 💣 💣');
    }
     
})();




