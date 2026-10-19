import { Code2, Github, Linkedin, Mail } from 'lucide-react';
import { contact, links, profile } from '../data/content';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <p className="mono-label">
            <span className="text-accent">08</span> / contact
          </p>
          <h2
            id="contact-title"
            className="mt-3 max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1] tracking-tighter"
          >
            {contact.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{contact.text}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <dl className="card mt-10 grid gap-6 p-6 sm:grid-cols-3 sm:p-8">
            <div>
              <dt className="mono-label">Email</dt>
              <dd className="mt-2 break-all">
                <a href={links.email} className="hover:text-accent">
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="mono-label">Phone</dt>
              <dd className="mt-2">
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="hover:text-accent">
                  {profile.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="mono-label">Location</dt>
              <dd className="mt-2">{profile.location}</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={links.email} className="btn-primary">
              <Mail size={16} /> Send me an email
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Github size={16} /> GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={links.leetcode} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Code2 size={16} /> LeetCode
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
