import { FloatingHeader } from '@/components/navigation/floating-header';
import { RevealOnLoad } from '@/components/reveal-on-load';
import { ScrollArea } from '@/components/scroll-area';
import { Section } from '@/components/section';
import Separator from '@/components/separator';
import { USER } from '@/config/user';
import { GitHubContribution } from '@/features/home/components/github-contribution';
import { Projects } from '@/features/home/components/projects';
import { WordmarkFooter } from '@/components/wordmark-footer';
import { createOgImage } from '@/lib/createOgImage';
import { JsonLd, Organization, WithContext } from '@/lib/seo/json-ld';
import { createMetadata } from '@/lib/seo/metadata';
import type { Metadata } from 'next/types';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const image = createOgImage({ title: USER.tagline, meta: USER.description });
  return createMetadata({
    title: USER.tagline,
    description: USER.description,
    image,
  });
}

export default async function Page() {
  const jsonLd: WithContext<Organization> = {
    '@type': 'Organization',
    '@context': 'https://schema.org',
  };

  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Firebase',
    'Git e GitHub',
    'Automação',
    'IA',
    'n8n',
  ];

  return (
    <>
      <JsonLd code={jsonLd} />
      <ScrollArea useScrollAreaId>
        <FloatingHeader scrollTitle={USER.name} />
        <Separator />

        <Section>
          <RevealOnLoad delay={0} duration={0.5}>
            <div className="space-y-1">
              <h1 className="font-semibold text-2xl">{USER.name}</h1>
              <p className="font-mono text-sm tracking-wider text-muted-foreground uppercase">
                {USER.jobTitle}
              </p>
            </div>
          </RevealOnLoad>

          <RevealOnLoad delay={0.15} duration={0.5}>
            <div className="mt-6 space-y-3 text-foreground/70">
              <p className="leading-relaxed">
                Sou estudante do Ensino Médio e estou construindo minha carreira
                na área de tecnologia, com foco em desenvolvimento web,
                programação e automação.
              </p>
              <p className="leading-relaxed">
                Tenho experiência profissional com atendimento e rotinas
                administrativas e aplico meus conhecimentos em projetos
                próprios, usando tecnologias modernas e ferramentas de IA para
                desenvolver soluções digitais.
              </p>
            </div>
          </RevealOnLoad>

          <RevealOnLoad delay={0.3} duration={0.5}>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologias e conhecimentos">
              {skills.map((skill) => (
                <li key={skill} className="rounded-full border px-3 py-1 text-sm text-foreground/70">
                  {skill}
                </li>
              ))}
            </ul>
          </RevealOnLoad>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a className="underline underline-offset-4" href={USER.social.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="underline underline-offset-4" href={USER.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </Section>

        <Separator />

        <Section>
          <Projects />
        </Section>

        <Separator />

        <Section>
          <div className="space-y-4">
            <h2 className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
              Experiência
            </h2>
            <p className="leading-relaxed text-foreground/70">
              Experiência com atendimento ao cliente, recepção, reservas, caixa,
              pagamentos, emissão de notas fiscais e rotinas administrativas.
              Atualmente também desenvolvo projetos próprios na área de
              tecnologia.
            </p>
          </div>
        </Section>

        <Separator />

        <Section>
          <GitHubContribution />
        </Section>

        <Separator />

        <Section className="px-0 py-0 sm:px-0 md:py-0">
          <WordmarkFooter brandName={USER.name} />
        </Section>
        <Separator />
        <div className="h-[clamp(80px,10vh,200px)] shrink-0" />
      </ScrollArea>
    </>
  );
}
