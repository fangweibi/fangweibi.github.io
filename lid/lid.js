/**
 * Created by Administrator on 2016/10/7.
 */
/**
 * 获取元素的样式  调用如：getStyle(box, 'width');
 * @param obj 要获取谁的样式
 * @param attr 要获取的样式属性名称
 * @return {String} 样式的属性值
 */

function getStyle(obj, attr) {

    if(obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null)[attr];
    }
}

/**
 * 根据id获取节点元素
 * @param id
 * @returns {Element}
 */
function $(id) {
    return document.getElementById(id);
}

/**
 * 动画
 * @param obj  要动画的元素
 * @param json  动画的属性和属性值
 * @param callback 回调函数
 */
function animate(obj, json, callback) {
    // 清除定时器，避免多次调用本方法时产生混乱
    clearInterval(obj.timer);
    // 生成一个定时器
    obj.timer = setInterval(function () {
        var flag = true;
        // 遍历参数对象json
        for(var attr in json) {
            // 获取当前对象的attr属性值
            var cur = parseInt(getStyle(obj, attr));
            // 获取当前对象的attr的目标值
            var target = json[attr];
            // 获取速度
            var speed = (target - cur) / 6;
            // 对速度进行取整
            speed = target > cur ? Math.ceil(speed) : Math.floor(speed);
            // 判断当前动画是否执行完毕，如果没执行完毕则改变当前对象的attr属性
            if(target != cur) {
                obj.style[attr] = cur + speed + 'px';
                flag = false;
            }
        }
        // 当所有动画执行完毕后 清除定时器   执行回调函数
        if(flag) {
            clearInterval(obj.timer);
            // 判断用户是否传入回调函数，如果传入回调函数，则执行回调函数
            !!callback && callback();
            // if(callback) {
            //     callback();
            // }
        }
    }, 30);
}