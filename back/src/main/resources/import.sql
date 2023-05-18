-- Inserting data into the EMPLOYEE table
INSERT INTO EMPLOYEE (PRENOM, NOM, POSTE) VALUES ('John', 'Doe', 'Manager');
INSERT INTO EMPLOYEE (PRENOM, NOM, POSTE) VALUES ('Jane', 'Smith', 'Assistant');
INSERT INTO EMPLOYEE (PRENOM, NOM, POSTE) VALUES ('Bob', 'Brown', 'Janitor');

-- Inserting data into the CLIENT table
INSERT INTO CLIENT (PRENOM, NOM, EMAIL) VALUES ('Alice', 'Johnson', 'alice.johnson@email.com');
INSERT INTO CLIENT (PRENOM, NOM, EMAIL) VALUES ('Charlie', 'Williams', 'charlie.williams@email.com');
INSERT INTO CLIENT (PRENOM, NOM, EMAIL) VALUES ('David', 'Miller', 'david.miller@email.com');

-- Inserting data into the RENDEZVOUS table
INSERT INTO RENDEZVOUS (TITRE, DEBUT, FIN, CLIENT_ID, EMPLOYEE_ID) VALUES ('Meeting 1', '2023-05-18 10:00:00', '2023-05-18 11:00:00', 1, 1);
INSERT INTO RENDEZVOUS (TITRE, DEBUT, FIN, CLIENT_ID, EMPLOYEE_ID) VALUES ('Meeting 2', '2023-05-18 12:00:00', '2023-05-18 13:00:00', 2, 2);
INSERT INTO RENDEZVOUS (TITRE, DEBUT, FIN, CLIENT_ID, EMPLOYEE_ID) VALUES ('Meeting 3', '2023-05-18 14:00:00', '2023-05-18 15:00:00', 3, 3);