const INITIAL_STATE = {
  sections: [
    {
      title: "soft",
      imageUrl: `${require("../../assets/akin-cakiner-UW-hO2OP2MY-unsplash.jpg")}`,
      id: 1,
      linkUrl: "shop/soft",
    },
    {
      title: "regal",
      imageUrl: `${require("../../assets/amy-humphries-_igiFwG7Ybw-unsplash.jpg")}`,
      id: 2,
      linkUrl: "shop/regal",
    },
    {
      title: "bold",
      imageUrl: `${require("../../assets/anne-nygard-t32KvOBUKDA-unsplash.jpg")}`,
      id: 3,
      linkUrl: "shop/bold",
    },
    {
      title: "sophisticated",
      imageUrl: `${require("../../assets/jenelle-hayes-K2SXdKPEhcg-unsplash.jpg")}`,
      size: "large",
      id: 4,
      linkUrl: "shop/sophisticated",
    },
    {
      title: "shabby chic",
      imageUrl: `${require("../../assets/sandie-clarke-Xn5uchPtzP4-unsplash.jpg")}`,
      size: "large",
      id: 5,
      linkUrl: "shop/shabbychic",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
