-- Characters Draft...
-- Iron Man - https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg - https://terrigen-cdn-dev.marvel.com/content/prod/1x/all-new-iron-man-video-game-marvel-motive-studio-announcement-article-card.jpg
-- Captain America -  https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_crd_03.jpg - https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_mas_dsk_01_4.jpg
-- Thor - https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_04.jpg - https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_mas_dsk_04.jpg
-- Spider-Man - https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_crd_02.jpg - https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp-com_mas_dsk_04.jpg
-- Hulk - https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_crd_03.jpg - https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_mas_dsk_01_1.jpg
-- Ant-Man - https://terrigen-cdn-dev.marvel.com/content/prod/1x/010ant_ons_crd_04.jpg - https://terrigen-cdn-dev.marvel.com/content/prod/1x/010ant_ons_mas_dsk_03_0.jpg
-- Black Widow - https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_ons_crd_04.jpg - https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_lob_mas_dsk_06.jpg
-- Star-Lord - https://terrigen-cdn-dev.marvel.com/content/prod/1x/021slq_ons_crd_02.jpg - https://terrigen-cdn-dev.marvel.com/content/prod/1x/021slq_ons_mas_dsk_01_0.jpg
-- Doctor Stephen Strange - https://terrigen-cdn-dev.marvel.com/content/prod/1x/009drs_ons_crd_03.jpg - https://terrigen-cdn-dev.marvel.com/content/prod/1x/009drs_ons_mas_dsk_04.jpg
-- Loki - https://terrigen-cdn-dev.marvel.com/content/prod/1x/017lok_ons_crd_03.jpg - https://terrigen-cdn-dev.marvel.com/content/prod/1x/017lok_ons_mas_dsk_04.jpg
-- Gamora - https://terrigen-cdn-dev.marvel.com/content/prod/1x/022gam_ons_crd_01-1.jpg - https://terrigen-cdn-dev.marvel.com/content/prod/1x/022gam_ons_mas_dsk_01_0.jpg
-- Nick Fury - https://terrigen-cdn-dev.marvel.com/content/prod/1x/284nfy_ons_crd_01.jpg - https://terrigen-cdn-dev.marvel.com/content/prod/1x/284nfy_ons_mas_dsk_05.jpg
-- Captain Marvel - https://terrigen-cdn-dev.marvel.com/content/prod/1x/008cmv_ons_crd_04.jpg - https://terrigen-cdn-dev.marvel.com/content/prod/1x/008cmv_ons_mas_dsk_02.jpg
-- Black Panther - https://terrigen-cdn-dev.marvel.com/content/prod/1x/007blp_ons_crd_02.jpg - https://terrigen-cdn-dev.marvel.com/content/prod/1x/007blp_ons_mas_dsk_01_2.jpg

INSERT INTO characters(cid, name, alias, tagline, height, weight) VALUES(1, 'Iron Man', 'Tony Stark', 'Genius, Billionaire, Playboy, Philanthropist', 188, 108);
INSERT INTO characters(cid, name, alias, tagline, height, weight) VALUES(2, 'Captain America', 'Steve Rogers', 'The First Avenger', 188, 108);
INSERT INTO characters(cid, name, alias, tagline, height, weight) VALUES(3, 'Thor', 'Thor Odinson', 'God of Thunder', 188, 108);
INSERT INTO characters(cid, name, alias, tagline, height, weight) VALUES(4, 'Spider-Man', 'Peter Parker', 'Friendly Neighborhood', 188, 108);
INSERT INTO characters(cid, name, alias, tagline, height, weight) VALUES(5, 'Hulk', 'Bruce Banner', 'The Strongest One There Is', 188, 108);
INSERT INTO characters(cid, name, alias, tagline, height, weight) VALUES(6, 'Ant-Man', 'Scott Lang', 'The Smallest Avenger', 188, 108);
INSERT INTO characters(cid, name, alias, tagline, height, weight) VALUES(7, 'Black Widow', 'Natasha Romanoff', 'The Red Room', 188, 108);
INSERT INTO characters(cid, name, alias, tagline, height, weight) VALUES(8, 'Star-Lord', 'Peter Quill', 'The Legendary Star-Lord', 188, 108);
INSERT INTO characters(cid, name, alias, tagline, height, weight) VALUES(9, 'Doctor Stephen Strange', 'Stephen Strange', 'The Sorcerer Supreme', 188, 108);
INSERT INTO characters(cid, name, alias, tagline, height, weight) VALUES(10, 'Loki', 'Loki Laufeyson', 'The God of Mischief', 188, 108);
INSERT INTO characters(cid, name, alias, tagline, height, weight) VALUES(11, 'Gamora', 'Gamora Zen Whoberi Ben Titan', 'The Daughter of Thanos', 188, 108);
INSERT INTO characters(cid, name, alias, tagline, height, weight) VALUES(12, 'Nick Fury', 'Nicholas Joseph Fury', 'The Director of S.H.I.E.L.D', 188, 108);
INSERT INTO characters(cid, name, alias, tagline, height, weight) VALUES(13, 'Captain Marvel', 'Carol Danvers', 'The Mightiest Avenger', 188, 108);
INSERT INTO characters(cid, name, alias, tagline, height, weight) VALUES(14, 'Black Panther', 'T Challa', 'King of Wakanda', 188, 108);

INSERT INTO charactersimage(iid, cid, image, fullimage) VALUES (1, 1, 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_mas_dsk_02.jpg');
INSERT INTO charactersimage(iid, cid, image, fullimage) VALUES (2, 2, 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_crd_03.jpg', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_mas_dsk_01_4.jpg');
INSERT INTO charactersimage(iid, cid, image, fullimage) VALUES (3, 3, 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_crd_04.jpg', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_mas_dsk_04.jpg');
INSERT INTO charactersimage(iid, cid, image, fullimage) VALUES (4, 4, 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_crd_02.jpg', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp-com_mas_dsk_04.jpg');
INSERT INTO charactersimage(iid, cid, image, fullimage) VALUES (5, 5, 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_crd_03.jpg', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_mas_dsk_01_1.jpg');
INSERT INTO charactersimage(iid, cid, image, fullimage) VALUES (6, 6, 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/010ant_ons_crd_04.jpg', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/010ant_ons_mas_dsk_03_0.jpg');
INSERT INTO charactersimage(iid, cid, image, fullimage) VALUES (7, 7, 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_ons_crd_04.jpg', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_lob_mas_dsk_06.jpg');
INSERT INTO charactersimage(iid, cid, image, fullimage) VALUES (8, 8, 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/021slq_ons_crd_02.jpg', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/021slq_ons_mas_dsk_01_0.jpg');
INSERT INTO charactersimage(iid, cid, image, fullimage) VALUES (9, 9, 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/009drs_ons_crd_03.jpg', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/009drs_ons_mas_dsk_04.jpg');
INSERT INTO charactersimage(iid, cid, image, fullimage) VALUES (10, 10, 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/017lok_ons_crd_03.jpg', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/017lok_ons_mas_dsk_04.jpg');
INSERT INTO charactersimage(iid, cid, image, fullimage) VALUES (11, 11, 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/022gam_ons_crd_01-1.jpg', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/022gam_ons_mas_dsk_01_0.jpg');
INSERT INTO charactersimage(iid, cid, image, fullimage) VALUES (12, 12, 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/284nfy_ons_crd_01.jpg', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/284nfy_ons_mas_dsk_05.jpg');
INSERT INTO charactersimage(iid, cid, image, fullimage) VALUES (13, 13, 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/008cmv_ons_crd_04.jpg', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/008cmv_ons_mas_dsk_02.jpg');
INSERT INTO charactersimage(iid, cid, image, fullimage) VALUES (14, 14, 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/007blp_ons_crd_02.jpg', 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/007blp_ons_mas_dsk_01_2.jpg');

INSERT INTO charactersstory(sid, csid, cid, storytitle, story, image) VALUES(1, 1, 1, 'Suit Up', 'In a cave in Afghanistan, Tony Stark and Ho Yinsen developed the first Iron Man suit, which Stark used to escape his captors', 'https://terrigen-cdn-dev.marvel.com//content/prod/1x/002irm_ons_mnt_01_1.jpg');
INSERT INTO charactersstory(sid, csid, cid, storytitle, story, image) VALUES(2, 2, 1, 'SAVING NEW YORK ', 'Fighting alongside the Avengers for the first time, Iron Man nearly sacrificed himself in order to save New York.', 'https://terrigen-cdn-dev.marvel.com//content/prod/1x/002irm_ons_mnt_01_1.jpg');
INSERT INTO charactersstory(sid, csid, cid, storytitle, story, image) VALUES(3, 3, 1, 'NEAR DEATH', 'Stark was nearly killed when an attack by the supposed Mandarin destroyed his home, sending him plummeting into the sea.', 'https://terrigen-cdn-dev.marvel.com//content/prod/1x/002irm_ons_mnt_03.jpg');
INSERT INTO charactersstory(sid, csid, cid, storytitle, story, image) VALUES(4, 4, 1, 'SECRETS FROM THE PAST', 'Already on opposite sides of a fight over the Sokovia Accords, Iron Man unleashed his full fury on Captain America and Bucky when he learned the truth about his parents death.', 'https://terrigen-cdn-dev.marvel.com//content/prod/1x/002irm_ons_mnt_04.jpg');
INSERT INTO charactersstory(sid, csid, cid, storytitle, story, image) VALUES(5, 5, 1, 'FACING THE MAD TITAN', 'On the planet Titan, Iron Man, alongside several allies, took on Thanos in a bid to stop the Titan from gaining all of the Infinity Stones.', 'https://terrigen-cdn-dev.marvel.com//content/prod/1x/002irm_ons_mnt_05.jpg');

INSERT INTO LOGINDETAILS(email, token) VALUES('19f104@gmail.com', '1234567890');
-- War Machine 
-- Rocket Raccoon
-- The Wasp
-- Hawkeye
-- Dr. Hank Pym
-- Winter Soldier 
-- Dr. Jane Foster
-- Thanos 
-- Drax the Destroyer
-- Falcon
-- Scarlet Witch
-- Nebula 
-- Groot 
-- Happy Hogan
-- Odin
-- Vision 
-- Mantis
-- M.O.D.O.K.
-- Ultron
-- Red Skull
-- Ronan the Accuser
-- Ebony Maw
-- Corvus Glaive
-- Proxima Midnight
-- Cull Obsidian
-- Black Dwarf
-- Supergiant
-- Black Order
-- Korath the Pursuer
-- Yondu
-- Kraglin
-- Miek
-- Ego
-- Ayesha
-- Kismet