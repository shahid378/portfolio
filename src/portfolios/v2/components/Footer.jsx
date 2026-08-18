import { profile } from '@data'

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10 text-sm text-ink-faint">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-6">
          <a
            href={profile.links.gitHub}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            CV
          </a>
        </div>
      </div>
    </footer>
  )
}
