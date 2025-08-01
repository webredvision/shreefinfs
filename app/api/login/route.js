import axios from "axios";
import { NextResponse } from "next/server";
import CryptoJS from "crypto-js";

const CryptoJSAesJsons = {
  stringify: function (cipherParams) {
    var j = {
      ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64),
      iv: cipherParams.iv.toString(CryptoJS.enc.Hex),
      s: cipherParams.salt.toString(CryptoJS.enc.Hex),
    };
    return JSON.stringify(j);
  },
  parse: function (jsonStr) {
    var j = JSON.parse(jsonStr);
    return CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(j.ct),
      iv: CryptoJS.enc.Hex.parse(j.iv),
      salt: CryptoJS.enc.Hex.parse(j.s),
    });
  },
};

function encryptPassword(password) {
  const key = "W@ealth!@$#$(%#H(^%)"; // Encryption key
  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(password), key, {
    format: CryptoJSAesJsons,
  }).toString();
  return encrypted;
}

export async function POST(req) {
    try {
        const formData = await req.json();
        formData.callbackUrl = `${process.env.CALLBACKURL}/login`; // Add callbackUrl
        console.log(formData);  
        const encryptedPassword = encryptPassword(password);
        console.log("Encrypted Password:", encryptedPassword);
    
        const formEncodedData = new URLSearchParams();
        formEncodedData.append("username", formData.username);
        formEncodedData.append("password", formData.encryptedPassword);
        formEncodedData.append("callbackUrl", formData.callbackUrl);
        formEncodedData.append("loginFor", formData.loginFor);
        
        const res = await axios.post(
            "https://dev.wealthelite.in/api/app-api/website-login",
            formEncodedData, // Send data in form-urlencoded format
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded", // Set correct content type
              },
            }
          );
        
        return NextResponse.json(res.data, { status: 201 });
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
