DROP TABLE IF EXISTS Scheme CASCADE;

CREATE TABLE Scheme (
	id int NOT NULL primary key,
	name text,
	description text
);

CREATE INDEX ON Scheme(id);

DROP TABLE IF EXISTS AmountType CASCADE;

CREATE TABLE AmountType (
	id int NOT NULL primary key,
	name text
);

CREATE INDEX ON AmountType(id);

DROP TABLE IF EXISTS SubScheme CASCADE;

CREATE TABLE SubScheme (
	id int NOT NULL primary key,
	name text,
	description text,
	website text,
	amount int,
	amount_type int references AmountType(id),
	duration int,
	parent_scheme_id int references Scheme(id)
);

CREATE INDEX ON SubScheme(id);

DROP TABLE IF EXISTS QuestionType CASCADE;

CREATE TABLE QuestionType (
	id int NOT NULL primary key,
	name text
);

CREATE INDEX ON QuestionType(id);

DROP TABLE IF EXISTS Validation CASCADE;

CREATE TABLE Validation (
	id int NOT NULL primary key,
	name text
);

CREATE INDEX ON Validation(id);


DROP TABLE IF EXISTS Rule CASCADE;

CREATE TABLE Rule (
	id int NOT NULL primary key,
	name text
);

CREATE INDEX ON Rule(id);

DROP TABLE IF EXISTS EligibilityQuestion CASCADE;

CREATE TABLE EligibilityQuestion (
	id int NOT NULL primary key,
	name text,
	question text,
	question_type_id int references QuestionType(id)
);

CREATE INDEX ON EligibilityQuestion(id);

DROP TABLE IF EXISTS EligibilityRequirement CASCADE;

CREATE TABLE EligibilityRequirement (
	id int NOT NULL primary key,
	eligibility_question_id int references EligibilityQuestion(id),
	value text,
	rule_id int references Rule(id),
	scheme_id int references Scheme(id),
	subscheme_id int references SubScheme(id),
	validation_id int references Validation(id)
);

CREATE INDEX ON EligibilityRequirement(id);


INSERT INTO QuestionType(id, name) VALUES (1, 'plain text');
INSERT INTO QuestionType(id, name) VALUES (2, 'multiple choice');

INSERT INTO AmountType(id, name) VALUES (301, 'one-off');
INSERT INTO AmountType(id, name) VALUES (302, 'monthly');
INSERT INTO AmountType(id, name) VALUES (303, 'yearly');

INSERT INTO EligibilityQuestion(id, name, question, question_type_id) VALUES (4001, 'Residency', 'Have you been a Hong Kong resident for the past 12 months?', 1);
INSERT INTO EligibilityQuestion(id, name, question, question_type_id) VALUES (4002, 'Profession', 'Are you employed in any of the following professions?', 2);
INSERT INTO EligibilityQuestion(id, name, question, question_type_id) VALUES (4003, 'Accredited Tour Guide or Tour Escort', 
	'Are you a freelance accredited tourist guide/tour escort whose main occupation is tourist guide/tour escort who is:
	holding a valid Tourist Guide Pass/Tour Escort Pass issued by TIC on 31 December 2019 AND have
	(a) provided tourist guide/tour escort service for the inbound/outbound tours organised by one or more travel agent(s) for at least 60 days during the period from 1 July 2018 to 31 December 2019; 
	or
	(b) provided tourist guide/tour escort service for the inbound/outbound tours organised by one or more travel agent(s) for at least 20 days per month for at least two months during the period from 1 July 2018 to 31 December 2019?', 1);
INSERT INTO EligibilityQuestion(id, name, question, question_type_id) VALUES (4004, 'Eligible Tour Service Coach Driver', 
	'Are you a tour service coach driver who is currently:
	(a) holding a valid full driving licence for public bus anytime during the period from 1 January 2019 to 8 April 2020; 
	and
	(b) having provided driving service on a non-franchised public bus that provided tour service (A01) and/or international passenger service (A05) (collectively referred to as “tour service” thereafter) for a non-franchised public bus service operator with a then valid Passenger Service Licence anytime during the period above.', 1);

INSERT INTO Scheme(id, name, description) VALUES (1001, 'Anti-epidemic Fund', 'COVID-19 special fund to help businesses stay afloat, to keep workers in employment, to relieve financial burdens of individuals and businesses, and to assist the economy to recover once the epidemic is contained.');
INSERT INTO EligibilityRequirement(id, eligibility_question_id, value, scheme_id) VALUES (5001, 4001, 'yes', 1001);

INSERT INTO SubScheme(id, name, description, website, amount, amount_type, duration, parent_scheme_id) VALUES (2001, 'Travel Agents and Practitioners Support Scheme - Travel Agent', 'Travel agent''s staff each receive a subsidy equivalent to $5,000 monthly for six months. Each subsidy will be disbursed in two tranches', 'https://www.tourism.gov.hk/english/anti_epidemic_fund/travel_agents.html', 5000, 302, 6, 1001);
INSERT INTO EligibilityRequirement(id, eligibility_question_id, value, subscheme_id) VALUES (6001, 4002, 'Travel Agent', 2001);

INSERT INTO SubScheme(id, name, description, website, amount, amount_type, duration, parent_scheme_id) VALUES (2002, 'Travel Agents and Practitioners Support Scheme - Tour Guides and Tour Escorts Support Scheme', 'Freelance accredited tourist guides and tour escorts whose main occupations are tourist guides and tour escorts each receive a subsidy equivalent to $5,000 monthly for six months. Each subsidy will be disbursed in two tranches', 'https://www.tourism.gov.hk/english/anti_epidemic_fund/tourist_guide_escort.html', 5000, 302, 6, 1001);
INSERT INTO EligibilityRequirement(id, eligibility_question_id, value, subscheme_id) VALUES (6002, 4002, 'Tour Guide and/or Tour Escort', 2002);
INSERT INTO EligibilityRequirement(id, eligibility_question_id, value, subscheme_id) VALUES (6003, 4003, 'yes', 2002);

INSERT INTO SubScheme(id, name, description, website, amount, amount_type, duration, parent_scheme_id) VALUES (2003, 'Travel Agents and Practitioners Support Scheme - Tour Guides and Tour Escorts Support Scheme', 'The Tour Service Coach Drivers Support Scheme aims to provide a one-off subsidy of $10,000 to tour service coach drivers each.', 'https://www.tourism.gov.hk/english/anti_epidemic_fund/drivers.html', 10000, 301, 1, 1001);
INSERT INTO EligibilityRequirement(id, eligibility_question_id, value, subscheme_id) VALUES (6004, 4002, 'Tour Guide and/or Tour Escort', 2002);
INSERT INTO EligibilityRequirement(id, eligibility_question_id, value, subscheme_id) VALUES (6005, 4004, 'yes', 2003);




