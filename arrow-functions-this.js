console.log("global", this);

function callableObj() {
  const name = "Ben";

  console.log("callableObj", this);

  const arrow = () => {
    const name = "Ben";

    console.log("arrow", this);
  };

  arrow();
}

callableObj();
