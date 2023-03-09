-- public.skill definition

-- Drop table

-- DROP TABLE public.skill;

CREATE TABLE public.skill (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
   personid int4 NOT NULL,
	skill varchar NOT NULL,
	category varchar NULL,
	"level" int4 NULL,
	CONSTRAINT personid FOREIGN KEY (id) REFERENCES public.person(id)
);
CREATE INDEX skill_id_idx ON public.skill USING btree (id);