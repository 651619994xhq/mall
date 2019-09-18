import Cookies from 'js-cookie'

const TokenKey = 'EX-Token'
const UserId = 'EX-UserId'
const AccountNumber = 'EX-AccountNumber'
const AccessToken='Access-Token';
const ApiGateway='Api-Gateway';
// token
export function getToken() {
    //localStorage.getItem(TokenKey);
    return Cookies.get(TokenKey) || ''
    // return '112b4a0e11360027282f193af973a18b'
}

export function setToken(token) {
    //localStorage.setItem(TokenKey, token);
    return Cookies.set(TokenKey, token)
    //return Cookies.set(TokenKey, '112b4a0e11360027282f193af973a18b')
}

export function removeToken() {
    //localStorage.removeItem(TokenKey);
    return Cookies.remove(TokenKey)
}


// userId
export function getUserId() {
    //localStorage.getItem(UserId);
    return Cookies.get(UserId) || ''
}

export function setUserId(userId) {
    //localStorage.setItem(UserId, userId);
    return Cookies.set(UserId, userId)
}

export function removeUserId() {
    //localStorage.removeItem(UserId);
    return Cookies.remove(UserId)
}

// accountNumber
export function getAccountNumber() {
    //localStorage.getItem(UserId);
    return Cookies.get(AccountNumber) || ''
}

export function setAccountNumber(accountNumber) {
    //localStorage.setItem(UserId, userId);
    return Cookies.set(AccountNumber, accountNumber)
}

export function removeAccountNumber() {
    //localStorage.removeItem(UserId);
    return Cookies.remove(AccountNumber)
}

// xhq 2019/4/22
export function getAccessToken(){
    return Cookies.get(AccessToken) || ''
}

// xhq 2019/4/22
export function setAccessToken(token){
    return Cookies.set(AccessToken, token)
}

// xhq 2019/4/22
export function removeAccessToken() {
    return Cookies.remove(AccessToken)
}

// xhq 2019/4/22
export function getApiGateway(){
    return Cookies.get(ApiGateway) || ''
}
// xhq 2019/4/22
export function setApiGateway(gateway){
    return Cookies.set(ApiGateway,gateway)
}

// xhq 2019/4/22
export function removeApiGateway() {
    return Cookies.remove(ApiGateway)
}
