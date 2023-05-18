import { getDownloadURL, ref } from "@firebase/storage";
import nodemailer from "nodemailer";

import { storage } from "@/database/setup";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});

export function sendProduct(to, filepath) {
  if (
    !filepath ||
    filepath === "" ||
    filepath === undefined ||
    to === "" ||
    !to
  ) {
    return false;
  }

  return new Promise(async (resolve, reject) => {
    try {
      const storageRef = ref(storage, `${filepath}`);
      const downloadURL = await getDownloadURL(storageRef);

      const mailOptions = {
        from: "raulrodriguesdemoraes@gmail.com",
        to,
        subject: "Produto Digital - Loja DevLuar",
        html: `Clique no link para baixar o arquivo: <a href="${downloadURL}">BAIXAR ARQUIVO</a>`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.error("[EMAIL] Error:", error);
          resolve(false);
        } else {
          console.log("[EMAIL] Sent:", info.response);
          resolve(true);
        }
      });
    } catch (error) {
      console.error("[STORAGE] Error:", error);
      resolve(false);
    }
  });
}
