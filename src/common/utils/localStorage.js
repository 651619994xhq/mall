import Cookies from 'js-cookie'
const ArtPushing='Art-Pushing';  //万花筒页面
const OrderList='Order-List';    //订单页
const BackPage='Back-Page';  //back-page

export function getArtPushing(){
    if(window.localStorage){
     return  localStorage.getItem(ArtPushing)||'';
    }else{
     return  Cookies.get(ArtPushing)||'';
    }
}

export function setArtPushing(page){
    if(window.localStorage){
        localStorage.setItem(ArtPushing,page)
    }else{
        Cookies.set(ArtPushing, page)
    }
}

export function removeArtPushing(){
    if(window.localStorage){
        localStorage.removeItem(ArtPushing)
    }else{
        Cookies.remove(ArtPushing)
    }
}



export function getOrderList(){
    if(window.localStorage){
        return  localStorage.getItem(OrderList)||'';
    }else{
        return  Cookies.get(OrderList)||'';
    }
}

export function setOrderList(page){
    if(window.localStorage){
        localStorage.setItem(OrderList,page)
    }else{
        Cookies.set(OrderList, page)
    }
}

export function removeOrderList(){
    if(window.localStorage){
        localStorage.removeItem(OrderList)
    }else{
        Cookies.remove(OrderList)
    }
}


export function getBackPage(){
    if(window.localStorage){
        return  localStorage.getItem(BackPage)||'';
    }else{
        return  Cookies.get(BackPage)||'';
    }
}

export function setBackPage(page){
    if(window.localStorage){
        localStorage.setItem(BackPage,page)
    }else{
        Cookies.set(BackPage, page)
    }
}

export function removeBackPage(){
    if(window.localStorage){
        localStorage.removeItem(BackPage)
    }else{
        Cookies.remove(BackPage)
    }
}
