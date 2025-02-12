CREATE TABLE idole (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  image VARCHAR(255),
  `text` TEXT
);

INSERT INTO idole (name, image, text)
VALUES
('Valus', 'https://i.ibb.co/Mx6q21Np/1-guide-shadow-of-the-colossus-nom-colosse-01-valus.webp', 'Valus is the first Colossus in the game. A massive creature resembling a giant bull, Valus attacks Wander as soon as he approaches. The Colossus is slow, but powerful, and it requires the player to strategically climb on its back in order to defeat it. Its main feature is its enormous, axe-like club, which it uses to strike Wander.'),
('Quadratus', 'https://i.ibb.co/6RX9wy1d/2-guide-shadow-of-the-colossus-nom-colosse-02-quadratus.webp', 'Quadratus is the second Colossus. This giant creature looks like a massive, bipedal bull with large, strong legs. Quadratus is one of the easier Colossi to defeat due to its relatively simple attack patterns. The player must leap onto its back while avoiding its powerful stomp attacks.'),
('Gaius', 'https://i.ibb.co/0yDh5vMd/3-guide-shadow-of-the-colossus-nom-colosse-03-gaius.webp', 'Gaius is the third Colossus, and it resembles a massive, humanoid warrior. Gaius has enormous, stone-like arms and a massive sword. Its primary attack involves swinging its sword and trying to crush Wander beneath its immense weight. To defeat Gaius, the player must climb on its arms and strike the weak spots on its body.'),
('Phaedra', 'https://i.ibb.co/zhyht2z2/4-guide-shadow-of-the-colossus-nom-colosse-04-phaedra.webp', 'Phaedra is the fourth Colossus and is the first of the horse-like creatures. It has a long, serpentine body and is highly agile despite its size. To defeat Phaedra, Wander must jump onto its back while it charges through the environment. The Colossus is one of the most graceful but deadly enemies in the game.'),
('Avion', 'https://i.ibb.co/H01f78g/5-guide-shadow-of-the-colossus-nom-colosse-05-avion.webp', 'Avion is the fifth Colossus, resembling a giant bird or pterosaur. It can fly high into the air and is one of the most challenging Colossi to deal with. The player must use the environment to their advantage, grappling onto Avion as it swoops through the skies.'),
('Dirge', 'https://i.ibb.co/rR904FTc/6-guide-shadow-of-the-colossus-nom-colosse-06-barba.webp', 'Dirge is the sixth Colossus, a massive, sand-dwelling creature. This Colossus is an enormous, serpent-like beast that hides beneath the sand and attacks with incredible speed. It requires the player to bait it into attacking and then jump onto its back to climb toward its weak spots.'),
('Melos', 'https://i.ibb.co/6cfGCwcn/7-guide-shadow-of-the-colossus-nom-colosse-07-hydrus.webp', 'Melos is the seventh Colossus and is a powerful, aquatic creature resembling a giant sea serpent. It resides in a large lake and requires the player to swim and dive in order to reach its weak points. The fight involves using the water’s environment to your advantage.'),
('Lados', 'https://i.ibb.co/qLhBdp5Q/8-Yamo-BRender.webp', 'Lados is the eighth Colossus. It is a flying creature that resembles a large, bird-like animal with powerful talons. To defeat Lados, Wander must carefully jump onto its back while avoiding its attacks. The battle becomes a test of timing and precision as it swoops through the sky.'),
('Saggitarus', 'https://i.ibb.co/jk3rS1Cd/9-guide-shadow-of-the-colossus-nom-colosse-09-basaran.webp', 'Saggitarus is the ninth Colossus, an archer-like Colossus resembling a giant with a bow and arrow. It’s one of the more dangerous Colossi due to its long-range attacks. To defeat Saggitarus, Wander must get close enough to strike its weak points.'),
('Cavus', 'https://i.ibb.co/2r1vCsN/10-guide-shadow-of-the-colossus-nom-colosse-10-dirge.webp', 'Cavus is the tenth Colossus and resembles a massive humanoid with an enormous, stone-like body. This Colossus is slow, but its attacks can be lethal if avoided poorly. The player must climb to its back and take down its weak spots to defeat it.'),
('Argus', 'https://i.ibb.co/BHGFmMbX/11-guide-shadow-of-the-colossus-nom-colosse-11-celosia.webp', 'Argus is the eleventh Colossus, a large, humanoid creature with powerful legs. This Colossus is tough to defeat, requiring the player to climb onto its back while avoiding its lethal attacks.'),
('Failan', 'https://i.ibb.co/wqdHXY1/12-guide-shadow-of-the-colossus-nom-colosse-12-pelagia.webp', 'Failan is the twelfth Colossus, resembling a giant beast that resembles a lion or a large cat. The player needs to attack it from a strategic angle in order to defeat it.'),
('Nessus', 'https://i.ibb.co/ZzcrgMh8/13-guide-shadow-of-the-colossus-nom-colosse-13-phalanx.webp', 'Nessus is the thirteenth Colossus and resembles a giant centaur-like creature with a long spear. The Colossus moves quickly and requires the player to carefully time their attacks in order to gain an opening to strike.'),
('Elder', 'https://i.ibb.co/BVpzgmRm/14-guide-shadow-of-the-colossus-nom-colosse-14-cenobia.jpg', 'Elder is the fourteenth Colossus, a massive, towering creature with humanoid features. The player must carefully climb and strike weak points while avoiding the Colossus’s powerful attacks.'),
('Phalanx', 'https://i.ibb.co/hxpKvTk2/15-guide-shadow-of-the-colossus-nom-colosse-15-argus.webp', 'Phalanx is the fifteenth Colossus, a large, flying serpent-like creature. It is one of the most unique Colossi, with a serpentine body that soars through the air. The player must attack its weak spots while avoiding its attacks.'),
('Malus', 'https://i.ibb.co/xK3wZ9cx/16-guide-shadow-of-the-colossus-nom-colosse-16-malus.webp', 'Malus is the sixteenth and final Colossus, a gigantic creature that resembles a humanoid statue. This Colossus is the most dangerous, and the player must carefully maneuver through a series of platforms to avoid its attacks and defeat it.')
;

CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(15),
  email VARCHAR(50) UNIQUE,
  password VARCHAR(100)
);