# Fiche de police

Application web pour la fiche de police obligatoire au Maroc (location courte durée).

- **Voyageurs** : ils ouvrent le lien reçu et remplissent une fiche par adulte, en français, anglais ou arabe. Ils prennent leur pièce d'identité en photo, ajoutent leurs enfants mineurs et signent avec le doigt. Un PDF est créé sur leur téléphone, qu'ils envoient à l'hôte par WhatsApp ou par e-mail.
- **Hôtes et conciergerie** : la page sans lien (`https://chasvy24.github.io/fiche-police/`) sert d'espace hôte. Chacun y enregistre ses logements, avec le WhatsApp ou l'e-mail qui reçoit les fiches, puis crée un lien par réservation.

## Pour commencer (propriétaire ou conciergerie)

1. Ouvrez `https://chasvy24.github.io/fiche-police/` dans Safari, touchez **Partager → Sur l'écran d'accueil**. L'application « Fiche police » s'installe comme une application.
2. Dans **Mes logements**, ajoutez chaque logement avec le WhatsApp (ou l'e-mail) qui doit recevoir les fiches.
3. Pour chaque réservation, créez le lien dans **Lien pour une réservation** et envoyez-le au voyageur avec le message proposé. Le **lien permanent** d'un logement peut aussi aller dans les messages automatiques d'Airbnb.
4. Les fiches arrivent en PDF dans WhatsApp ou par e-mail. Il reste à les déclarer aux autorités.

Chaque personne a ses propres logements sur son téléphone. Utilisez **Exporter** et **Importer** pour transmettre une liste de logements.

## Données personnelles

- La page n'envoie et ne stocke **aucune donnée en ligne**. Le PDF est créé dans le téléphone du voyageur.
- Les logements de l'espace hôte sont enregistrés uniquement dans le navigateur de l'appareil utilisé. On peut les exporter et les importer pour les partager avec la conciergerie.
- Le dépôt GitHub ne contient que l'application, jamais de fiches ni de pièces d'identité.
- Les fiches reçues contiennent des données protégées par la loi marocaine 09-08 : rangez-les dans un endroit sûr et supprimez-les après la durée de conservation obligatoire.

## Mise en ligne

1. Déposez tous les fichiers (`index.html`, `manifest.webmanifest`, `sw.js`, les icônes et `README.md`) à la racine du dépôt.
2. **Settings → Pages** : *Deploy from a branch*, branche `main`, dossier `/ (root)`, puis **Save**.

## Avec Appartement Diabat

Dans l'espace hôte, copiez le **lien du logement**. Collez-le dans Diabat : onglet Messages, carte « Infos de l'appartement », champ « Lien de la fiche de police ». Diabat y ajoute tout seul les dates, le nombre de voyageurs et la langue de chaque réservation.
