import AsyncStorage from "@react-native-async-storage/async-storage";

export const USER_KEY = "gdplace-token";

// export const onSignIn = () => AsyncStorage.setItem(USER_KEY, "true");

export const onSignIn = async (value) => {
  try {
    await AsyncStorage.setItem(USER_KEY, value);
  } catch (e) {
    
    await AsyncStorage.removeItem(USER_KEY);
  }
}

export const onSignOut = async () => {
  await AsyncStorage.removeItem(USER_KEY);
}

// export const isSignedIn = () => {
//   return new Promise((resolve, reject) => {
//     AsyncStorage.getItem(USER_KEY)
//       .then(res => {
//         if (res !== null) {
//           resolve(true);
//         } else {
//           resolve(false);
//         }
//       })
//       .catch(err => reject(err));
//   });
// };

export const isSignedIn = async () => {
  try {
    const value = await AsyncStorage.getItem(USER_KEY);
    
    if(value !== null && value !== false) {
      return true;
    }

    return false;

  } catch(e) {
    return false;
  }
};