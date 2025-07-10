import { icons } from '@/components/icons/list';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';

export default function Page() {
  return (
    <Container className="py-16 flex flex-col gap-16">
      <ButtonDocs />
      <LucideIconsDocs />
      <IconsDocs />
    </Container>
  );
}

function ButtonDocs() {
  return (
    <section>
      <Heading className="">Button</Heading>
      <div className="space-y-8">
        <div className="space-y-4">
          <Heading as="h2" variant="h2">
            Button Props
          </Heading>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Prop</th>
                  <th className="text-left p-2">Type</th>
                  <th className="text-left p-2">Default</th>
                  <th className="text-left p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-medium">variant</td>
                  <td className="p-2">
                    <code>
                      primary | destructive | secondary | tertiary | quaternary
                      | ghost | link
                    </code>
                  </td>
                  <td className="p-2">
                    <code>primary</code>
                  </td>
                  <td className="p-2">Visual style of the button</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">size</td>
                  <td className="p-2">
                    <code>default | sm | lg | icon</code>
                  </td>
                  <td className="p-2">
                    <code>default</code>
                  </td>
                  <td className="p-2">Size of the button</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">outline</td>
                  <td className="p-2">
                    <code>boolean</code>
                  </td>
                  <td className="p-2">
                    <code>false</code>
                  </td>
                  <td className="p-2">
                    When true, renders an outlined version of the button variant
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">asChild</td>
                  <td className="p-2">
                    <code>boolean</code>
                  </td>
                  <td className="p-2">
                    <code>false</code>
                  </td>
                  <td className="p-2">
                    When true, button will be rendered as a child element
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">className</td>
                  <td className="p-2">
                    <code>string</code>
                  </td>
                  <td className="p-2">-</td>
                  <td className="p-2">Additional CSS classes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <Heading as="h2" variant="h2">
            Variants
          </Heading>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="quaternary">Quaternary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
        <div className="space-y-4">
          <Heading as="h2" variant="h2">
            Variants + Outline
          </Heading>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" outline>
              Outline Primary
            </Button>
            <Button variant="secondary" outline>
              Outline Secondary
            </Button>
            <Button variant="tertiary" outline>
              Outline Tertiary
            </Button>
            <Button variant="quaternary" outline>
              Outline Quaternary
            </Button>
            <Button variant="destructive" outline>
              Outline Destructive
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <Heading as="h2" variant="h2">
            Sizes
          </Heading>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <title>Heart icon</title>
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <Heading as="h2" variant="h2">
            With Icon
          </Heading>
          <div className="flex flex-wrap gap-4">
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <title>Heart icon</title>
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              Like
            </Button>
            <Button variant="primary" outline>
              Download
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <title>Download icon</title>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <Heading as="h2" variant="h2">
            Disabled
          </Heading>
          <div className="flex flex-wrap gap-4">
            <Button disabled>Disabled</Button>
            <Button variant="primary" outline disabled>
              Disabled
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconsDocs() {
  return (
    <section>
      <Heading className="">Custom Icons</Heading>
      <div className="space-y-8">
        <div className="space-y-4">
          <Heading as="h2" variant="h2">
            Icons
          </Heading>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(icons).map(([name, Icon]) => (
          <div key={name} className="flex flex-col items-center gap-2">
            <Icon className="w-6 h-6" />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function LucideIconsDocs() {
  return (
    <section>
      <Heading className="">Lucide Icons</Heading>
      <div className="space-y-8">
        <div className="space-y-4">
          <Heading as="h2" variant="h2">
            Icons
          </Heading>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Button variant="primary" asChild>
          <a
            href="https://lucide.dev/icons/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucide Icons
          </a>
        </Button>
      </div>
    </section>
  );
}
