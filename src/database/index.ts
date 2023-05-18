import {
  push,
  ref,
  update,
  remove,
  get,
  set,
} from "@firebase/database";
import { getStorage, uploadString, getDownloadURL } from "@firebase/storage";
import { database } from "./setup";

export function createItem({ path, params }: any) {
  const db = database;
  if (!path) return { error: "Sem path" };
  if (path.includes("undefined")) {
    console.log(path);
    return console.warn("Erro, undefined!");
  }
  push(ref(db, path), params)
    .then(console.log("[LOG] Gravação no banco de dados"))
    .catch((error) => {
      console.warn(error);
    });
}

export function updateItem({ path, params }: any) {
  const db = database;
  if (!path) return { error: "Sem path" };
  if (path.includes("undefined")) {
    console.log(path);
    return console.warn("Erro, undefined!");
  }
  update(ref(db, path), params)
    .then(console.log("[LOG] Atualização no banco de dados"))
    .catch((error) => {
      console.log(error);
    });
}

export function setItem({ path, params }: any) {
  const db = database;
  if (!path) return { error: "Sem path" };
  if (path.includes("undefined")) {
    console.log(path);
    return console.warn("Erro, undefined!");
  }
  set(ref(db, path), params)
    .then(console.log("[LOG] Atualização no banco de dados"))
    .catch((error) => {
      console.log(error);
    });
}

export function deleteItem({ path }: any) {
  const db = database;
  if (!path) return { error: "Sem path" };
  if (path.includes("undefined")) {
    console.log(path);
    return console.warn("Erro, undefined!");
  }
  remove(ref(db, path))
    .then(console.log("[LOG] Remoção no banco de dados"))
    .catch((error) => {
      console.log(error);
    });
}

export async function getAllItems({ path }: any) {
  const db = database;
  if (!path) return { error: "Sem path" };
  if (path.includes("undefined")) {
    console.log(path);
    return console.warn("Erro, undefined!");
  }
  const snapshot = await get(ref(db, path));
  let alldata: Array<any> = [];
  snapshot.forEach((childSnapshot) => {
    let key = childSnapshot.key,
      data = childSnapshot.val();
    alldata.push({ key, data });
  });
  return alldata;
}

export async function getItems({ path }: any) {
  const db = database;
  if (!path) return { error: "Sem path" };
  if (path.includes("undefined")) {
    console.log(path);
    return console.warn("Erro, undefined!");
  }
  const snapshot = await get(ref(db, path));
  return snapshot.val() || [];
}

export function uploadFile({ path, base64 }: any) {
  const storage: any = getStorage();
  const storageRef: any = ref(storage, path);
  const url = uploadString(storageRef, base64, "data_url").then((snapshot) => {
    return getDownloadURL(snapshot.ref).then((downloadURL) => {
      return downloadURL;
    });
  });
  return url;
}
