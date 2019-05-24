    type1 = info["types"][0]["type"]["name"]
    type2 = info["types"][1]["type"]["name"]
    ability1 = info["abilities"][0]["ability"]["name"]
    ability2 = info["abilities"][1]["ability"]["name"]
    ability3 = info["abilities"][2]["ability"]["name"]
    spe = info["stats"][0]["stat"]["name"]
    sdef = info["stats"][1]["stat"]["special-defense"]
    satk = info["stats"][2]["stat"]["special-attack"]
    def = info["stats"][3]["stat"]["defense"]
    atk = info["stats"][4]["stat"]["attack"]
    hp = info["stats"][5]["stat"]["hp"]

class Pokemon {
  constructor(hp,atk,def){
    // this.type1 = type1
    // this.type2 = type2
    // this.ability1 = ability1
    // this.ability2 = ability2
    // this.ability3 = ability3
    this.hp = hp
    this.atk = atk
    this.def = def
    // this.satk = satk
    // this.sdef = sdef
    // this.spe = spe
  }
}
