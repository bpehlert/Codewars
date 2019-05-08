// ##################################
// Location: DEU
// ##################################
// Ammonia: 023 particles
// Nitrogen Oxide: 019 particles
// Carbon Monoxide: 127 particles
// ##################################
// ##################################
// Location: USA
// ##################################
// Ammonia: 200 particles
// Nitrogen Oxide: 120 particles
// Carbon Monoxide: 120 particles
// ##################################
// ##################################
// Location: AUS
// ##################################
// Ammonia: 122 particles
// Nitrogen Oxide: 132 particles
// Carbon Monoxide: 099 particles
// ##################################

function parseData() {
  // Remember, your data is in a global variable dataFile
  const splitArr = dataFile.split("Location: ");
  splitArr.shift();
  let obj = {};
  let topACountry = "";
  let aCountries = "";
  let topNOCountry = "";
  let nOCountries = "";
  let topCMCountry = "";
  let cMCountries = "";
  splitArr.map(loc => {
    const country = loc.substring(0, 3);
    obj[loc.substring(0, 3)] = {
      ammonia: loc.substring(
        loc.indexOf("Ammonia: ") + "Ammonia: ".length,
        loc.indexOf("Ammonia: ") + "Ammonia: ".length + 3
      ),
      nitrogen: loc.substring(
        loc.indexOf("Nitrogen Oxide: ") + "Nitrogen Oxide: ".length,
        loc.indexOf("Nitrogen Oxide: ") + "Nitrogen Oxide: ".length + 3
      ),
      carbon: loc.substring(
        loc.indexOf("Carbon Monoxide: ") + "Carbon Monoxide: ".length,
        loc.indexOf("Carbon Monoxide: ") + "Carbon Monoxide: ".length + 3
      )
    };

    if (!topACountry) {
      topACountry = country;
    }
    if (obj[country].ammonia > obj[topACountry].ammonia) {
      aCountries = country;
      topACountry = country;
    }
    if (obj[country].ammonia === obj[topACountry].ammonia) {
      aCountries = topACountry + ", " + country;
    }

    if (!topNOCountry) {
      topNOCountry = country;
    }
    if (obj[country].nitrogen > obj[topNOCountry].nitrogen) {
      nOCountries = country;
      topNOCountry = country;
    }
    if (obj[country].nitrogen === obj[topNOCountry].nitrogen) {
      nOCountries = topNOCountry + ", " + country;
    }

    if (!topCMCountry) {
      topCMCountry = country;
    }
    if (obj[country].carbon > obj[topCMCountry].carbon) {
      cMCountries = country;
      topCMCountry = country;
    }
    if (obj[country].carbon === obj[topCMCountry].carbon) {
      cMCountries = topCMCountry + ", " + country;
    }
  });
  console.log(obj);
  const output =
    "Ammonia levels in " +
    aCountries +
    " are too high. Nitrogen Oxide levels in " +
    nOCountries +
    " are too high. Carbon Monoxide levels in " +
    cMCountries +
    " are too high.";
  return output;
}
