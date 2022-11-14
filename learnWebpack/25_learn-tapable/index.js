const {
  SyncHook,
  SyncBailHook,
  SyncLoopHook,
  SyncWaterfallHook,
} = require("tapable");
const { AsyncSeriesHook, AsyncParallelHook } = require("tapable");

class LearnTapable {
  constructor() {
    this.hooks = {
      syncHook: new SyncHook(["name", "age"]),
      // bail 当任何被选中的函数返回任何值时，将停止执行剩余的函数。
      syncBailHook: new SyncBailHook(["name", "age"]),
      // loop 监听函数返回true 重复执行，直到返回false
      syncLoopHook: new SyncLoopHook(["name", "age"]),
      // SyncWaterfallHook 监听函数的返回值作为下一个函数的第一个参数
      syncWaterfallHook: new SyncWaterfallHook(["name", "age"]),
      // asyncSeriesHook 在一个hook中，监听了两次事件，这两次事件串行执行
      asyncSeriesHook: new AsyncSeriesHook(["name", "age"]),
      // AsyncParallelHook 在一个hook中，监听了两次事件，这两次事件并行执行
      asyncParallelHook: new AsyncParallelHook(["name", "age"]),
    };

    // synchook
    this.hooks.syncHook.tap("event1", (name, age) => {
      console.log("event1: ", name, age);
    });

    this.hooks.syncHook.tap("event2", (name, age) => {
      console.log("event2: ", name, age);
    });

    // syncbailhook
    this.hooks.syncBailHook.tap("event1", (name, age) => {
      console.log("event1: ", name, age);
      return "123";
    });

    this.hooks.syncBailHook.tap("event2", (name, age) => {
      console.log("event2: ", name, age);
    });

    // SyncWaterfallHook
    this.hooks.syncWaterfallHook.tap("event1", (name, age) => {
      console.log("event1: ", name, age);
      return "123";
    });

    this.hooks.syncWaterfallHook.tap("event2", (name, age) => {
      console.log("event2: ", name, age);
    });

    // syncloophook
    let count = 0;
    this.hooks.syncLoopHook.tap("event1", (name, age) => {
      console.log("event1: ", name, age);
      if (count < 3) {
        count++;
        return count;
      }
    });

    this.hooks.syncLoopHook.tap("event2", (name, age) => {
      console.log("event2: ", name, age);
    });

    // asyncSeriesHook
    this.hooks.asyncSeriesHook.tapAsync("event1", (name, age, callback) => {
      setTimeout(() => {
        console.log("event1: ", name, age);
        callback();
      }, 2000);
    });

    this.hooks.asyncSeriesHook.tapAsync("event2", (name, age, callback) => {
      setTimeout(() => {
        console.log("event2: ", name, age);
        callback();
      }, 2000);
    });

    // asyncParallelHook
    // this.hooks.asyncParallelHook.tapAsync("event1", (name, age, callback) => {
    //   setTimeout(() => {
    //     console.log("event1: ", name, age)
    //     callback()
    //   }, 2000);
    // });

    // this.hooks.asyncParallelHook.tapAsync("event2", (name, age, callback) => {
    //   setTimeout(() => {
    //     console.log("event2: ", name, age)
    //     callback()
    //   }, 2000);
    // });

    this.hooks.asyncSeriesHook.tapPromise("event1", (name, age, callback) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("event1: ", name, age);
          resolve();
        }, 2000);
      });
    });

    this.hooks.asyncSeriesHook.tapPromise("event2", (name, age, callback) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("event2: ", name, age);
          resolve();
        }, 2000);
      });
    });
  }

  emit() {
    // this.hooks.syncHook.call('jz', '18')
    // this.hooks.syncHook.call('kobe', '38')
    // this.hooks.syncBailHook.call('jz', '18')
    // this.hooks.syncBailHook.call('kobe', '38')
    // this.hooks.syncLoopHook.call("jz", "18");
    // this.hooks.syncLoopHook.call("kobe", "38");
    // this.hooks.syncWaterfallHook.call("kobe", 30);
    this.hooks.asyncSeriesHook.callAsync('kobe', 30, () => {
      console.log('asyncSeriesHook run~')
    })
    // this.hooks.asyncParallelHook.callAsync("kobe", 30, () => {
    //   console.log("asyncParallelHook run~");
    // });
  }
}

const lt = new LearnTapable();

lt.emit();
