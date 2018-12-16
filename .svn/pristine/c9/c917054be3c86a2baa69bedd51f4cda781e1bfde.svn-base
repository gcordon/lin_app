import { observable, action, autorun, } from "mobx";


class Store {
    id = Math.random();
    @observable title = "飞飞";
    @observable finished = false;
    @observable shuzu = [{ a: 1, b: 2 }];
    @observable duixd = {a:1,b:2};
    @action cTitle = () => {
        this.title = "麦扣扣"
    }
    
}
// autorun :自动运行
autorun(() => {
    console.log(Array.from(new Store().shuzu))
    console.log(new Store().duixd)
})
export default new Store()