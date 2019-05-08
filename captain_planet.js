// Parse data below to return result string.

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
  // Separate string by 'Location: ' and create an loopable array.
  const splitArr = dataFile.split("Location: ");
  splitArr.shift();
  //   Create variables outside of loop scope to hold values for countries with highest amounts
  let obj = {};
  let topACountry = "";
  let aCountries = "";
  let topNOCountry = "";
  let nOCountries = "";
  let topCMCountry = "";
  let cMCountries = "";

  for (let i = 0; i < splitArr.length; i++) {
    const loc = splitArr[i];
    const country = loc.substring(0, 3);
    // Create an object to more easily reference country data
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
    // AMMONIA - find countries with highest amounts
    if (!aCountries) {
      aCountries = country;
      topACountry = country;
    }
    if (obj[country].ammonia > obj[topACountry].ammonia) {
      topACountry = country;
      aCountries = country;
    }
    if (
      obj[country].ammonia === obj[topACountry].ammonia &&
      country !== topACountry
    ) {
      aCountries += ", " + country;

      topACountry = country;
    }
    // NITROGEN OXIDE - find countries with highest amounts
    if (!nOCountries) {
      nOCountries = country;
      topNOCountry = country;
    }
    if (obj[country].nitrogen > obj[topNOCountry].nitrogen) {
      topNOCountry = country;
      nOCountries = country;
    }
    if (
      obj[country].nitrogen === obj[topNOCountry].nitrogen &&
      country !== topNOCountry
    ) {
      nOCountries += ", " + country;
      topNOCountry = country;
    }
    // CARBON MONOXIDE - find countries with highest amounts
    if (!cMCountries) {
      cMCountries = country;
      topCMCountry = country;
    }
    if (obj[country].carbon > obj[topCMCountry].carbon) {
      topCMCountry = country;
      cMCountries = country;
    }
    if (
      obj[country].carbon === obj[topCMCountry].carbon &&
      country !== topCMCountry
    ) {
      cMCountries += ", " + country;
      topCMCountry = country;
    }
  }
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
