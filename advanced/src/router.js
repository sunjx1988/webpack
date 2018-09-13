import foo from "./views/foo";
import bar from "./views/bar";

const routers = {
    "/foo": foo,
    "/bar": bar
};

class Router {
    start() {
        window.addEventListener("", () => {
            // 点击浏览器后退 / 前进按钮时会触发 window.onpopstate 事件，我们在这时切换到相应页面
            this.load(location.pathname);
        });

        this.load(location.pathname);
    }

    // 加载 path 路径的页面
    load(path) {
        // 首页
        if (path === "/") {
            path = "/foo";
        }
        // 创建页面实例
        const view = new routers[path]();
        // 调用页面方法，把页面加载到 document.body 中
        view.mount(document.body);
    }

    // 前往 path，变更地址栏 URL，并加载相应页面
    go(path) {
        history.pushState({}, "", path);
        this.load(path);
    }
}

export default new Router();
