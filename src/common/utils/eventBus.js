import Vue from 'vue';
const install = function () {
    const Bus = new Vue ({
        data(){
          return {
              mallCB:null
          }
        },
        methods:{
            emit(event,...args){
                this.$emit(event,...args)
            },
            on(event,callback){
                this.$on(event,callback)
            },
            off(event,callback){
                this.$off(event,callback);
            }
        }
    });
   return Bus;
}
const VueBus=install();
export default VueBus;
