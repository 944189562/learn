import { Subject } from 'rxjs'

class Student {
  _score$ = new Subject();

  get score$() {
    return this._score$.asObservable();
  }

  updateScore(score) {
    // 大於 60 分才允許推送成績事件
    if(score > 60){
      this._score$.next(score);
    }
  }
}

const mike = new Student();

mike.score$.subscribe(score => {
  console.log(`目前成績：${score}`);
});

mike.updateScore(70); // 目前成績: 70
mike.updateScore(50); // (沒有任何反應)
mike.updateScore(80); // 目前成績: 80
mike.score$.next(50); // (錯誤：next is not a function)