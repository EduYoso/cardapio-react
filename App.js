import "./App.css";

// Company Information

const companyInfo = {
  companyName: "Camper Cafe",
  companyEstablishedYear: 2020,
  companyAdress: "123 Free Code Camp Drive",
  companyWebsite: "https://www.freecodecamp.org",
};

// All menu itens

const menuItens = [
  //coffee
  {
    menuItemListName: "Coffee",
    menuItemImage:
      "https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg",
    menuItemImageAlt: "coffee icon",
    menuItemList: [
      {
        itemName: "French Vanilla",
        itemPrice: "3.00",
      },
      {
        itemName: "Caramel Macchiato",
        itemPrice: "3.75",
      },
      {
        itemName: "Pumpkin Spice",
        itemPrice: "4.00",
      },
      {
        itemName: "Hazelnut",
        itemPrice: "4.50",
      },
      {
        itemName: "Mocha",
        itemPrice: "4.50",
      },
    ],
  },

  //desserts
  {
    menuItemListName: "Desserts",
    menuItemImage: "https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg",
    menuItemImageAlt: "pie icon",
    menuItemList: [
      {
        itemName: "Donut",
        itemPrice: "1.50",
      },
      {
        itemName: "Cherry Pie",
        itemPrice: "2.75",
      },
      {
        itemName: "Cheesecake",
        itemPrice: "3.00",
      },
      {
        itemName: "Cinnamon Roll",
        itemPrice: "2.50",
      },
    ],
  },
];

// Function that generates a header (eu sei q n precisa fazer essa função, mas eu fiz só p treinar)

const makeHeader = () => {
  return (
    <div name="header">
      <h1>{companyInfo.companyName.toUpperCase()}</h1>
      <p className="established">Est. {companyInfo.companyEstablishedYear}</p>
      <hr/>
    </div>
  );
};

// Variable that contains all the menu sections

const MenuSections = menuItens.map((menuItem) => {
  return (
    <>
      <h2>{menuItem.menuItemListName}</h2>
      <img src={menuItem.menuItemImage} alt={menuItem.menuItemImageAlt} />
      {menuItem.menuItemList.map((item) => {
        return (
          <article className="item">
            <p className="item-name">{item.itemName}</p>
            <p className="item-price">{item.itemPrice}</p>
          </article>
        );
      })}
    </>
  );
});

// footer

const makeFooter = () => {
  return (
    <>
    <hr className="bpttom-line"/>
    <footer>
    <p><a href={companyInfo.companyWebsite} target="_blank">Visit our website</a></p>
    <p className="adress">{companyInfo.companyAdress}</p>
    </footer>
    </>
  )
};

function App() {
  return (
    <body>
      <div className="menu">
      <main>
        {makeHeader()}
        {MenuSections}
      </main>
      {makeFooter()}
      </div>
    </body>
  );
}

export default App;
