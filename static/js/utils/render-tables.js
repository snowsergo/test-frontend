export class Tables {
    constructor() {
        this.allLines = [];
        this.pagesCount = 0;
        this.group = 5;
        this.table = document.querySelector(".table");
      }

    renderTh(obj) {
        const newTr = document.createElement("tr");
        for (let key in obj) {
          const newTh = document.createElement("th");
          newTh.classList.add("top");
          newTh.textContent = key;
          newTr.innerHTML += `${newTh.outerHTML}`;
        }
        this.table.innerHTML = `${newTr.outerHTML}`;
      }
   

      // отрисовка всех строк
    render(arr, start, end) {
    this.table.innerHTML = "";
    this.renderTh(arr[0]);
    for (let i = start; i < end; i++) {
      const newTr = document.createElement("tr");
      for (let key in arr[i]) {
        const newTd = document.createElement("td");
        newTd.textContent = arr[i][key];
        newTr.innerHTML += `${newTd.outerHTML}`;
      }
      this.table.innerHTML += `${newTr.outerHTML}`;
    }
    const currentPage = document.querySelector(".current-page");
    currentPage.textContent = end / this.group;
  }
  
  
  
  }
  