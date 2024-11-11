// Classe pour le Produit
class Produit {
    constructor(id, nom, prix) {
      this.id = id;
      this.nom = nom;
      this.prix = prix;
    }
  }
  
  // Classe pour l'Élément du Panier
  class ElementPanier {
    constructor(produit, quantite) {
      this.produit = produit;
      this.quantite = quantite;
    }
  
    // Méthode pour calculer le prix total d'un élément
    calculerPrixTotal() {
      return this.produit.prix * this.quantite;
    }
  }
  
  // Classe pour le Panier d'Achat
  class Panier {
    constructor() {
      this.elements = []; // Tableau pour stocker les éléments du panier
    }
  
    // Méthode pour ajouter un élément au panier
    ajouterElement(produit, quantite) {
      const elementExistant = this.elements.find(item => item.produit.id === produit.id);
      if (elementExistant) {
        // Si l'élément existe déjà, on augmente la quantité
        elementExistant.quantite += quantite;
      } else {
        // Sinon, on crée un nouvel élément et on l'ajoute au panier
        this.elements.push(new ElementPanier(produit, quantite));
      }
    }
  
    // Méthode pour supprimer un élément du panier
    supprimerElement(idProduit) {
      this.elements = this.elements.filter(item => item.produit.id !== idProduit);
    }
  
    // Méthode pour obtenir le total des éléments du panier
    obtenirTotal() {
      return this.elements.reduce((total, item) => total + item.calculerPrixTotal(), 0);
    }
  
    // Méthode pour afficher les éléments du panier
    afficherPanier() {
      if (this.elements.length === 0) {
        console.log("Le panier est vide.");
      } else {
        console.log("Contenu du panier :");
        this.elements.forEach(item => {
          console.log(`${item.produit.nom} - Quantité : ${item.quantite}, Prix total : ${item.calculerPrixTotal()} €`);
        });
        console.log(`Total du panier : ${this.obtenirTotal()} €`);
      }
    }
  }
  
  // --- Tests ---
  
  // Création de quelques produits
  const produit1 = new Produit(1, "Livre", 15);
  const produit2 = new Produit(2, "Stylo", 2.5);
  const produit3 = new Produit(3, "Cahier", 4);
  
  // Création du panier
  const panier = new Panier();
  
  // Ajout d'éléments au panier
  panier.ajouterElement(produit1, 2);
  panier.ajouterElement(produit2, 3);
  panier.ajouterElement(produit3, 1);
  
  // Affichage du panier
  panier.afficherPanier();
  
  // Suppression d'un élément du panier
  panier.supprimerElement(2); // Supprime le produit avec l'id 2 (Stylo)
  
  // Affichage du panier après suppression
  panier.afficherPanier();
