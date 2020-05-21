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
	amount int,
	amount_type int references AmountType(id),
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

DROP TABLE IF EXISTS EligibilityRequirement CASCADE;

CREATE TABLE EligibilityRequirement (
	id int NOT NULL primary key,
	name text,
	question text,
	question_type_id int references QuestionType(id),
	scheme_id int references Scheme(id),
	subscheme_id int references SubScheme(id),
	validation_id int references Validation(id)
);

CREATE INDEX ON EligibilityRequirement(id);

CREATE TABLE EligibilityRequirementValue (
	id int NOT NULL primary key,
	eligibility_requirement_id int references EligibilityRequirement(id),
	value int,
	rule_id int references Rule(id)
);

CREATE INDEX ON EligibilityRequirementValue(id);


