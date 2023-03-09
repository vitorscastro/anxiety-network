-- public.person definition

-- Drop table

-- DROP TABLE public.person;

CREATE TABLE public.person (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	first_name varchar NULL,
	last_name varchar NULL,
	CONSTRAINT person_pk PRIMARY KEY (id)
);
CREATE INDEX person_id_idx ON public.person USING btree (id);