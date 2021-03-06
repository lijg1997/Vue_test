export default {
  get(name, def) {
    let oldListArr = localStorage.getItem(name);
    return oldListArr ? JSON.parse(oldListArr) : def;
  },
  set(name, val) {
    localStorage.setItem(name, JSON.stringify(val));
  }
};
