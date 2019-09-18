import axios from 'axios';
import store from '@/store';
import Router from '@/router'; //引入router模块
import * as Auth from '@/common/utils/auth'; //导入cookie工具类
const baseURL = process.env.BASE_URL;
import Vue from 'vue';
//TODO 过期的话 清理cookie 信息
let cookieObj={
    //当用户过期的时候清理cookie信息
     removeAccessTokenAndApiGateway:()=>{
         Auth.removeApiGateway();
         Auth.removeAccessToken();
     }
};




class Axios {
    constructor (props) {
        this.instance = axios.create({
            // baseURL:store.state.apiGateway?store.state.apiGateway:baseURL,  //这里使用传过来的网关
            baseURL,
            timeout: 60000,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'Content-Type, Scope-Authorization',
                'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS',
                // 'Scope-Authorization':"", //这里使用传过来的token
                // appName,
                // 'x-app-code': appName,
                ...props
            }
        })
        // this.deviceId = props.deviceId
        // this.accountNumber = props.accountNumber
        // this.userId = props.userId
        // this.token = props.token
    }
    resetLoginInfo (data) {
        // this.instance.defaults.headers = {...this.instance.defaults.headers, ...data}
        // this.accountNumber = data.accountNumber
        // this.userId = data.userId
        // this.token = data.token
    }

    updateProps (props) {
        this.instance.defaults.headers = {...this.instance.defaults.headers, ...props}
        // this.deviceId = props.deviceId
        // this.accountNumber = props.accountNumber
        // this.userId = props.userId
        // this.token = props.token
    }
    updateBaseURL(){
        let url=Auth.getApiGateway();
        if(!url){
           url=baseURL;
        };
        this.instance.defaults.baseURL=url;
    }

    redirectErrorPage () {
        cookieObj.removeAccessTokenAndApiGateway();
        Router.replace({
           path:'/error',
        })

    }

    post (path, params, {success, error}) {
        var self=this;
       //跟新header
        this.updateProps({
            'Scope-Authorization':Auth.getAccessToken()
        });
        //跟新baseURL
        this.updateBaseURL();


        // this.instance.post(path, {appName, deviceId: this.deviceId, accountNumber: this.accountNumber, userId: this.userId, token: this.token, ...params}, {headers: {'x-trace-id': uuid()}})
           this.instance.post(path,{...params},{headers:{}})
            .then(function (response) {
                if (response && response.data && Number(response.data.status) === 0) {
                    //这里是单独处理小树的token 过期
                    if(response.data.data&&response.data.data.msg=='xiaoshu token check fail'){
                       //TODO 这里兼容小树 关闭 UI
                        setTimeout(()=>{Vue.$indicator&&Vue.$indicator.close();},0);
                        Router.replace({
                            path:'st-login',
                            query:{
                                isTokenPast:true
                            }
                        });
                        return;
                    };

                    success && success(response.data.data)
                } else {
                    if(response.data.msg=='token check fail'){
                        setTimeout(()=>{Vue.$indicator&&Vue.$indicator.close();},0);
                        self.redirectErrorPage();
                        return;
                    };
                    error && error(response.data.msg)
                }
            })
            .catch(function (e) {
                let msg=e+'';
                // xhq 2019/4/25  加上如果抛出 网络超时 对消息重新处理一下
                if( msg.indexOf('timeout') > -1){
                    error&&error('网络超时,请稍后重试');
                    return;
                };
                error && error(msg)
            })
    }

    //暂时所有的请求 都用post get请求 暂时没有处理逻辑 如果之后需要 再加
    get (path, {success, error}) {
        this.instance.get(path)
            .then(function (response) {
                if (response && response.data && (Number(response.data.status) === 0 || response.data.code === 200)) {
                    success && success(response.data.data)
                } else {
                    error && error(response.data.msg)
                }
            })
            .catch(function (e) {
                error && error(e)
            })
    }
    //这里只是用来写测试掉接口用的
    testPost (path,params, {success, error}) {
        success && success()
    }

}
let axiosIns = new Axios({})
export default axiosIns
