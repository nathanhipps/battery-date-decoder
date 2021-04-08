class Decoder {
  constructor(manufacturer, code) {
    this.manufacturer = manufacturer.toLowerCase();
    this.original = code;
    this.serial = code.toLowerCase().replace(/[^A-Za-z0-9]/g, "");

    this[this.manufacturer]();
  }

  bbi() {
    const years = {
      z: 2006,
      d: 2007,
      e: 2008,
      f: 2009,
      g: 2010,
      h: 2011,
      j: 2012,
      k: 2013,
      m: 2014,
      n: 2015,
      p: 2016,
      r: 2017,
      t: 2018,
      w: 2019,
      x: 2020,
      y: 2021,
    };

    const year = years[this.serial.substr(0, 1)] || false;

    if (year) {
      this.dateString = `Manufactured in ${year}`;
    } else {
      this.reject();
    }
  }

  bulldog() {
    // Bulldog month code starts with 4 (January)
    // Bulldog year of manufacture is 4 less than the year date code
    const locations = { t: "Terrell, TX", w: "Wabash, IN" };
    const parsed = /^[a-z]?(1[0-9]|[4-9])([0-9]{2})([wt])/g.exec(this.serial);
    const month = parsed ? this.getMonthString(+parsed[1] - 3) : false;
    const year = parsed ? +parsed[2] + 1996 : false;
    const location = parsed ? locations[parsed[3]] : false;
    this.setMessageWithLocation(month, year, location);
  }

  crown() {
    // Serial numbers starting with 'r' were manufactured by Reaco
    if (this.serial.startsWith("r")) return this.reaco();

    const parsed = /([a-z])([0-9]){1,2}$/g.exec(this.serial);

    if (parsed) {
      const year =
        parseInt(parsed[2]) < 10
          ? parseInt(parsed[2]) + 2010
          : parseInt(parsed[2]) + 2000;
      const month = this.getMonthString(this.alphaMonths()[parsed[1]]);
      this.dateString = `Manufactured on ${month}, ${year}`;
    } else {
      this.reject();
    }
  }

  deka() {
    const years = {
      l: 2002,
      m: 2003,
      n: 2004,
      o: 2005,
      p: 2006,
      q: 2007,
      r: 2008,
      s: 2009,
      t: 2010,
      a: 2011,
      b: 2012,
      c: 2013,
      d: 2014,
      e: 2015,
      f: 2016,
      g: 2017,
      h: 2018,
      i: 2019,
      j: 2020,
      k: 2021,
    };

    const parsed = /([a-z])([a-z])$/g.exec(this.serial);
    const year = parsed ? years[parsed[2]] : false;
    const month = parsed
      ? this.getMonthString(this.alphaMonths()[parsed[1]])
      : false;

    this.setMessage(month, year);
  }

  douglas() {
    if (isNaN(this.serial)) {
      this.enersys();
    } else {
      const year = 2000 + parseInt(this.serial.substr(0, 2));
      this.dateString = `Manufactured in ${year}`;
    }
  }

  enersys() {
    const years = {
      a: 2002,
      b: 2003,
      c: 2004,
      d: 2005,
      e: 2006,
      f: 2007,
      g: 2008,
      h: 2009,
      i: 2010,
      j: 2011,
      k: 2012,
      l: 2013,
      m: 2014,
      n: 2015,
      p: 2016,
      r: 2017,
      s: 2018,
      t: 2019,
      u: 2020,
      v: 2021,
    };

    const locations = {
      r: "Richmond, KY",
      m: "Monterrey, MX",
      c: "Chicago, IL",
    };

    const parsed = /^([a-z])([a-z])([a-z])/g.exec(this.serial);
    const location = parsed ? locations[parsed[1]] : false;
    const year = parsed ? years[parsed[2]] : false;
    const month = parsed
      ? this.getMonthString(this.alphaMonths()[parsed[3]])
      : false;

    this.setMessageWithLocation(month, year, location);
  }

  general() {
    this.enersys();
  }

  gnb() {
    const locations = {
      k: "Kankakee",
      g: "Kansas City",
      e: "Fort Erie",
      f: "Fort Smith",
      c: "Columbus",
    };

    const years = {
      b: 1999,
      c: 2000,
      d: 2001,
      e: 2002,
      f: 2003,
      g: 2004,
      h: 2005,
      i: 2006,
      j: 2007,
      k: 2008,
      l: 2009,
      m: 2010,
      n: 2011,
      p: 2012,
      r: 2013,
      s: 2014,
      t: 2015,
      u: 2016,
      w: 2017,
      x: 2018,
      y: 2019,
      z: 2020,
      a: 2021,
    };

    const months = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      j: 9,
      k: 10,
      l: 11,
      m: 12,
    };

    const parsed = /^([a-z])([a-z])([a-z])/g.exec(this.serial);

    const location = parsed ? locations[parsed[1]] : false;
    const month = parsed ? this.getMonthString(months[parsed[2]]) : false;
    const year = parsed ? years[parsed[3]] : false;

    this.setMessageWithLocation(month, year, location);
  }

  hawker() {
    const models = {
      tp: "Top Power",
      ep: "Energy Plus",
      w: "Water Less",
      wl: "Water Less",
      vp: "Varta Perfect",
      pl: "Powerline",
      el: "Envirolink",
    };

    const types = {
      1: "Standard",
      2: "Rapid Charge",
      3: "Lifespeed",
      4: "Solar",
    };

    const parsed = /^([a-z]{1,2})([1-4]{1})([0-9]{2})([0-9]{2})/g.exec(
      this.serial
    );
    const model = parsed ? models[parsed[1]] : false;
    const type = parsed ? types[parsed[2]] : false;
    const month = parsed ? this.getMonthString(+parsed[3]) : false;
    const year = parsed ? +parsed[4] + 2000 : false;

    if (model && type && month && year) {
      this.dateString = `Model: ${model}/${type} - Manufactured on ${month}, ${year}`;
    } else {
      this.reject();
    }
  }

  hup() {
    this.enersys();
  }

  reaco() {
    const parsed = /([a-z])([0-9]{2})$/g.exec(this.serial);
    const month = parsed
      ? this.getMonthString(this.alphaMonths()[parsed[1]])
      : false;
    const year = parsed ? +parsed[2] + 2000 : false;

    this.setMessage(month, year);
  }

  setMessage(month, year) {
    if (month && year) {
      this.dateString = `Manufactured on ${month}, ${year}`;
    } else {
      this.reject();
    }
  }

  setMessageWithLocation(month, year, location) {
    if (month && year && location) {
      this.dateString = `Manufactured in ${location} on ${month}, ${year}`;
    } else {
      this.reject();
    }
  }

  getDateString() {
    return this.dateString;
  }

  getMonthString(month) {
    return this.months()[month - 1];
  }

  alphaMonths() {
    return {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 10,
      k: 11,
      l: 12,
    };
  }

  months() {
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  }

  reject() {
    this.dateString = `The serial number you provided, "${this.original}", cannot be decoded`;
  }
}

export default Decoder;
