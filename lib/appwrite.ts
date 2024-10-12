import { Account, Client, ID } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.poce_tinder",
  projectId: "67099d5600089bdd0f4f",
  storageId: "670a91b2003c8fcd7e28",
  databaseId: "67099f50002b83f17594",
  userCollectionId: "67099f690038e237ca56",
  poceCollectionId: "67099f9e003ced69fb4e",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);

//TODO добавить уведомления
export const registerUser = async (email: string, password: string) => {
  try {
    const res = await account.create(ID.unique(), email, password);
    console.log(res);

    return res;
  } catch (e) {
    console.error(e);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const res = await account.createEmailPasswordSession(email, password);
    console.log(res);

    return res;
  } catch (e) {
    console.error(e);
  }
};
