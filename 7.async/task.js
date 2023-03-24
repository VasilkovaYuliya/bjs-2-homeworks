class AlarmClock {
  constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
  }
  
  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error ("Отсутствуют обязательные аргументы");
    }  

    if (this.alarmCollection.some(alarm => alarm.time === time)) {
      console.warn("Уже присутствует звонок на это же время");
    }

    const call = {
      time, callback, canCall : true,
    }

    this.alarmCollection.push(call);
  }

  removeClock(time) {
    if(this.alarmCollection.filter(alarm => alarm.time !== time)) {
    }
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString([], {hours: "2 - digits", minutes: "2 - digits"});
  }

  start() {
    if (this.intervalId !== null) {
      return;
    }

    this.intervalId  = setInterval(() => this.alarmCollection.forEach(alarm => {
      if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
        alarm.canCall = false;
        alarm.callback();
      }
    }), 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => alarm.canCall = true);
  }

  clearAlarms() {
    stop();  
    this.alarmCollection = [];
  }
}

