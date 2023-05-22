class Voiture {
  constructor(marque, modele, annee, couleur) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.couleur = couleur;
  }
  
  afficherDetails() {
    console.log(`Marque: ${this.marque}, Modèle: ${this.modele}, Année: ${this.annee}, Couleur: ${this.couleur}`);
  }
}

class Garage {
  constructor() {
    this.voitures = [];
  }

  ajouterVoiture = (voiture) => this.voitures.push(voiture);

  afficherVoituresAnnee = (annee) => {
    const voituresAnnee = this.voitures.filter(voiture => voiture.annee === annee);
    console.table(voituresAnnee, ["marque", "modele", "annee", "couleur"]);
  }

  afficherVoituresMarque = (marque) => {
    const voituresMarque = this.voitures.filter(voiture => voiture.marque === marque);
    console.table(voituresMarque, ["marque", "modele", "annee", "couleur"]);
  }
}