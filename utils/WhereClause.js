// base - product.find()
// base - product.find(email: {"hiteshlco.dev"})

//bigQ- //search=coder&page=2&category==shortsleeves&rating[gte]=4&price[lte]=999&price[gte]=199&limit=5

class WhereClause  {
  constructor(base, bigQ) {
    this.base = base;
    this.bigQ = bigQ;
  }

  search() {
    const searchword = this.bigQ.search
      ? {
          name: {
            $regex: this.bigQ.search,
            $options: "i",
          },
        }
      : {};
    this.base = this.base.find({ ...searchword });
    return this;
  }

  filter() {
    const copyQ = { ...this.bigQ };

    delete copyQ["search"];
    delete copyQ["limit"];
    delete copyQ["page"];

    // convert bigQ into string ==> cpoyQ
    let stringOfCopyQ = JSON.stringify(copyQ);

    stringOfCopyQ = stringOfCopyQ.replace(
      / \b (gte|lte|gt|lt)/g,
      (m) => `$${m}`
    );

    const jsonOfCopyQ = JSON.parse(stringOfCopyQ);

    this.base = this.base.find(jsonOfCopyQ);
    return this;
  }

  pager(resultperpage) {
    let currentpage = 1;

    if (this.bigQ.page) {
      currentpage = this.bigQ.page;
    }

    const skipval = resultperpage * (currentpage - 1);

    this.base = this.base.limit(resultperpage).skip(skipval);

    return this;
  }
}

module.exports = WhereClause;
