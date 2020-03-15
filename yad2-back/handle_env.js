const fs = require('fs');
let headers;
const setHeaders = ()=>{
    headers = {
        port: process.env.PORT,
        googleApiKey: process.env.GOOGLE_API_KEY
    }
}

if (process.env.NODE_ENV === "production") {
    require('dotenv').config({ path: 'prod.env' });
    setHeaders();
    fs.writeFileSync('../yad2-front/build/headers.json',JSON.stringify(headers), 'utf-8');
}else{
    require('dotenv').config({ path: 'dev.env' });
    setHeaders();
    fs.writeFileSync('../yad2-front/public/headers.json',JSON.stringify(headers), 'utf-8');
}