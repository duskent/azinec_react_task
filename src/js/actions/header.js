// Sign in
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
//-------------------------------------- Actions -----------------------------------------
// Sing In action
export function signIn() {
  return {
    type: SIGN_IN,
    payload: {admin: true}
  }
}

export function signOut() {
  return {
    type: SIGN_OUT,
    payload: {admin: false}
  }
}
